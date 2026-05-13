"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone, Download, Code2, Smartphone, Server } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"

export function HeroSection() {
  const { language } = useLanguage()
  const t = translations[language]
  const highlights = [
    { icon: <Code2 className="h-4 w-4" />, label: "React.js" },
    { icon: <Server className="h-4 w-4" />, label: "Laravel / Node.js" },
    { icon: <Smartphone className="h-4 w-4" />, label: "Flutter" },
  ]

  return (
    <section id="accueil" className="relative min-h-screen overflow-hidden bg-rose-50/40 pt-24 dark:bg-[#1b1118]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-24 lg:pt-16">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center rounded-full border border-rose-200 bg-white px-4 py-2 text-sm font-medium text-rose-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-300 hover:shadow-md dark:border-rose-800/70 dark:bg-[#241820] dark:text-rose-200 dark:shadow-rose-950/30">
            {language === "fr" ? "Disponible pour projets web & mobile" : "Available for web & mobile projects"}
          </div>

          <div className="space-y-5">
            <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight text-slate-950 dark:text-rose-50 sm:text-6xl lg:text-7xl">
              {language === "fr" ? (
                <>
                  Développeuse Full Stack
                  <span className="block text-rose-600 dark:text-rose-300">Web & Mobile</span>
                </>
              ) : (
                <>
                  Full Stack Developer
                  <span className="block text-rose-600 dark:text-rose-300">Web & Mobile</span>
                </>
              )}
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-rose-100/75 sm:text-xl">
              {t.hero.subtitle}
            </p>
          </div>

          <div className="grid gap-3 text-sm text-slate-600 dark:text-rose-100/80 sm:grid-cols-3 animate-fade-in-up animate-delay-200">
            <div className="flex items-center gap-2 rounded-lg border border-rose-100 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-md dark:border-rose-900/60 dark:bg-[#241820]">
              <MapPin className="h-4 w-4 text-rose-500 dark:text-rose-300" />
              <span>{t.hero.location}</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-rose-100 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-md dark:border-rose-900/60 dark:bg-[#241820]">
              <Phone className="h-4 w-4 text-rose-500 dark:text-rose-300" />
              <span>{t.hero.phone}</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-rose-100 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-md dark:border-rose-900/60 dark:bg-[#241820] sm:col-span-3 lg:col-span-1">
              <Mail className="h-4 w-4 text-rose-500 dark:text-rose-300" />
              <span className="truncate">{t.hero.email}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 animate-fade-in-up animate-delay-300">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-full border border-rose-100 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:text-rose-700 hover:shadow-md dark:border-rose-900/60 dark:bg-[#241820] dark:text-rose-100/85 dark:hover:text-rose-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.icon}
                {item.label}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 animate-fade-in-up animate-delay-400">
                  <Button
                    size="lg"
              className="h-12 rounded-lg bg-rose-600 px-7 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-rose-700 hover:shadow-lg"
                  >
                    <a href="#projets" className="flex items-center gap-2">
                      {t.hero.viewProjects}
                    </a>
                  </Button>

                  <a href="/cv.pdf" download="CV_Fatoumata_SYLLA.pdf">
                    <Button
                      variant="outline"
                      size="lg"
                className="h-12 rounded-lg border-rose-200 bg-white px-7 text-rose-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-rose-50 hover:shadow-md dark:border-rose-800/70 dark:bg-transparent dark:text-rose-200 dark:hover:bg-rose-900/30"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {t.hero.cv}
                    </Button>
                  </a>
          </div>

          <div className="flex gap-3 animate-fade-in-up animate-delay-500">
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
              className="h-11 w-11 rounded-lg border border-rose-100 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-700 hover:shadow-md dark:border-rose-900/60 dark:bg-[#241820] dark:text-rose-100 dark:hover:bg-rose-900/40"
                  >
                    <a href="https://github.com/fatoumatabine" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
              className="h-11 w-11 rounded-lg border border-rose-100 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-700 hover:shadow-md dark:border-rose-900/60 dark:bg-[#241820] dark:text-rose-100 dark:hover:bg-rose-900/40"
                  >
                    <a
                      href="https://linkedin.com/in/fatoumata-binetou-sylla-264418256"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
              className="h-11 w-11 rounded-lg border border-rose-100 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-700 hover:shadow-md dark:border-rose-900/60 dark:bg-[#241820] dark:text-rose-100 dark:hover:bg-rose-900/40"
                  >
                    <a href="mailto:fatoumatbinetousylla@gmail.com">
                      <Mail className="w-5 h-5" />
                    </a>
                  </Button>
          </div>
        </div>

        <div className="relative animate-fade-in-right">
          <div className="rounded-2xl border border-rose-100 bg-white p-3 shadow-xl shadow-rose-100/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-100 dark:border-rose-900/60 dark:bg-[#241820] dark:shadow-rose-950/40 dark:hover:shadow-rose-950/70">
            <div className="overflow-hidden rounded-xl border border-rose-100 bg-rose-50 dark:border-rose-900/60 dark:bg-[#2d1e27]">
                  <Image
                    src="/images/Image collée.png"
                    alt="Fatoumata Binetou SYLLA - Développeuse Web Full Stack"
                width={900}
                height={1100}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                </div>
            <div className="grid grid-cols-3 gap-3 border-t border-rose-100 px-2 py-4 text-center dark:border-rose-900/60">
              <div>
                <div className="text-2xl font-bold text-rose-600">4+</div>
                <div className="text-xs text-slate-500 dark:text-rose-100/65">ans exp.</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-rose-600">20+</div>
                <div className="text-xs text-slate-500 dark:text-rose-100/65">techs</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-rose-600">15+</div>
                <div className="text-xs text-slate-500 dark:text-rose-100/65">projets</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce lg:block">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-rose-100 bg-white shadow-sm dark:border-rose-900/60 dark:bg-[#241820]">
          <ArrowDown className="w-5 h-5 text-rose-600" />
        </div>
      </div>
    </section>
  )
}
