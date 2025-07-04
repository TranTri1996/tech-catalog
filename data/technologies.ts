import type { Technology } from "@/types"

export const technologies: Technology[] = [
  // Programming Languages
  {
    id: "javascript",
    name: "JavaScript",
    type: "Programming Languages",
    style: "lightweight",
    tags: ["dynamic", "interpreted", "web"],
    compatible_with: ["react", "node", "express", "vue", "angular"],
    description: "Dynamic programming language for web development",
    official_docs_url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: "typescript",
    name: "TypeScript",
    type: "Programming Languages",
    style: "batteries-included",
    tags: ["static-typing", "compiled", "web"],
    compatible_with: ["react", "node", "express", "vue", "angular"],
    description: "Typed superset of JavaScript that compiles to plain JavaScript",
    official_docs_url: "https://www.typescriptlang.org/docs/",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    id: "python",
    name: "Python",
    type: "Programming Languages",
    style: "batteries-included",
    tags: ["interpreted", "versatile", "ai-ml"],
    compatible_with: ["django", "flask", "fastapi", "postgresql", "redis"],
    description: "High-level programming language with emphasis on code readability",
    official_docs_url: "https://docs.python.org/",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    id: "rust",
    name: "Rust",
    type: "Programming Languages",
    style: "minimal",
    tags: ["systems", "memory-safe", "performance"],
    compatible_with: ["actix", "tokio", "postgresql"],
    description: "Systems programming language focused on safety and performance",
    official_docs_url: "https://doc.rust-lang.org/",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",
  },
  {
    id: "go",
    name: "Go",
    type: "Programming Languages",
    style: "minimal",
    tags: ["compiled", "concurrent", "simple"],
    compatible_with: ["gin", "echo", "postgresql", "redis"],
    description:
      "Open source programming language that makes it easy to build simple, reliable, and efficient software",
    official_docs_url: "https://golang.org/doc/",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },
  {
    id: "java",
    name: "Java",
    type: "Programming Languages",
    style: "enterprise",
    tags: ["compiled", "object-oriented", "enterprise"],
    compatible_with: ["spring", "postgresql", "redis"],
    description: "Object-oriented programming language designed for enterprise applications",
    official_docs_url: "https://docs.oracle.com/en/java/",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    id: "csharp",
    name: "C#",
    type: "Programming Languages",
    style: "enterprise",
    tags: ["compiled", "object-oriented", "microsoft"],
    compatible_with: ["dotnet", "sqlserver", "azure"],
    description: "Modern, object-oriented programming language developed by Microsoft",
    official_docs_url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    id: "elixir",
    name: "Elixir",
    type: "Programming Languages",
    style: "minimal",
    tags: ["functional", "concurrent", "fault-tolerant"],
    compatible_with: ["phoenix", "postgresql"],
    description: "Dynamic, functional language designed for building maintainable and scalable applications",
    official_docs_url: "https://elixir-lang.org/docs.html",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg",
  },

  // Backend Frameworks
  {
    id: "express",
    name: "Express.js",
    type: "Backend Frameworks",
    language: "JavaScript",
    style: "minimal",
    tags: ["web-framework", "middleware", "api"],
    compatible_with: ["javascript", "typescript", "mongodb", "postgresql"],
    description: "Fast, unopinionated, minimalist web framework for Node.js",
    official_docs_url: "https://expressjs.com/",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    id: "nestjs",
    name: "NestJS",
    type: "Backend Frameworks",
    language: "TypeScript",
    style: "batteries-included",
    tags: ["decorators", "dependency-injection", "enterprise"],
    compatible_with: ["typescript", "postgresql", "redis", "graphql"],
    description: "Progressive Node.js framework for building efficient and scalable server-side applications",
    official_docs_url: "https://docs.nestjs.com/",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
  },
  {
    id: "fastapi",
    name: "FastAPI",
    type: "Backend Frameworks",
    language: "Python",
    style: "batteries-included",
    tags: ["async", "type-hints", "openapi"],
    compatible_with: ["python", "postgresql", "redis"],
    description: "Modern, fast web framework for building APIs with Python based on standard Python type hints",
    official_docs_url: "https://fastapi.tiangolo.com/",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  {
    id: "django",
    name: "Django",
    type: "Backend Frameworks",
    language: "Python",
    style: "batteries-included",
    tags: ["orm", "admin-panel", "full-featured"],
    compatible_with: ["python", "postgresql", "redis"],
    description: "High-level Python web framework that encourages rapid development",
    official_docs_url: "https://docs.djangoproject.com/",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  {
    id: "spring",
    name: "Spring Boot",
    type: "Backend Frameworks",
    language: "Java",
    style: "enterprise",
    tags: ["dependency-injection", "enterprise", "microservices"],
    compatible_with: ["java", "postgresql", "redis"],
    description: "Java-based framework for creating stand-alone, production-grade Spring applications",
    official_docs_url: "https://spring.io/projects/spring-boot",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    id: "phoenix",
    name: "Phoenix",
    type: "Backend Frameworks",
    language: "Elixir",
    style: "batteries-included",
    tags: ["real-time", "channels", "fault-tolerant"],
    compatible_with: ["elixir", "postgresql"],
    description: "Productive web framework that does not compromise speed or maintainability",
    official_docs_url: "https://phoenixframework.org/",
    logo_url: "https://raw.githubusercontent.com/phoenixframework/phoenix/main/priv/static/phoenix.png",
  },

  // Frontend Frameworks
  {
    id: "react",
    name: "React",
    type: "Frontend Frameworks",
    language: "JavaScript",
    style: "minimal",
    tags: ["component-based", "virtual-dom", "hooks"],
    compatible_with: ["javascript", "typescript", "nextjs", "redux"],
    description: "JavaScript library for building user interfaces",
    official_docs_url: "https://reactjs.org/docs/",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: "nextjs",
    name: "Next.js",
    type: "Frontend Frameworks",
    language: "JavaScript",
    style: "batteries-included",
    tags: ["ssr", "static-generation", "full-stack"],
    compatible_with: ["react", "typescript", "vercel"],
    description: "React framework with hybrid static & server rendering, TypeScript support, smart bundling",
    official_docs_url: "https://nextjs.org/docs",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    id: "vue",
    name: "Vue.js",
    type: "Frontend Frameworks",
    language: "JavaScript",
    style: "batteries-included",
    tags: ["progressive", "template-based", "reactive"],
    compatible_with: ["javascript", "typescript", "nuxt"],
    description: "Progressive framework for building user interfaces",
    official_docs_url: "https://vuejs.org/guide/",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    id: "svelte",
    name: "Svelte",
    type: "Frontend Frameworks",
    language: "JavaScript",
    style: "minimal",
    tags: ["compiled", "no-virtual-dom", "reactive"],
    compatible_with: ["javascript", "typescript", "sveltekit"],
    description: "Cybernetically enhanced web apps",
    official_docs_url: "https://svelte.dev/docs",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
  },

  // UI Libraries
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    type: "UI Libraries",
    style: "minimal",
    tags: ["utility-first", "responsive", "customizable"],
    compatible_with: ["react", "vue", "svelte", "nextjs"],
    description: "Utility-first CSS framework for rapidly building custom designs",
    official_docs_url: "https://tailwindcss.com/docs",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    id: "mui",
    name: "Material-UI",
    type: "UI Libraries",
    language: "JavaScript",
    style: "batteries-included",
    tags: ["material-design", "components", "theming"],
    compatible_with: ["react", "typescript"],
    description: "React components implementing Google's Material Design",
    official_docs_url: "https://mui.com/",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    id: "chakra",
    name: "Chakra UI",
    type: "UI Libraries",
    language: "JavaScript",
    style: "batteries-included",
    tags: ["accessible", "themeable", "composable"],
    compatible_with: ["react", "typescript"],
    description: "Simple, modular and accessible component library for React",
    official_docs_url: "https://chakra-ui.com/",
    logo_url: "https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/logo/logomark-colored.svg",
  },

  // State Management
  {
    id: "redux",
    name: "Redux",
    type: "State Management",
    language: "JavaScript",
    style: "minimal",
    tags: ["predictable", "time-travel", "devtools"],
    compatible_with: ["react", "typescript"],
    description: "Predictable state container for JavaScript apps",
    official_docs_url: "https://redux.js.org/",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    id: "zustand",
    name: "Zustand",
    type: "State Management",
    language: "JavaScript",
    style: "minimal",
    tags: ["lightweight", "typescript", "simple"],
    compatible_with: ["react", "typescript"],
    description: "Small, fast and scalable bearbones state-management solution",
    official_docs_url: "https://github.com/pmndrs/zustand",
    logo_url: "https://raw.githubusercontent.com/pmndrs/zustand/main/bear.jpg",
  },

  // Databases
  {
    id: "postgresql",
    name: "PostgreSQL",
    type: "Databases",
    style: "enterprise",
    tags: ["sql", "acid", "extensible"],
    compatible_with: ["python", "javascript", "java", "go"],
    description: "Advanced open source relational database",
    official_docs_url: "https://www.postgresql.org/docs/",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    type: "Databases",
    style: "lightweight",
    tags: ["nosql", "document", "flexible"],
    compatible_with: ["javascript", "python", "java"],
    description: "Document-oriented NoSQL database",
    official_docs_url: "https://docs.mongodb.com/",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    id: "redis",
    name: "Redis",
    type: "Cache",
    style: "lightweight",
    tags: ["in-memory", "key-value", "pub-sub"],
    compatible_with: ["python", "javascript", "java", "go"],
    description: "In-memory data structure store, used as database, cache and message broker",
    official_docs_url: "https://redis.io/documentation",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },

  // Message Queue
  {
    id: "rabbitmq",
    name: "RabbitMQ",
    type: "Message Queue",
    style: "enterprise",
    tags: ["amqp", "reliable", "clustering"],
    compatible_with: ["python", "javascript", "java", "go"],
    description: "Open source message broker software",
    official_docs_url: "https://www.rabbitmq.com/documentation.html",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg",
  },

  // Authentication
  {
    id: "auth0",
    name: "Auth0",
    type: "Authentication",
    style: "batteries-included",
    tags: ["oauth", "saas", "enterprise"],
    compatible_with: ["react", "nextjs", "express"],
    description: "Identity platform for application builders",
    official_docs_url: "https://auth0.com/docs",
    logo_url: "https://cdn.auth0.com/styleguide/components/1.0.8/media/logos/img/badge.png",
  },

  // CI/CD
  {
    id: "github-actions",
    name: "GitHub Actions",
    type: "CI/CD",
    style: "batteries-included",
    tags: ["automation", "workflows", "github"],
    compatible_with: ["javascript", "python", "java", "go"],
    description: "Automate, customize, and execute software development workflows",
    official_docs_url: "https://docs.github.com/en/actions",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },

  // Hosting
  {
    id: "vercel",
    name: "Vercel",
    type: "Hosting",
    style: "batteries-included",
    tags: ["serverless", "edge", "frontend"],
    compatible_with: ["nextjs", "react", "vue", "svelte"],
    description: "Platform for frontend frameworks and static sites",
    official_docs_url: "https://vercel.com/docs",
    logo_url: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png",
  },
  {
    id: "aws",
    name: "AWS",
    type: "Hosting",
    style: "enterprise",
    tags: ["cloud", "scalable", "comprehensive"],
    compatible_with: ["javascript", "python", "java", "go"],
    description: "Comprehensive cloud computing platform",
    official_docs_url: "https://docs.aws.amazon.com/",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  },

  // DevOps
  {
    id: "docker",
    name: "Docker",
    type: "DevOps",
    style: "minimal",
    tags: ["containerization", "deployment", "isolation"],
    compatible_with: ["javascript", "python", "java", "go"],
    description: "Platform for developing, shipping, and running applications in containers",
    official_docs_url: "https://docs.docker.com/",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    type: "DevOps",
    style: "enterprise",
    tags: ["orchestration", "scaling", "management"],
    compatible_with: ["docker"],
    description: "Open-source container orchestration platform",
    official_docs_url: "https://kubernetes.io/docs/",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },

  // Real-time
  {
    id: "socketio",
    name: "Socket.IO",
    type: "Real-time",
    language: "JavaScript",
    style: "batteries-included",
    tags: ["websockets", "real-time", "bidirectional"],
    compatible_with: ["javascript", "typescript", "express"],
    description: "Real-time bidirectional event-based communication",
    official_docs_url: "https://socket.io/docs/",
    logo_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  },
]
