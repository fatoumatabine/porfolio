import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Globe, Server, Languages } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Langages de programmation",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "PHP", "Node.js", "TypeScript", "SQL", "MySQL", "C++"],
      color: "bg-blue-500/10 text-blue-600 border-blue-200",
    },
    {
      title: "Frameworks & Bibliothèques",
      icon: <Globe className="w-6 h-6" />,
      skills: ["React.js", "Angular", "Laravel", "Express.js", "Bootstrap", "Tailwind CSS"],
      color: "bg-green-500/10 text-green-600 border-green-200",
    },
    {
      title: "Outils & Technologies",
      icon: <Server className="w-6 h-6" />,
      skills: ["WordPress", "Git", "GitHub", "VS Code", "npm", "Composer", "Responsive Design", "Mobile First"],
      color: "bg-purple-500/10 text-purple-600 border-purple-200",
    },
    {
      title: "Langues",
      icon: <Languages className="w-6 h-6" />,
      skills: ["Français (Langue maternelle)", "Anglais (Courant B2/C1)"],
      color: "bg-orange-500/10 text-orange-600 border-orange-200",
    },
  ]

  return (
    <section id="competences" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-600 mb-4">Compétences Techniques</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Une expertise complète en développement web full stack, des technologies front-end modernes aux solutions
            back-end robustes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`group card-hover transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm animate-fade-in-up animate-delay-${(index + 1) * 100}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors animate-scale-in">
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
            <div className="text-4xl font-bold text-amber-600 mb-2 animate-scale-in animate-delay-600">2+</div>
            <div className="text-muted-foreground">Années d'expérience</div>
          </div>
          <div className="text-center animate-fade-in-up animate-delay-600">
            <div className="text-4xl font-bold text-amber-600 mb-2 animate-scale-in animate-delay-700">10+</div>
            <div className="text-muted-foreground">Technologies maîtrisées</div>
          </div>
          <div className="text-center animate-fade-in-up animate-delay-700">
            <div className="text-4xl font-bold text-amber-600 mb-2 animate-scale-in animate-delay-800">5+</div>
            <div className="text-muted-foreground">Projets réalisés</div>
          </div>
        </div>
      </div>
    </section>
  )
}
