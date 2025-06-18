import Link from "next/link"
import { Code2, Zap, Search } from "lucide-react"

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Tech Stack Explorer
        </h1>
        <p className="text-xl text-gray-400 mb-8">Discover technologies and build your perfect stack</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Link href="/catalog" className="group">
          <div className="tech-card h-full p-8 text-center hover:scale-105 transition-transform">
            <Search className="w-12 h-12 mx-auto mb-4 text-blue-400 group-hover:text-blue-300" />
            <h2 className="text-2xl font-bold mb-4">Browse Catalog</h2>
            <p className="text-gray-400 mb-6">
              Explore hundreds of technologies organized by category. Filter by language, type, and compatibility.
            </p>
            <div className="text-blue-400 font-medium">Browse Technologies →</div>
          </div>
        </Link>

        <Link href="/wizard" className="group">
          <div className="tech-card h-full p-8 text-center hover:scale-105 transition-transform">
            <Zap className="w-12 h-12 mx-auto mb-4 text-purple-400 group-hover:text-purple-300" />
            <h2 className="text-2xl font-bold mb-4">Stack Wizard</h2>
            <p className="text-gray-400 mb-6">
              Answer a few questions and get personalized stack recommendations based on your project needs.
            </p>
            <div className="text-purple-400 font-medium">Start Wizard →</div>
          </div>
        </Link>
      </div>

      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 text-gray-500">
          <Code2 className="w-4 h-4" />
          <span>Built for developers, by developers</span>
        </div>
      </div>
    </div>
  )
}
