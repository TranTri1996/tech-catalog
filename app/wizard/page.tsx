"use client"

import { useState } from "react"
import { wizardQuestions } from "@/data/wizard-questions"
import { technologies } from "@/data/technologies"
import type { WizardState, Technology } from "@/types"
import { WizardStep } from "@/components/WizardStep"
import { StackResult } from "@/components/StackResult"
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react"

export default function WizardPage() {
  const [wizardState, setWizardState] = useState<WizardState>({
    currentStep: 0,
    answers: {},
    recommendedStack: [],
  })

  const currentQuestion = wizardQuestions[wizardState.currentStep]
  const isLastStep = wizardState.currentStep === wizardQuestions.length - 1
  const isComplete = wizardState.currentStep >= wizardQuestions.length

  const handleAnswer = (questionId: string, answer: string) => {
    const newAnswers = { ...wizardState.answers, [questionId]: answer }
    setWizardState((prev) => ({
      ...prev,
      answers: newAnswers,
    }))
  }

  const nextStep = () => {
    if (isLastStep) {
      // Generate recommendations
      const stack = generateRecommendations(wizardState.answers)
      setWizardState((prev) => ({
        ...prev,
        currentStep: prev.currentStep + 1,
        recommendedStack: stack,
      }))
    } else {
      setWizardState((prev) => ({
        ...prev,
        currentStep: prev.currentStep + 1,
      }))
    }
  }

  const prevStep = () => {
    setWizardState((prev) => ({
      ...prev,
      currentStep: Math.max(0, prev.currentStep - 1),
    }))
  }

  const restart = () => {
    setWizardState({
      currentStep: 0,
      answers: {},
      recommendedStack: [],
    })
  }

  const generateRecommendations = (answers: Record<string, string>): Technology[] => {
    const stack: Technology[] = []

    // Language
    const language = technologies.find((t) => t.id === answers.language)
    if (language) stack.push(language)

    // Backend Framework
    let backendFramework: Technology | undefined
    if (answers.language === "javascript" || answers.language === "typescript") {
      if (answers["backend-style"] === "minimal") {
        backendFramework = technologies.find((t) => t.id === "express")
      } else {
        backendFramework = technologies.find((t) => t.id === "nestjs")
      }
    } else if (answers.language === "python") {
      if (answers["backend-style"] === "minimal") {
        backendFramework = technologies.find((t) => t.id === "fastapi")
      } else {
        backendFramework = technologies.find((t) => t.id === "django")
      }
    } else if (answers.language === "java") {
      backendFramework = technologies.find((t) => t.id === "spring")
    } else if (answers.language === "elixir") {
      backendFramework = technologies.find((t) => t.id === "phoenix")
    }
    if (backendFramework) stack.push(backendFramework)

    // Frontend Framework
    if (answers.frontend === "ssr" || answers.frontend === "hybrid") {
      const nextjs = technologies.find((t) => t.id === "nextjs")
      if (nextjs) stack.push(nextjs)
    } else {
      const react = technologies.find((t) => t.id === "react")
      if (react) stack.push(react)
    }

    // UI Library
    const tailwind = technologies.find((t) => t.id === "tailwindcss")
    if (tailwind) stack.push(tailwind)

    // Database
    if (answers.database === "sql" || answers.database === "both") {
      const postgres = technologies.find((t) => t.id === "postgresql")
      if (postgres) stack.push(postgres)
    }
    if (answers.database === "nosql" || answers.database === "both") {
      const mongo = technologies.find((t) => t.id === "mongodb")
      if (mongo) stack.push(mongo)
    }

    // Cache
    const redis = technologies.find((t) => t.id === "redis")
    if (redis) stack.push(redis)

    // Real-time
    if (answers.realtime === "yes") {
      const socketio = technologies.find((t) => t.id === "socketio")
      if (socketio) stack.push(socketio)
    }

    // DevOps
    const docker = technologies.find((t) => t.id === "docker")
    if (docker) stack.push(docker)

    // Hosting
    if (answers.frontend === "ssr" || answers.frontend === "static") {
      const vercel = technologies.find((t) => t.id === "vercel")
      if (vercel) stack.push(vercel)
    } else if (answers.scale === "large") {
      const aws = technologies.find((t) => t.id === "aws")
      if (aws) stack.push(aws)
    }

    return stack
  }

  if (isComplete) {
    return (
      <div className="max-w-4xl mx-auto">
        <StackResult stack={wizardState.recommendedStack} answers={wizardState.answers} onRestart={restart} />
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-6 h-6 text-purple-400" />
          <h1 className="text-3xl font-bold">Stack Wizard</h1>
        </div>
        <p className="text-gray-400">Answer a few questions to get personalized technology recommendations</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>
            Question {wizardState.currentStep + 1} of {wizardQuestions.length}
          </span>
          <span>{Math.round(((wizardState.currentStep + 1) / wizardQuestions.length) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((wizardState.currentStep + 1) / wizardQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      <WizardStep
        question={currentQuestion}
        selectedAnswer={wizardState.answers[currentQuestion.id]}
        onAnswer={(answer) => handleAnswer(currentQuestion.id, answer)}
      />

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <button
          onClick={prevStep}
          disabled={wizardState.currentStep === 0}
          className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>

        <button
          onClick={nextStep}
          disabled={!wizardState.answers[currentQuestion.id]}
          className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-medium transition-colors"
        >
          {isLastStep ? "Get Recommendations" : "Next"}
          {!isLastStep && <ChevronRight className="w-4 h-4" />}
        </button>
      </div>
    </div>
  )
}
