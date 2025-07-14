import { BorderBeam } from "@/components/magicui/border-beam";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
function HeroVideo(props) {
  return (
    <div className="px-4">
      <div className="relative max-w-6xl mx-auto">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="/heroVideoThumbnail.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="/heroVideoThumbnail.png"
        thumbnailAlt="Hero Video"
      />
      <BorderBeam duration={8} size={100} />
    </div>
    </div>
  );
}

export default HeroVideo;
