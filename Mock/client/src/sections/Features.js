'use client'

import { Bolt, Brain, BarChart } from 'lucide-react'

export default function Features() {
  return (
    <section className="relative bg-[#0B0F19] text-white pt-20 pb-28 overflow-hidden">
      {/* Top curved background */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#0B0F19] to-transparent rounded-b-[100%] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 leading-snug">
          Instant databases, intelligent queries, effortless insights.
        </h2>

        <div className="grid gap-12 md:grid-cols-3">
          <div className="flex flex-col items-start">
            <div className="bg-blue-900 p-3 rounded-full mb-4">
              <Bolt size={24} className="text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Instant Database Instances</h3>
            <p className="text-sm text-gray-400">
              One-click deployment of fully configured databases like PostgreSQL, MongoDB, ClickHouse, Redis, and Neo4j, ready for immediate use.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <div className="bg-blue-900 p-3 rounded-full mb-4">
              <Brain size={24} className="text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">AI-Powered Querying and Data Management</h3>
            <p className="text-sm text-gray-400">
              Natural language prompts are converted into complex queries, enabling seamless data interaction and automation, including CSV imports and external data integration.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <div className="bg-blue-900 p-3 rounded-full mb-4">
              <BarChart size={24} className="text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Seamless Data Visualization</h3>
            <p className="text-sm text-gray-400">
              Automatically generate dynamic charts and graphs from query results, making data analysis quick and visually intuitive.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
