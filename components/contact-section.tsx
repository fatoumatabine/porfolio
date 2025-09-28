"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Send, Heart, Code, Coffee, Film } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"

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
      value: "Dakar, Sénégal",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/fatoumatbinetousylla",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/fatoumata-binetou-sylla-264418256",
      color: "hover:text-blue-600",
    },
  ]

  const interests = [
    { icon: <Code className="w-4 h-4" />, text: "Veille technologique" },
    { icon: <Heart className="w-4 h-4" />, text: "Yoga et bien-être" },
    { icon: <Coffee className="w-4 h-4" />, text: "Lecture technique" },
    { icon: <Film className="w-4 h-4" />, text: "Cinéma et arts visuels" },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-600 mb-4">{t.contact.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <Send className="w-5 h-5 text-amber-600" />
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

                <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600">
                  <Send className="w-4 h-4 mr-2" />
                  {t.contact.send}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & About */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-card-foreground">{t.contact.contactInfo}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="p-2 rounded-lg bg-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
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
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
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
                      className="p-3 rounded-lg bg-amber-100 hover:bg-amber-500 hover:text-white transition-all duration-300 hover:scale-110"
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-card-foreground">{t.contact.interests}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((interest, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="text-amber-600">{interest.icon}</div>
                      {interest.text}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">{t.contact.footer}</p>
        </div>
      </div>
    </section>
  )
}
