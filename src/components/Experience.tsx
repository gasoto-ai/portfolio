const ROLES = [
  {
    company: "Unicity International",
    title: "Technical Lead, Frontend",
    period: "Oct 2024 – Present",
    bullets: [
      "Lead a frontend team building React/Next.js applications used by distributors globally.",
      "Partnered with product and design to redesign core checkout and subscription management flows.",
      "Introduced AI-assisted development workflows, reducing PR review time and increasing team velocity.",
    ],
  },
  {
    company: "Unicity International",
    title: "Senior Software Engineer",
    period: "Oct 2022 – Oct 2024",
    bullets: [
      "Built and maintained high-traffic React applications supporting international e-commerce operations.",
      "Led migration of legacy jQuery codebase to modern React component architecture.",
      "Mentored junior engineers and established team coding standards and PR review practices.",
    ],
  },
  {
    company: "Leafly",
    title: "Software Engineer",
    period: "Jul 2021 – Oct 2022",
    bullets: [
      "Built consumer-facing features in React and TypeScript for one of the largest cannabis information platforms.",
      "Improved core web vitals across key landing pages, contributing to measurable SEO gains.",
    ],
  },
  {
    company: "American Express",
    title: "Software Engineer",
    period: "Nov 2018 – Jul 2021",
    bullets: [
      "Developed internal tools and customer-facing features for AmEx's digital banking platform.",
      "Worked within a large-scale Node.js and React codebase with rigorous testing and deployment standards.",
      "Collaborated across engineering, compliance, and product to ship features in a highly regulated environment.",
    ],
  },
  {
    company: "GoDaddy",
    title: "Website Developer",
    period: "Jan 2017 – Nov 2018",
    bullets: [
      "Built custom websites and web applications for SMB clients.",
      "Improved internal tooling for the WordPress product specialist team.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-blue-600 font-medium text-sm tracking-widest uppercase mb-3">Experience</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
          Where I&apos;ve shipped
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-blue-100 hidden md:block" />

          <div className="space-y-12">
            {ROLES.map((role) => (
              <div key={`${role.company}-${role.period}`} className="md:pl-8 relative">
                {/* Dot */}
                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-500 -translate-x-[3px] hidden md:block" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{role.title}</h3>
                    <p className="text-blue-600 font-medium">{role.company}</p>
                  </div>
                  <span className="text-slate-500 text-sm whitespace-nowrap">{role.period}</span>
                </div>

                <ul className="space-y-2">
                  {role.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-slate-600 text-sm leading-relaxed">
                      <span className="text-blue-400 mt-1 flex-shrink-0">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
