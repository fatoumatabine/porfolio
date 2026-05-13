"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Send, Heart, Code, Coffee, Film, QrCode, Camera, Handshake, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"
import dynamic from "next/dynamic"

const QRCode = dynamic(() => import('react-qr-code'), { ssr: false })

export function ContactSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, subject, message } = formData
    const whatsappMessage = `Nom: ${name}\nEmail: ${email}\nSujet: ${subject}\nMessage: ${message}`
    const whatsappUrl = `https://wa.me/221774468922?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "fatoumatbinetousylla@gmail.com",
      href: "mailto:fatoumatbinetousylla@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Téléphone",
      value: "+221 77 446 89 22",
      href: "tel:+221774468922",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Localisation",
      value: "Mariste, Dakar, Sénégal",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/fatoumatabine",
      color: "hover:text-rose-700 dark:hover:text-rose-200",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/fatoumata-binetou-sylla-264418256",
      color: "hover:text-rose-700",
    },
  ]

  const interests = [
    { icon: <Code className="w-4 h-4" />, text: "Veille technologique" },
    { icon: <Heart className="w-4 h-4" />, text: "Yoga et bien-être" },
    { icon: <Coffee className="w-4 h-4" />, text: "Lecture technique" },
    { icon: <Film className="w-4 h-4" />, text: "Cinéma et arts visuels" },
    { icon: <Camera className="w-4 h-4" />, text: "Photographie" },
    { icon: <Handshake className="w-4 h-4" />, text: "Activités associatives" },
  ]

  const footerLinks = [
    { label: "Accueil", href: "/#accueil" },
    { label: "Compétences", href: "/#competences" },
    { label: "Projets", href: "/#projets" },
    { label: "Expérience", href: "/#experience" },
    { label: "Vision", href: "/vision" },
    { label: "Contact", href: "/#contact" },
  ]
  const emailQrValue = "mailto:fatoumatbinetousylla@gmail.com?subject=Contact%20depuis%20le%20portfolio"

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-700 mb-4">{t.contact.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border border-rose-100 bg-card transition-all duration-300 hover:shadow-xl hover:shadow-rose-100/70">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <Send className="w-5 h-5 text-rose-700" />
                {t.contact.sendMessage}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                      {t.contact.name}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.contact.name}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                      {t.contact.email}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-card-foreground">
                    {t.contact.subject}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t.contact.subject}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                    {t.contact.message}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.message}
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-700 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <Send className="w-4 h-4 mr-2" />
                  {t.contact.send}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & About */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="border border-rose-100 bg-card transition-all duration-300 hover:shadow-xl hover:shadow-rose-100/70">
              <CardHeader>
                <CardTitle className="text-card-foreground">{t.contact.contactInfo}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="p-2 rounded-lg bg-rose-50 text-rose-700 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href !== "#" ? (
                        <a
                          href={info.href}
                          className="font-medium text-card-foreground hover:text-accent transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-card-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border border-rose-100 bg-card transition-all duration-300 hover:shadow-xl hover:shadow-rose-100/70">
              <CardHeader>
                <CardTitle className="text-card-foreground">{t.contact.socialLinks}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-600 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="border border-rose-100 bg-card transition-all duration-300 hover:shadow-xl hover:shadow-rose-100/70">
              <CardHeader>
                <CardTitle className="text-card-foreground">{t.contact.interests}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((interest, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="text-rose-600">{interest.icon}</div>
                      {interest.text}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* QR Code */}
        <div className="mt-16">
          <Card className="border border-rose-100 bg-card max-w-md mx-auto transition-all duration-300 hover:shadow-xl hover:shadow-rose-100/70">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground text-center justify-center">
                <QrCode className="w-5 h-5 text-rose-700" />
                Scanner pour m'envoyer un email
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="bg-white p-4 rounded-lg">
                <QRCode
                  value={emailQrValue}
                  size={128}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                />
              </div>
            </CardContent>
          </Card>
        </div>

      </div>

      {/* Footer */}
      <footer className="mt-20 w-full border-y border-rose-100 bg-rose-50/70 text-left shadow-sm dark:border-rose-900/60 dark:bg-rose-950/20">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-rose-700 dark:text-rose-200">Fatoumata Binetou SYLLA</h3>
                <p className="mt-2 text-sm font-medium text-slate-700 dark:text-rose-100/80">
                  Développeuse Full Stack Web & Mobile
                </p>
              </div>
              <p className="max-w-xl text-sm leading-6 text-slate-600 dark:text-rose-100/70">
                Portfolio professionnel présentant mes compétences, projets, expériences et ma vision d'une technologie
                plus inclusive, utile et orientée impact.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Web", "Mobile", "Innovation", "Leadership", "Impact"].map((value) => (
                  <span
                    key={value}
                    className="rounded-full border border-rose-100 bg-white px-3 py-1 text-xs font-medium text-rose-700 dark:border-rose-900/60 dark:bg-[#241820] dark:text-rose-200"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-950 dark:text-rose-50">
                Navigation
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {footerLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-rose-700 dark:text-rose-100/70 dark:hover:text-rose-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-950 dark:text-rose-50">
                Informations
              </h4>
              <div className="space-y-3 text-sm text-slate-600 dark:text-rose-100/70">
                <a href="mailto:fatoumatbinetousylla@gmail.com" className="flex items-center gap-2 transition-colors hover:text-rose-700 dark:hover:text-rose-200">
                  <Mail className="h-4 w-4 text-rose-600 dark:text-rose-300" />
                  fatoumatbinetousylla@gmail.com
                </a>
                <a href="tel:+221774468922" className="flex items-center gap-2 transition-colors hover:text-rose-700 dark:hover:text-rose-200">
                  <Phone className="h-4 w-4 text-rose-600 dark:text-rose-300" />
                  +221 77 446 89 22
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-rose-600 dark:text-rose-300" />
                  Mariste, Dakar, Sénégal
                </div>
                <a
                  href="https://github.com/fatoumatabine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-rose-700 transition-colors hover:text-rose-800 dark:text-rose-200 dark:hover:text-rose-100"
                >
                  GitHub <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-rose-100 pt-5 text-sm text-slate-500 dark:border-rose-900/60 dark:text-rose-100/60 md:flex-row md:items-center md:justify-between">
            <p>{t.contact.footer}</p>
            <p>Disponible pour collaborations, stages, missions et projets digitaux.</p>
          </div>
        </div>
      </footer>
    </section>
  )
}
