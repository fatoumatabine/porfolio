import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Calendar, MapPin, TrendingUp } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      type: "work",
      title: "Développeuse Web - Stage",
      company: "GROUPE AFRIDEV",
      location: "Dakar, Liberté 6",
      period: "Novembre 2023 - Février 2024",
      achievements: [
        "Développement de nouvelles applications web en utilisant React.js et Laravel",
        "Conception et implémentation d'interfaces utilisateur responsives à partir de bases de données",
        "Amélioration de l'ergonomie des applications existantes, augmentant la satisfaction utilisateur",
        "Maintenance préventive et corrective des outils et logiciels, réduisant les incidents de 25%",
        "Collaboration avec l'équipe de développement dans un environnement Agile",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      type: "work",
      title: "Développeuse Web - Stage",
      company: "GROUPE AFRIDEV",
      location: "Dakar, Liberté 6",
      period: "Septembre 2022 - Avril 2023",
      achievements: [
        "Participation active au développement d'applications web multi-plateformes",
        "Création d'interfaces dynamiques connectées aux bases de données SQL",
        "Optimisation des performances et de l'accessibilité des applications web",
        "Support technique et résolution de problèmes sur les systèmes en production",
        "Développement d'applications SPA (Single Page Application)",
      ],
      color: "from-green-500 to-emerald-500",
    },
  ]

  const education = [
    {
      title: "Certification en Angular & React",
      institution: "GoMyCode",
      location: "Dakar",
      period: "2024",
      description:
        "Gestion d'état avec Redux et Context API, Intégration d'APIs REST, Développement full stack et architecture web, Projet de fin de formation : Application web e-commerce",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Attestation de Développement Web",
      institution: "Institut Supérieur d'Informatique (ISI)",
      location: "Dakar",
      period: "2023",
      description: "Formation complète en développement web avec focus sur les technologies modernes",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Licence 2 en Informatique",
      institution: "Université Cheikh Anta Diop (UCAD)",
      location: "Dakar",
      period: "2021-2023",
      description: "Formation universitaire en informatique avec bases solides en programmation",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Baccalauréat Scientifique S2",
      institution: "Cours Privé Natange",
      location: "Dakar",
      period: "2021-2022",
      description: "Diplôme scientifique avec spécialisation mathématiques et sciences",
      color: "from-teal-500 to-blue-500",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-600 mb-4">Expérience & Formation</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Un parcours professionnel et académique riche, marqué par une progression constante et une expertise
            technique approfondie.
          </p>
        </div>

        {/* Experience professionnelle */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-amber-100 text-amber-600">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-amber-600">Expérience Professionnelle</h3>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${exp.color} p-3 flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-1 space-y-3">
                      <div>
                        <h4 className="text-xl font-semibold text-card-foreground group-hover:text-amber-600 transition-colors">
                          {exp.title}
                        </h4>
                        <p className="text-lg font-medium text-amber-600">{exp.company}</p>
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
                              <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 flex-shrink-0"></div>
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
            <div className="p-2 rounded-lg bg-amber-100 text-amber-600">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-amber-600">Formation</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${edu.color} p-3 group-hover:scale-110 transition-transform`}
                    >
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-card-foreground group-hover:text-amber-600 transition-colors">
                        {edu.title}
                      </h4>
                      <p className="font-medium text-amber-600">{edu.institution}</p>
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
