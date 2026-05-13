"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"

export function Navigation() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const t = translations[language]

  const navItems = [
    { href: "/#accueil", label: t.nav.home },
    { href: "/#competences", label: t.nav.skills },
    { href: "/#projets", label: t.nav.projects },
    { href: "/#experience", label: t.nav.experience },
    { href: "/vision", label: t.nav.vision },
    { href: "/#contact", label: t.nav.contact },
  ]

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b border-rose-100 transition-all duration-300 dark:border-rose-950/60 ${
        scrolled ? "bg-white/95 shadow-sm backdrop-blur-md dark:bg-[#1b1118]/95" : "bg-white/90 backdrop-blur-md dark:bg-[#1b1118]/90"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-base font-bold tracking-tight text-rose-700 dark:text-rose-200 sm:text-lg">Fatoumata Binetou Sylla</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center rounded-full border border-rose-100 bg-rose-50/60 p-1 dark:border-rose-900/60 dark:bg-rose-950/20">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-rose-700 hover:shadow-sm dark:text-rose-100/80 dark:hover:bg-rose-900/40 dark:hover:text-rose-100"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hidden rounded-lg border border-rose-100 bg-white text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-50 hover:text-rose-700 dark:border-rose-900/60 dark:bg-[#241820] dark:text-rose-100 dark:hover:bg-rose-900/40 md:flex"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          {/* Language Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
            className="hidden rounded-lg border border-rose-100 bg-white text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-50 hover:text-rose-700 dark:border-rose-900/60 dark:bg-[#241820] dark:text-rose-100 dark:hover:bg-rose-900/40 md:flex"
          >
            {language === "fr" ? "EN" : "FR"}
          </Button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="rounded-lg border border-rose-100 bg-white text-rose-700 dark:border-rose-900/60 dark:bg-[#241820] dark:text-rose-100">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="mt-2 space-y-1 rounded-xl border border-rose-100 bg-white p-2 shadow-lg dark:border-rose-900/60 dark:bg-[#241820] sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 transition-colors hover:bg-rose-50 hover:text-rose-700 dark:text-rose-100/80 dark:hover:bg-rose-900/40 dark:hover:text-rose-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-full justify-start"
              >
                {theme === "dark" ? <Sun className="h-5 w-5 mr-2" /> : <Moon className="h-5 w-5 mr-2" />}
                {theme === "dark" ? t.hero.lightMode : t.hero.darkMode}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                className="w-full justify-start"
              >
                {language === "fr" ? "English" : "Français"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
