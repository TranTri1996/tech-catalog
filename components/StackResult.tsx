"use client"

import type { Technology } from "@/types"
import { TechCard } from "./TechCard"
import { Copy, RotateCcw, ExternalLink } from "lucide-react"
import Link from "next/link"

interface StackResultProps {
  stack: Technology[]
  answers: Record<string, string>
  onRestart: () => void
}

export function StackResult({ stack, answers, onRestart }: StackResultProps) {
  const copyStack = () => {
    const stackText = stack.map((tech) => `${tech.name} - ${tech.description}`).join("\n")
    navigator.clipboard.writeText(stackText)
  }

  const getAnswerSummary = () => {
    return [
      `Language: ${answers.language}`,
      `Backend: ${answers["backend-type"]} (${answers["backend-style"]})`,
      `Frontend: ${answers.frontend}`,
      `Database: ${answers.database}`,
      `Real-time: ${answers.realtime}`,
      `Scale: ${answers.scale}`,
    ].join(" • ")
  }

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Your Recommended Stack
        </h1>
        <p className="text-gray-400 mb-4">Based on your preferences: {getAnswerSummary()}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={copyStack}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <Copy className="w-4 h-4" />
            Copy Stack
          </button>
          <button
            onClick={onRestart}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Start Over
          </button>
          <Link
            href="/catalog"
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Explore Catalog
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stack.map((tech) => (
          <TechCard key={tech.id} technology={tech} />
        ))}
      </div>

      {/* AI Explanation Placeholder */}
      <div className="mt-12 tech-card p-6">
        <h3 className="text-lg font-semibold mb-4 text-blue-400">Why This Stack?</h3>
        <div className="space-y-3 text-gray-300">
          <p>
            This stack was chosen based on your preferences for <strong>{answers.language}</strong> as your primary
            language and your need for a <strong>{answers["backend-style"]}</strong> backend approach.
          </p>
          <p>
            The combination provides excellent developer experience with modern tooling, strong community support, and
            proven scalability for <strong>{answers.scale}</strong> scale applications.
          </p>
          {answers.realtime === "yes" && (
            <p>
              Real-time capabilities are included to support interactive features like live updates and collaboration.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
