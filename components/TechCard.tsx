import Image from "next/image"
import type { Technology } from "@/types"
import { ExternalLink } from "lucide-react"

interface TechCardProps {
  technology: Technology
}

const tagColors = {
  dynamic: "bg-yellow-500/20 text-yellow-300",
  interpreted: "bg-green-500/20 text-green-300",
  web: "bg-blue-500/20 text-blue-300",
  "static-typing": "bg-purple-500/20 text-purple-300",
  compiled: "bg-red-500/20 text-red-300",
  versatile: "bg-indigo-500/20 text-indigo-300",
  "ai-ml": "bg-pink-500/20 text-pink-300",
  systems: "bg-orange-500/20 text-orange-300",
  "memory-safe": "bg-teal-500/20 text-teal-300",
  performance: "bg-red-500/20 text-red-300",
  concurrent: "bg-cyan-500/20 text-cyan-300",
  simple: "bg-gray-500/20 text-gray-300",
  "object-oriented": "bg-violet-500/20 text-violet-300",
  enterprise: "bg-amber-500/20 text-amber-300",
  functional: "bg-emerald-500/20 text-emerald-300",
  "fault-tolerant": "bg-lime-500/20 text-lime-300",
  default: "bg-gray-500/20 text-gray-300",
}

export function TechCard({ technology }: TechCardProps) {
  return (
    <div className="tech-card group">
      <div className="flex items-start gap-3 mb-3">
        <Image
          src={technology.logo_url || "/placeholder.svg"}
          alt={`${technology.name} logo`}
          width={32}
          height={32}
          className="tech-logo flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">{technology.name}</h3>
          {technology.language && <p className="text-sm text-gray-400">{technology.language}</p>}
        </div>
        <a
          href={technology.official_docs_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <p className="text-sm text-gray-300 mb-3 line-clamp-2">{technology.description}</p>

      <div className="flex flex-wrap gap-1 mb-3">
        {technology.tags.map((tag) => (
          <span key={tag} className={`tag ${tagColors[tag as keyof typeof tagColors] || tagColors.default}`}>
            {tag}
          </span>
        ))}
      </div>

      <div className="text-xs text-gray-500">
        <span className="capitalize">{technology.style}</span> • {technology.type}
      </div>
    </div>
  )
}
