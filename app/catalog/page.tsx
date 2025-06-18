"use client"

import { useState, useMemo } from "react"
import { technologies } from "@/data/technologies"
import type { TechType } from "@/types"
import { TechCard } from "@/components/TechCard"
import { Search, Filter } from "lucide-react"

export default function CatalogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState<TechType | "all">("all")
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all")

  const techTypes = Array.from(new Set(technologies.map((tech) => tech.type)))
  const languages = Array.from(new Set(technologies.map((tech) => tech.language).filter(Boolean)))

  const filteredTechnologies = useMemo(() => {
    return technologies.filter((tech) => {
      const matchesSearch =
        tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tech.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tech.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesType = selectedType === "all" || tech.type === selectedType
      const matchesLanguage = selectedLanguage === "all" || tech.language === selectedLanguage

      return matchesSearch && matchesType && matchesLanguage
    })
  }, [searchTerm, selectedType, selectedLanguage])

  const groupedTechnologies = useMemo(() => {
    const groups: Record<string, typeof technologies> = {}
    filteredTechnologies.forEach((tech) => {
      if (!groups[tech.type]) {
        groups[tech.type] = []
      }
      groups[tech.type].push(tech)
    })
    return groups
  }, [filteredTechnologies])

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Technology Catalog</h1>
        <p className="text-gray-400 mb-6">
          Explore {technologies.length} technologies across {techTypes.length} categories
        </p>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
            />
          </div>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as TechType | "all")}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
          >
            <option value="all">All Types</option>
            {techTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
          >
            <option value="all">All Languages</option>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        <div className="text-sm text-gray-400">
          Showing {filteredTechnologies.length} of {technologies.length} technologies
        </div>
      </div>

      {/* Technology Groups */}
      <div className="space-y-8">
        {Object.entries(groupedTechnologies).map(([type, techs]) => (
          <div key={type}>
            <h2 className="text-xl font-semibold mb-4 text-blue-400">
              {type} ({techs.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {techs.map((tech) => (
                <TechCard key={tech.id} technology={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredTechnologies.length === 0 && (
        <div className="text-center py-12">
          <Filter className="w-12 h-12 mx-auto text-gray-600 mb-4" />
          <h3 className="text-lg font-medium text-gray-400 mb-2">No technologies found</h3>
          <p className="text-gray-500">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  )
}
