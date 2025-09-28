import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Users, CheckCircle, MessageSquare } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Système de Gestion des Apprenants",
      description:
        "Application web complète pour la gestion des étudiants avec fonctionnalités CRUD, interface utilisateur intuitive, système de recherche et filtrage avancé des données.",
      technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
      features: [
        "Gestion complète des profils apprenants",
        "Fonctionnalités CRUD avancées",
        "Système de recherche et filtrage",
        "Interface utilisateur intuitive",
      ],
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Application de Gestion des Tâches",
      description:
        "Gestionnaire de tâches interactif type To-Do List avec système de priorités, catégorisation des tâches et interface responsive optimisée.",
      technologies: ["JavaScript (ES6+)", "HTML5", "CSS3", "DOM Manipulation"],
      features: [
        "Ajout, modification, suppression des tâches",
        "Système de priorités et catégories",
        "Interface responsive",
        "Expérience utilisateur optimisée",
      ],
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Clone WhatsApp Web",
      description:
        "Reproduction fidèle de l'interface utilisateur de WhatsApp Web avec messagerie en temps réel simulée, gestion des contacts et historique des conversations.",
      technologies: ["JavaScript", "HTML5", "CSS3", "WebSocket (simulation)"],
      features: [
        "Interface fidèle à WhatsApp Web",
        "Messagerie temps réel (simulation)",
        "Gestion des contacts",
        "Historique des conversations",
      ],
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section id="projets" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-600 mb-4">Projets Récents</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Découvrez une sélection de mes réalisations qui démontrent ma maîtrise des technologies web modernes et mon
            approche centrée utilisateur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group card-hover transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm overflow-hidden animate-fade-in-up animate-delay-${(index + 2) * 100}`}
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.color} p-4 mb-4 group-hover:scale-110 transition-transform animate-scale-in animate-glow`}
                >
                  <div className="text-white">{project.icon}</div>
                </div>
                <CardTitle className="text-xl text-card-foreground group-hover:text-amber-600 transition-colors">
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
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 flex-shrink-0 animate-pulse"></div>
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
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent btn-animate hover-lift">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-amber-500 hover:bg-amber-600 btn-animate hover-lift">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up animate-delay-500">
          <Button variant="outline" size="lg" asChild className="btn-animate hover-lift bg-transparent">
            <a href="https://github.com/fatoumatbinetousylla" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Voir tous mes projets sur GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
