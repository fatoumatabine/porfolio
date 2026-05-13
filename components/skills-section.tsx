import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Globe, Server, Languages } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Langages de programmation",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["PHP", "JavaScript", "TypeScript", "Dart", "HTML5", "CSS3", "SQL"],
      color: "bg-rose-50 text-rose-700 border-rose-100",
    },
    {
      title: "Front-End & Mobile",
      icon: <Globe className="w-6 h-6" />,
      skills: ["React.js", "Vue.js", "Flutter", "Tailwind CSS", "Bootstrap", "Redux", "Context API"],
      color: "bg-rose-50 text-rose-700 border-rose-100",
    },
    {
      title: "Back-End, Bases de données & Outils",
      icon: <Server className="w-6 h-6" />,
      skills: ["Laravel", "Node.js", "Express.js", "API REST", "MySQL", "PostgreSQL", "Docker", "Git", "GitHub", "Postman", "CI/CD", "Agile/Scrum", "MVC", "SPA"],
      color: "bg-rose-50 text-rose-700 border-rose-100",
    },
    {
      title: "Langues",
      icon: <Languages className="w-6 h-6" />,
      skills: ["Français (Courant)", "Anglais (Intermédiaire B1)", "Wolof (Langue maternelle)"],
      color: "bg-rose-50 text-rose-700 border-rose-100",
    },
  ]

  return (
    <section id="competences" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-700 mb-4">Compétences Techniques</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Une expertise complète en développement web et mobile, de la conception d'interfaces modernes à
            l'intégration d'API REST et aux architectures full-stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`group card-hover transition-all duration-300 border border-rose-100 bg-card animate-fade-in-up animate-delay-${(index + 1) * 100} hover:border-rose-200 hover:shadow-xl hover:shadow-rose-100/70`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-rose-50 text-rose-700 group-hover:bg-rose-600 group-hover:text-white transition-colors animate-scale-in">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className={`${category.color} hover:scale-105 hover-lift transition-all duration-200 cursor-default animate-fade-in-left`}
                      style={{ animationDelay: `${skillIndex * 0.1}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center animate-fade-in-up animate-delay-500">
            <div className="text-4xl font-bold text-rose-600 mb-2 animate-scale-in animate-delay-600">4+</div>
            <div className="text-muted-foreground">Années d'expérience</div>
          </div>
          <div className="text-center animate-fade-in-up animate-delay-600">
            <div className="text-4xl font-bold text-rose-600 mb-2 animate-scale-in animate-delay-700">20+</div>
            <div className="text-muted-foreground">Technologies maîtrisées</div>
          </div>
          <div className="text-center animate-fade-in-up animate-delay-700">
            <div className="text-4xl font-bold text-rose-600 mb-2 animate-scale-in animate-delay-800">15+</div>
            <div className="text-muted-foreground">Projets réalisés</div>
          </div>
        </div>
      </div>
    </section>
  )
}
