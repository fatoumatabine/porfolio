import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider, useLanguage } from "@/components/language-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Fatoumata Binetou SYLLA - Développeuse Web Full Stack",
  description:
    "Portfolio de Fatoumata Binetou SYLLA, développeuse web full stack spécialisée en React, Laravel et technologies modernes. 2 ans d'expérience en développement d'applications web responsives.",
  keywords: "développeuse web, full stack, React, Laravel, JavaScript, PHP, portfolio, Dakar, Sénégal",
  authors: [{ name: "Fatoumata Binetou SYLLA" }],
  creator: "Fatoumata Binetou SYLLA",
  openGraph: {
    title: "Fatoumata Binetou SYLLA - Développeuse Web Full Stack",
    description:
      "Portfolio professionnel - Développeuse web full stack avec expertise en React, Laravel et technologies modernes",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatoumata Binetou SYLLA - Développeuse Web Full Stack",
    description:
      "Portfolio professionnel - Développeuse web full stack avec expertise en React, Laravel et technologies modernes",
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
