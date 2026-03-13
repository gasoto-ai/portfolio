const SKILL_GROUPS = [
  {
    label: "Languages",
    color: "bg-blue-50 border-blue-100",
    labelColor: "text-blue-700",
    skills: ["JavaScript", "TypeScript", "PHP", "HTML/CSS"],
  },
  {
    label: "Frameworks",
    color: "bg-indigo-50 border-indigo-100",
    labelColor: "text-indigo-700",
    skills: ["React", "Next.js", "NestJS", "Angular", "Node.js"],
  },
  {
    label: "Cloud & DevOps",
    color: "bg-sky-50 border-sky-100",
    labelColor: "text-sky-700",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git"],
  },
  {
    label: "Databases",
    color: "bg-teal-50 border-teal-100",
    labelColor: "text-teal-700",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite"],
  },
  {
    label: "AI Tooling",
    color: "bg-violet-50 border-violet-100",
    labelColor: "text-violet-700",
    skills: ["Claude / Anthropic", "Multi-agent Systems", "OpenClaw", "Prompt Engineering", "TDD + AI"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-blue-600 font-medium text-sm tracking-widest uppercase mb-3">Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
          Tools of the trade
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.label}
              className={`${group.color} border rounded-xl p-6`}
            >
              <p className={`${group.labelColor} text-xs font-semibold uppercase tracking-wider mb-4`}>
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-slate-700 text-sm bg-white/80 border border-white rounded-md px-2.5 py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
