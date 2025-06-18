"use client"

import type { WizardQuestion } from "@/types"
import { Check } from "lucide-react"

interface WizardStepProps {
  question: WizardQuestion
  selectedAnswer?: string
  onAnswer: (answer: string) => void
}

export function WizardStep({ question, selectedAnswer, onAnswer }: WizardStepProps) {
  return (
    <div className="tech-card p-6">
      <h2 className="text-xl font-semibold mb-6">{question.question}</h2>

      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.value}
            onClick={() => onAnswer(option.value)}
            className={`w-full text-left p-4 rounded-lg border transition-all ${
              selectedAnswer === option.value
                ? "border-blue-500 bg-blue-500/10"
                : "border-gray-700 hover:border-gray-600 hover:bg-gray-800/50"
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                  selectedAnswer === option.value ? "border-blue-500 bg-blue-500" : "border-gray-600"
                }`}
              >
                {selectedAnswer === option.value && <Check className="w-3 h-3 text-white" />}
              </div>
              <div className="flex-1">
                <div className="font-medium text-white">{option.label}</div>
                {option.description && <div className="text-sm text-gray-400 mt-1">{option.description}</div>}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
