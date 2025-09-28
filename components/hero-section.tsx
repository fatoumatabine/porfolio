"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone, Download } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"

export function HeroSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-amber-100 via-amber-50 to-orange-200"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Large geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-white/5 rotate-45 animate-float delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>

        {/* Decorative dots pattern */}
        <div className="absolute bottom-32 right-32 flex flex-col gap-2">
          <div className="w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-white/30 rounded-full animate-pulse delay-200"></div>
          <div className="w-3 h-3 bg-white/30 rounded-full animate-pulse delay-400"></div>
        </div>

        <div className="absolute top-40 right-40 grid grid-cols-3 gap-2 opacity-20">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-white rounded-sm animate-pulse"
              style={{ animationDelay: `${i * 100}ms` }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden animate-scale-in">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left content section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="animate-fade-in-up">
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                    {language === 'fr' ? (
                      <>
                        DÉVELOPPEUSE
                        <br />
                        <span className="text-amber-600">WEB FULL</span>
                        <br />
                        STACK
                      </>
                    ) : (
                      <>
                        FULL STACK
                        <br />
                        <span className="text-amber-600">WEB</span>
                        <br />
                        DEVELOPER
                      </>
                    )}
                  </h1>
                </div>

                <div className="animate-fade-in-up animate-delay-200">
                  <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                    {t.hero.subtitle}
                  </p>
                </div>

                <div className="space-y-3 animate-fade-in-up animate-delay-300">
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-amber-600" />
                    <span>{t.hero.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="w-5 h-5 text-amber-600" />
                    <span>{t.hero.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="w-5 h-5 text-amber-600" />
                    <span>{t.hero.email}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-400">
                  <Button
                    size="lg"
                    className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-8 hover-lift"
                  >
                    <a href="#projets" className="flex items-center gap-2">
                      {t.hero.viewProjects}
                    </a>
                  </Button>

                  <a href="/cv.pdf" download="CV_Fatoumata_SYLLA.pdf">
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full border-amber-500 text-amber-500 hover:bg-amber-50 hover-lift bg-transparent"
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
                    className="w-12 h-12 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-600 hover-lift"
                  >
                    <a href="https://github.com/fatoumatbinetousylla" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="w-12 h-12 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-600 hover-lift"
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
                    className="w-12 h-12 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-600 hover-lift"
                  >
                    <a href="mailto:fatoumatbinetousylla@gmail.com">
                      <Mail className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right image section */}
            <div className="relative bg-gradient-to-br from-amber-200 to-orange-600 p-8 lg:p-12 flex items-center justify-center">
              <div className="relative animate-scale-in animate-delay-300">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/images/Image collée.png"
                    alt="Fatoumata Binetou SYLLA - Développeuse Web Full Stack"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>

                {/* Decorative elements around photo */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/80 rounded-full animate-pulse delay-500"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-white/60 rotate-45 animate-pulse delay-1000"></div>
              </div>

              {/* Background decorative elements */}
              <div className="absolute top-8 right-8 w-20 h-20 border-2 border-white/30 rounded-full animate-spin-slow"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <ArrowDown className="w-5 h-5 text-white" />
        </div>
      </div>
    </section>
  )
}
