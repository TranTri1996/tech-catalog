export interface Technology {
  id: string
  name: string
  type: TechType
  language?: string
  style: TechStyle
  tags: string[]
  compatible_with: string[]
  description: string
  official_docs_url: string
  logo_url: string
}

export type TechType =
  | "Programming Languages"
  | "Backend Frameworks"
  | "Frontend Frameworks"
  | "UI Libraries"
  | "State Management"
  | "Databases"
  | "Cache"
  | "Message Queue"
  | "Authentication"
  | "CI/CD"
  | "Hosting"
  | "DevOps"
  | "Real-time"
  | "Testing"
  | "Monitoring"

export type TechStyle = "minimal" | "batteries-included" | "enterprise" | "lightweight"

export interface WizardState {
  currentStep: number
  answers: Record<string, string>
  recommendedStack: Technology[]
}

export interface WizardQuestion {
  id: string
  question: string
  options: Array<{
    value: string
    label: string
    description?: string
  }>
}
