import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "George Soto — Technical Lead & AI Workflow Engineer",
  description:
    "George Soto is a Technical Lead with 8+ years building scalable web products and AI-assisted engineering workflows. Open to leadership roles and AI consulting engagements.",
  keywords: ["Technical Lead", "React", "Next.js", "TypeScript", "AI Workflow", "Software Engineer"],
  authors: [{ name: "George Soto" }],
  openGraph: {
    title: "George Soto — Technical Lead & AI Workflow Engineer",
    description:
      "8+ years engineering experience. Currently pioneering multi-agent AI development workflows on a Raspberry Pi.",
    url: "https://codeyoursuccess.com",
    siteName: "George Soto",
    type: "website",
  },
  metadataBase: new URL("https://codeyoursuccess.com"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-slate-900`}>
        {children}
      </body>
    </html>
  )
}
