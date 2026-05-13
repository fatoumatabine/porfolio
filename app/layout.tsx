import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Fatoumata Binetou SYLLA - Développeuse Full Stack Web & Mobile",
  description:
    "Portfolio de Fatoumata Binetou SYLLA, développeuse Full Stack Web & Mobile formée à l'Orange Digital Center - Sonatel Academy, spécialisée en Laravel, React.js, Node.js, Flutter et MySQL.",
  keywords: "développeuse full stack, web mobile, React, Laravel, Node.js, Flutter, MySQL, API REST, portfolio, Dakar, Sénégal",
  authors: [{ name: "Fatoumata Binetou SYLLA" }],
  creator: "Fatoumata Binetou SYLLA",
  openGraph: {
    title: "Fatoumata Binetou SYLLA - Développeuse Full Stack Web & Mobile",
    description:
      "Portfolio professionnel - Développeuse Full Stack Web & Mobile avec expertise en Laravel, React.js, Node.js, Flutter et API REST",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatoumata Binetou SYLLA - Développeuse Full Stack Web & Mobile",
    description:
      "Portfolio professionnel - Développeuse Full Stack Web & Mobile avec expertise en Laravel, React.js, Node.js, Flutter et API REST",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
            <Analytics />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
