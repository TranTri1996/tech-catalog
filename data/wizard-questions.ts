import type { WizardQuestion } from "@/types"

export const wizardQuestions: WizardQuestion[] = [
  {
    id: "language",
    question: "Which programming language do you prefer?",
    options: [
      { value: "javascript", label: "JavaScript", description: "Dynamic and versatile" },
      { value: "typescript", label: "TypeScript", description: "JavaScript with static typing" },
      { value: "python", label: "Python", description: "Simple and readable" },
      { value: "java", label: "Java", description: "Enterprise and robust" },
      { value: "go", label: "Go", description: "Simple and concurrent" },
      { value: "rust", label: "Rust", description: "Fast and memory-safe" },
      { value: "elixir", label: "Elixir", description: "Functional and fault-tolerant" },
    ],
  },
  {
    id: "backend-type",
    question: "What type of backend do you need?",
    options: [
      { value: "full-stack", label: "Full-stack Framework", description: "Complete web application framework" },
      { value: "api-only", label: "API-only", description: "Just REST/GraphQL APIs" },
      { value: "serverless", label: "Serverless Functions", description: "Event-driven functions" },
    ],
  },
  {
    id: "backend-style",
    question: "Do you prefer minimal or batteries-included frameworks?",
    options: [
      { value: "minimal", label: "Minimal", description: "Lightweight, build what you need" },
      { value: "batteries-included", label: "Batteries-included", description: "Full-featured out of the box" },
      { value: "enterprise", label: "Enterprise", description: "Robust, scalable, proven" },
    ],
  },
  {
    id: "frontend",
    question: "What frontend approach do you prefer?",
    options: [
      { value: "spa", label: "Single Page App", description: "Client-side rendered" },
      { value: "ssr", label: "Server-side Rendered", description: "Better SEO and performance" },
      { value: "static", label: "Static Site", description: "Pre-built HTML files" },
      { value: "hybrid", label: "Hybrid", description: "Mix of static and dynamic" },
    ],
  },
  {
    id: "database",
    question: "What type of database do you need?",
    options: [
      { value: "sql", label: "SQL Database", description: "Structured, ACID compliant" },
      { value: "nosql", label: "NoSQL Database", description: "Flexible, document-based" },
      { value: "both", label: "Both", description: "SQL for structure, NoSQL for flexibility" },
    ],
  },
  {
    id: "realtime",
    question: "Do you need real-time features?",
    options: [
      { value: "yes", label: "Yes", description: "Chat, live updates, collaboration" },
      { value: "no", label: "No", description: "Traditional request-response" },
    ],
  },
  {
    id: "scale",
    question: "What scale do you expect?",
    options: [
      { value: "small", label: "Small Scale", description: "Personal projects, prototypes" },
      { value: "medium", label: "Medium Scale", description: "Small to medium business" },
      { value: "large", label: "Large Scale", description: "High traffic, enterprise" },
    ],
  },
]
