export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50 to-slate-50 pt-16">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-blue-600 font-medium text-sm tracking-widest uppercase mb-4">
            Available for Leadership & Consulting
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-4">
            George Soto
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
            Technical Lead & AI Workflow Engineer
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
            I build the systems that let engineering teams ship faster — then automate
            the parts that slow them down.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/georgeasoto/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </a>
            <a
              href="#ai-workflow"
              className="inline-flex items-center gap-2 border border-blue-200 hover:border-blue-400 text-blue-700 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              See the AI work ↓
            </a>
          </div>
        </div>

        {/* Floating stats */}
        <div className="flex flex-wrap gap-8 mt-16 pt-12 border-t border-slate-200">
          {[
            { value: "8+", label: "Years engineering" },
            { value: "4", label: "Companies shipped" },
            { value: "AI", label: "Multi-agent systems" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-blue-600">{s.value}</div>
              <div className="text-slate-500 text-sm mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
