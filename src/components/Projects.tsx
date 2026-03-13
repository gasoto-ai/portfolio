const PROJECTS = [
  {
    name: "CodeLens",
    description:
      "Paste any public GitHub URL and get back a modernization score from 0–100. Analyzes TypeScript adoption, test presence, legacy dependencies, README quality, and import coupling to identify the highest-risk files to change.",
    href: "https://github.com/gasoto-ai/codelens",
    tags: ["Next.js 15", "TypeScript", "SQLite", "Octokit", "70 tests"],
  },
  {
    name: "Fish Tank Tools",
    description:
      "Multi-agent workflow dashboard with a drag-and-drop Kanban board, structured handoff generator (markdown export), live GitHub PR status panel, and persistent notes scratchpad.",
    href: "https://github.com/gasoto-ai/fish-tank-tools",
    tags: ["Next.js 15", "TypeScript", "dnd-kit", "SQLite", "39 tests"],
  },
  {
    name: "The Crate",
    description:
      "Retro vinyl record shop — browse by genre and artist, add to cart, check out with address and email, view order history. Full e-commerce flow in a single Next.js app backed by SQLite.",
    href: "https://github.com/gasoto-ai/the-crate",
    tags: ["Next.js 15", "TypeScript", "SQLite", "Tailwind", "32 tests"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-blue-600 font-medium text-sm tracking-widest uppercase mb-3">Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
          Built with the system
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md rounded-xl p-6 transition-all group flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                <span className="text-slate-400 group-hover:text-blue-500 transition-colors ml-2 mt-0.5">↗</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/gasoto-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
          >
            View all repos on GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}
