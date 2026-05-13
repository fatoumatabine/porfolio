import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, HeartPulse, Users, BriefcaseBusiness, ServerCog, Smartphone } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Santé SN",
      description:
        "Application de télémédecine pour mettre en relation patients et médecins, gérer les consultations en ligne, les rendez-vous et le suivi médical.",
      technologies: ["Node.js", "Express.js", "React.js", "MySQL", "API REST"],
      features: [
        "Mise en relation patients et médecins",
        "Authentification sécurisée",
        "Gestion des rendez-vous et historique médical",
        "Architecture REST API avec interface React.js",
      ],
      icon: <HeartPulse className="w-8 h-8" />,
      iconClass: "bg-rose-50 text-rose-700 border-rose-100",
    },
    {
      title: "maxit_sn / maxit_odc",
      description:
        "Applications dynamiques intégrant des API externes, développées dans le cadre de Sonatel Academy et de l'Orange Digital Center.",
      technologies: ["React.js", "Laravel API", "Redux", "MySQL"],
      features: [
        "Intégration d'API externes",
        "Front-end React dynamique",
        "Gestion d'état avec Redux",
        "Connexion à une API Laravel",
      ],
      icon: <Smartphone className="w-8 h-8" />,
      iconClass: "bg-rose-50 text-rose-700 border-rose-100",
    },
    {
      title: "gestion-RH",
      description:
        "Application web de gestion du personnel avec suivi des employés, présences, congés, salaires et tableau de bord administrateur.",
      technologies: ["Laravel", "MySQL", "Bootstrap", "PHP"],
      features: [
        "Gestion des employés",
        "Suivi des présences et congés",
        "Gestion des salaires",
        "Tableau de bord administrateur",
      ],
      icon: <BriefcaseBusiness className="w-8 h-8" />,
      iconClass: "bg-rose-50 text-rose-700 border-rose-100",
    },
    {
      title: "fatoumata-apisylla",
      description:
        "Application Laravel de gestion d'utilisateurs et d'API avec authentification sécurisée, opérations CRUD complètes et tests API.",
      technologies: ["PHP", "Laravel", "MySQL", "Blade", "Postman"],
      features: [
        "Authentification sécurisée",
        "CRUD complet",
        "Tests d'API avec Postman",
        "Interface Blade connectée au back-end",
      ],
      icon: <Users className="w-8 h-8" />,
      iconClass: "bg-rose-50 text-rose-700 border-rose-100",
    },
    {
      title: "api-ecsa-odc / Application-Daf",
      description:
        "Projets collaboratifs centrés sur la conception, la structuration et l'intégration d'API REST documentées.",
      technologies: ["Laravel", "PHP", "Postman", "GitHub"],
      features: [
        "Conception d'API REST",
        "Structuration back-end",
        "Documentation des endpoints",
        "Travail collaboratif avec GitHub",
      ],
      icon: <ServerCog className="w-8 h-8" />,
      iconClass: "bg-rose-50 text-rose-700 border-rose-100",
    },
  ]

  return (
    <section id="projets" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-700 mb-4">Projets Récents</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Découvrez une sélection de mes réalisations qui démontrent ma maîtrise des technologies web modernes et mon
            approche centrée utilisateur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group card-hover transition-all duration-300 border border-rose-100 bg-card overflow-hidden animate-fade-in-up animate-delay-${(index + 2) * 100} hover:border-rose-200 hover:shadow-xl hover:shadow-rose-100/70`}
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-16 h-16 rounded-lg border ${project.iconClass} p-4 mb-4 group-hover:scale-105 transition-transform animate-scale-in`}
                >
                  <div>{project.icon}</div>
                </div>
                <CardTitle className="text-xl text-card-foreground group-hover:text-rose-700 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-card-foreground">Fonctionnalités clés :</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-sm text-muted-foreground flex items-start gap-2 animate-fade-in-left"
                        style={{ animationDelay: `${featureIndex * 0.1 + 0.5}s` }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0 animate-pulse"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-card-foreground">Technologies :</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs hover-lift transition-all duration-200 animate-fade-in-right"
                        style={{ animationDelay: `${techIndex * 0.1 + 0.7}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent btn-animate hover-lift">
                    <a href="https://github.com/fatoumatabine" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="flex-1 bg-rose-600 hover:bg-rose-700 text-white btn-animate hover-lift">
                    <a href="https://porfolio-sigma-rosy.vercel.app" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up animate-delay-500">
          <Button variant="outline" size="lg" asChild className="btn-animate hover-lift bg-transparent">
            <a href="https://github.com/fatoumatabine" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Voir tous mes projets sur GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
