export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-500 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p>© {new Date().getFullYear()} George Soto. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/georgeasoto/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/gasoto-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
