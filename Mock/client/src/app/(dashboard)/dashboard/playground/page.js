"use client";
import AppConfidenceChart from "@/components/dashboard/AppConfidenceChart";
import { Lens } from "@/components/magicui/lens";
import { Button } from "@/components/ui/button";
import {
  ArrowBigLeft,
  ArrowBigRight,
  DropletIcon,
  FileUp,
  RotateCcw,
  ZapIcon,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { toast, Toaster } from "sonner";
export default function AdversarialAttackDemo() {
  const [model, setModel] = useState("mnist");
  const [attack, setAttack] = useState("fgsm");
  const [originalImage, setOriginalImage] = useState(null);
  const [adversarialImage, setAdversarialImage] = useState(null);
  const [originalScore, setOriginalScore] = useState(0);
  const [adversialScore, setAdversialScore] = useState(0);
  const [heatmapImage, setHeatmapImage] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [originalPrediction, setOriginalPrediction] =
    useState("No prediction yet");
  const [adversarialPrediction, setAdversarialPrediction] =
    useState("No prediction yet");
  const [isLoading, setIsLoading] = useState(false);
  const [customModelFile, setCustomModelFile] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const stored = localStorage.getItem("uploadedImages");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setUploadedImages(parsed);
          setOriginalImage(parsed[0]?.url);
        }
      } catch (err) {
        console.error("Failed to parse uploadedImages:", err);
      }
    }
  }, []);
  const handleNextImage = () => {
    if (uploadedImages.length === 0) return;
    const nextIndex = (currentImageIndex + 1) % uploadedImages.length;
    setCurrentImageIndex(nextIndex);
    setOriginalImage(uploadedImages[nextIndex].url);
  };

  const handlePreviousImage = () => {
    if (uploadedImages.length === 0) return;
    const prevIndex =
      (currentImageIndex - 1 + uploadedImages.length) % uploadedImages.length;
    setCurrentImageIndex(prevIndex);
    setOriginalImage(uploadedImages[prevIndex].url);
  };

  const fileInputRef = useRef(null);

  const handleModelChange = (e) => {
    setModel(e.target.value);
    resetState();
  };

  const handleAttackChange = (e) => {
    setAttack(e.target.value);
    resetState();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        setOriginalImage(event.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetState = () => {
    setOriginalPrediction("No prediction yet");
    setAdversarialPrediction("No prediction yet");
    setHeatmapImage(null);
    setOriginalScore(0);
    setAdversialScore(0);
    setError(null);
  };
  const handleSave = async () => {
    try {
      await fetch("/api/playground", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          modelUsed: model,
          attackUsed: attack,
          originalPrediction:
            model === "mnist"
              ? originalPrediction.replace("Original: ", "")
              : originalPrediction
                  .split("(")[0]
                  .replace("Original: ", "")
                  .trim(),
          originalConfidence: originalScore,
          adversarialPrediction:
            model === "mnist"
              ? adversarialPrediction.replace("Adversarial: ", "")
              : adversarialPrediction
                  .split("(")[0]
                  .replace("Adversarial: ", "")
                  .trim(),
          adversarialConfidence: adversialScore,
          originalImage,
          adversarialImage,
          heatmapImage,
        }),
      });
      toast.success("Analysis result saved successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to save analysis result.");
    }
  };

  const handleSubmit = async () => {
    const fileInputFile = fileInputRef.current?.files?.[0];

    if (!fileInputFile && !originalImage) {
      setError("Please upload or select an image first!");
      return;
    }
    const formData = new FormData();
    formData.append("model", model);
    formData.append("attack", attack);

    if (customModelFile) {
      formData.append("custom_model", customModelFile);
    }

    setIsLoading(true);
    setAdversarialPrediction("Generating...");
    setError(null);

    if (fileInputFile) {
      formData.append("image", fileInputFile);
    } else if (originalImage) {
      const byteString = atob(originalImage.split(",")[1]);
      const mimeString = originalImage
        .split(",")[0]
        .split(":")[1]
        .split(";")[0];

      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }

      const blob = new Blob([ab], { type: mimeString });
      const fileFromBlob = new File([blob], "image.png", { type: mimeString });
      formData.append("image", fileFromBlob);
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      console.log(data);

      if (data.error) throw new Error(data.error);

      setAdversarialImage(`data:image/png;base64,${data.adversarial_image}`);
      setHeatmapImage(`http://localhost:5000${data.heatmap_image}`);

      if (model === "mnist") {
        setOriginalPrediction(`Original: ${data.original_prediction}`);
        setAdversarialPrediction(`Adversarial: ${data.adversarial_prediction}`);
      } else {
        setOriginalPrediction(
          `Original: ${
            data.original_prediction.class_name
          } (Confidence Score: ${(
            data.original_prediction.probability * 100
          ).toFixed(2)}%)`
        );
        setOriginalScore(data.original_prediction.probability);
        setAdversarialPrediction(
          `Adversarial: ${
            data.adversarial_prediction.class_name
          } (Confidence Score: ${(
            data.adversarial_prediction.probability * 100
          ).toFixed(2)}%)`
        );
        setAdversialScore(data.adversarial_prediction.probability);
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      setAdversarialPrediction("Error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="p-6">
      <Toaster richColors />
      <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Main Functionality */}
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">
              Adversarial Attack Playground
            </h1>
            <p className="text-muted-foreground mt-2">
              Test how different models respond to adversarial examples
            </p>
          </div>
          <div className="mb-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="model-select"
                  className="block text-sm font-medium mb-2"
                >
                  Select a Model
                </label>
                <select
                  id="model-select"
                  className="block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3"
                  value={model}
                  onChange={handleModelChange}
                  disabled={isLoading}
                >
                  <option value="mnist" className="text-black">
                    MNIST (Digit Classification)
                  </option>
                  <option value="imagenet" className="text-black">
                    MobileNetV2 (ImageNet)
                  </option>
                  <option value="resnet50" className="text-black">
                    ResNet50 (ImageNet)
                  </option>
                  <option value="vgg16" className="text-black">
                    VGG16 (ImageNet)
                  </option>
                </select>
                <p className="mt-1 text-sm text-gray-500">
                  {model === "mnist"
                    ? "For handwritten digit images (28×28 grayscale)"
                    : "For general images (224×224 color)"}
                </p>
              </div>

              <div>
                <label
                  htmlFor="attack-select"
                  className="block text-sm font-medium mb-2"
                >
                  Select an Attack Method
                </label>
                <select
                  id="attack-select"
                  className="block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3"
                  value={attack}
                  onChange={handleAttackChange}
                  disabled={isLoading}
                >
                  <option value="fgsm" className="text-black">
                    Fast Gradient Sign Method (weak)
                  </option>
                  <option value="bim" className="text-black">
                    Basic Iterative Method (stronger)
                  </option>
                  <option value="pgd" className="text-black">
                    Projected Gradient Descent (strongest)
                  </option>
                </select>
                <p className="mt-1 text-sm text-gray-500">
                  Choose how to generate the adversarial image
                </p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4">
              <div className="relative h-30 rounded-xl overflow-hidden flex w-full bg-muted/30">
                {/* Upload an Image*/}
                <div
                  className="flex items-center justify-center bg-indigo-600 p-4"
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)",
                  }}
                >
                  <div>
                    <label
                      htmlFor="image-input"
                      className="block text-sm font-medium mb-2 text-center text-white"
                    >
                      Upload an Image
                    </label>
                    <input
                      type="file"
                      id="image-input"
                      ref={fileInputRef}
                      accept="image/*"
                      onChange={handleFileChange}
                      disabled={isLoading}
                      className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-black hover:file:bg-indigo-100"
                    />
                  </div>
                </div>

                {/* Select an Image from Gallery */}
                <div className="flex items-center justify-center overflow-auto">
                  <div className="p-4">
                    <label className="block text-sm text-center font-medium mb-2">
                      Select an Image from Gallery
                    </label>
                    <div className="flex items-center gap-4 mt-2">
                      <Button
                        variant="outline"
                        onClick={handlePreviousImage}
                        disabled={uploadedImages.length === 0}
                      >
                        <ArrowBigLeft className="mr-2" /> Previous
                      </Button>

                      <span className="text-sm text-muted-foreground">
                        {uploadedImages.length > 0
                          ? `Image ${currentImageIndex + 1} of ${
                              uploadedImages.length
                            }`
                          : "No images"}
                      </span>

                      <Button
                        variant="outline"
                        onClick={handleNextImage}
                        disabled={uploadedImages.length === 0}
                      >
                        Next <ArrowBigRight className="ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center justify-between flex-wrap gap-4 pt-6">
                <Button
                  onClick={handleSubmit}
                  disabled={isLoading || !originalImage}
                  className={`w-fit cursor-pointer flex justify-center py-2 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    isLoading || !originalImage
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Generate Adversarial"
                  )}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={resetState}
                  className="text-sm font-medium"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>
              {/* Save Analysis Results to Database */}
              <div className="flex gap-4 pt-6 justify-end">
                <Button
                  onClick={handleSave}
                  disabled={!adversarialImage}
                  className={"bg-lime-400"}
                >
                  Save Results
                </Button>
              </div>
            </div>
            {error && (
              <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-400 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-red-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col overflow-hidden">
              <div className="py-5">
                <h2 className="text-lg font-medium">Original Image</h2>
                <p className="text-sm text-gray-500">
                  {model === "mnist"
                    ? "Digit prediction"
                    : "ImageNet classification"}
                </p>
              </div>
              <div className="py-5 flex flex-1 flex-col">
                {originalImage ? (
                  <div className="flex-1 flex items-center justify-center cursor-zoom-in">
                    <Lens>
                      <img
                        src={originalImage}
                        alt="Original"
                        className={model === "mnist" ? "grayscale" : ""}
                      />
                    </Lens>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center border border-dashed p-8 text-center animate-in fade-in-50 rounded-md">
                    <p className="text-center text-xl text-muted-foreground max-w-lg">
                      No image uploaded yet
                    </p>
                  </div>
                )}
                <p className="mt-4 font-medium">{originalPrediction}</p>
              </div>
            </div>

            <div className="flex flex-col h-full overflow-hidden">
              <div className="py-5">
                <h2 className="text-lg font-medium">Adversarial Image</h2>
                <p className="text-sm text-gray-500">
                  Modified to fool the model
                </p>
              </div>
              <div className="py-5 flex flex-col">
                {adversarialImage ? (
                  <div className="flex-1 flex items-center justify-center cursor-zoom-in">
                    <Lens>
                      <img
                        src={adversarialImage}
                        alt="Adversarial"
                        className={model === "mnist" ? "grayscale" : ""}
                      />
                    </Lens>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center border border-dashed p-8 text-center animate-in fade-in-50 rounded-md">
                    <p className="text-center text-xl text-muted-foreground max-w-lg">
                      Adversarial image will appear here
                    </p>
                  </div>
                )}
                <p className="mt-4 font-medium">{adversarialPrediction}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Visual Analytics */}
        <div>
          <AppConfidenceChart
            originalConfidence={originalScore}
            adversarialConfidence={adversialScore}
          />
          {/* Heatmap Section */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-center mb-4">
              Adversarial Perturbation Heatmap
            </h3>
            {heatmapImage ? (
              <div className="flex flex-col items-center space-y-3">
                <div className="relative w-full max-w-sm rounded-lg overflow-hidden">
                  <img
                    src={heatmapImage}
                    alt="Adversarial perturbation heatmap"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm text-muted-foreground text-center flex gap-1 justify-center items-center">
                  <span className="w-2 h-2 bg-red-700 rounded-full"></span>Red
                  areas show where the model was most sensitive to changes
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 rounded-lg border-2 border-dashed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
                <p className="text-center">
                  Heatmap will appear here <br /> after generating adversarial
                  example
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
