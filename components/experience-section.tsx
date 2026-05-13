import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Calendar, MapPin, TrendingUp } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      type: "work",
      title: "Stagiaire - Développeuse",
      company: "Sonatel",
      location: "Dakar, Sénégal",
      period: "2026",
      achievements: [
        "Gestion et maintenance des DevTools internes de l'entreprise",
        "Développement et intégration de mini applications dans l'écosystème Sonatel",
        "Développement mobile cross-platform avec Flutter",
        "Amélioration continue des interfaces utilisateur et de l'expérience développeur",
      ],
      iconClass: "bg-rose-50 text-rose-700 border-rose-100",
    },
    {
      type: "work",
      title: "Développeuse Web & Mobile",
      company: "Sonatel Academy - Orange Digital Center",
      location: "Dakar, Sénégal",
      period: "Février 2025 - Novembre 2025",
      achievements: [
        "Développement d'applications full-stack dans le cadre de projets pédagogiques et collaboratifs",
        "Mise en place de pipelines CI/CD pour l'automatisation des déploiements",
        "Conception, intégration et test d'API REST avec Postman",
        "Travail en environnement agile sur des projets web et mobiles concrets",
      ],
      iconClass: "bg-rose-50 text-rose-700 border-rose-100",
    },
    {
      type: "work",
      title: "Web Developer - Intern",
      company: "GROUPE AFRIDEV",
      location: "Dakar, Sénégal",
      period: "Septembre 2022 - Février 2024",
      achievements: [
        "Développement et maintenance d'applications web full-stack",
        "Conception d'interfaces utilisateur et intégration d'API REST",
        "Développement de SPA avec gestion d'état via Redux et Context API",
        "Analyse des besoins clients, rédaction de cahiers des charges et conception de solutions",
        "Collaboration avec des équipes multidisciplinaires sur des projets de transformation digitale",
      ],
      iconClass: "bg-rose-50 text-rose-700 border-rose-100",
    },
  ]

  const education = [
    {
      title: "Licence 3 - Informatique",
      institution: "École 2221",
      location: "Dakar",
      period: "2026 - présent",
      description: "Formation informatique en cours avec approfondissement en développement logiciel et architecture web.",
      iconClass: "bg-rose-50 text-rose-700 border-rose-100",
    },
    {
      title: "Certificat de Spécialisation - Développement Web & Mobile",
      institution: "Sonatel Academy - Orange Digital Center",
      location: "Dakar",
      period: "2026",
      description: "Formation spécialisée en développement web et mobile, projets full-stack, API REST et pratiques agiles.",
      iconClass: "bg-rose-50 text-rose-700 border-rose-100",
    },
    {
      title: "Certification en Angular & React",
      institution: "GoMyCode",
      location: "Dakar",
      period: "2024",
      description: "Développement front-end moderne, gestion d'état avec Redux et Context API, intégration d'API REST.",
      iconClass: "bg-rose-50 text-rose-700 border-rose-100",
    },
    {
      title: "Certificat de Développement Web",
      institution: "Institut Supérieur d'Informatique (ISI)",
      location: "Dakar",
      period: "2023",
      description: "Formation complète en développement web avec focus sur les technologies modernes",
      iconClass: "bg-rose-50 text-rose-700 border-rose-100",
    },
    {
      title: "Licence 2 en Informatique",
      institution: "Université Cheikh Anta Diop (UCAD)",
      location: "Dakar",
      period: "2021-2023",
      description: "Formation universitaire en informatique avec bases solides en programmation",
      iconClass: "bg-rose-50 text-rose-700 border-rose-100",
    },
    {
      title: "Baccalauréat Scientifique S2",
      institution: "Cours Privé Natange",
      location: "Dakar",
      period: "2021-2022",
      description: "Diplôme scientifique avec spécialisation mathématiques et sciences",
      iconClass: "bg-rose-50 text-rose-700 border-rose-100",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-700 mb-4">Expérience & Formation</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Un parcours professionnel et académique riche, marqué par une progression constante et une expertise
            technique approfondie.
          </p>
        </div>

        {/* Experience professionnelle */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-rose-50 text-rose-700">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-950">Expérience Professionnelle</h3>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl hover:shadow-rose-100/70 transition-all duration-300 border border-rose-100 hover:border-rose-200 bg-card"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg border ${exp.iconClass} p-3 flex-shrink-0 group-hover:scale-105 transition-transform`}
                    >
                      <Briefcase className="w-6 h-6" />
                    </div>

                    <div className="flex-1 space-y-3">
                      <div>
                        <h4 className="text-xl font-semibold text-card-foreground group-hover:text-rose-700 transition-colors">
                          {exp.title}
                        </h4>
                        <p className="text-lg font-medium text-rose-700">{exp.company}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h5 className="font-semibold text-card-foreground flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          Réalisations clés :
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-muted-foreground flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Formation */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-rose-50 text-rose-700">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-950">Formation</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl hover:shadow-rose-100/70 transition-all duration-300 border border-rose-100 hover:border-rose-200 bg-card"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div
                      className={`w-12 h-12 rounded-lg border ${edu.iconClass} p-3 group-hover:scale-105 transition-transform`}
                    >
                      <GraduationCap className="w-6 h-6" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-card-foreground group-hover:text-rose-700 transition-colors">
                        {edu.title}
                      </h4>
                      <p className="font-medium text-rose-700">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
