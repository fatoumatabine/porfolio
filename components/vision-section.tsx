import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Cpu, HeartHandshake, Lightbulb, Rocket, ShieldCheck, UsersRound } from "lucide-react"
import Image from "next/image"

export function VisionSection() {
  const pillars = [
    {
      icon: <UsersRound className="h-6 w-6" />,
      title: "Femmes dans la tech",
      text: "Encourager une présence féminine forte, visible et compétente dans les métiers du numérique.",
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Excellence technique",
      text: "Construire des solutions robustes avec une vraie maîtrise du front-end, du back-end, du mobile et des API.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation utile",
      text: "Transformer les besoins réels en applications simples, accessibles et capables d'améliorer le quotidien.",
    },
  ]

  const commitments = [
    "Apprendre continuellement et rester à jour sur les technologies modernes",
    "Développer des produits fiables, maintenables et orientés utilisateur",
    "Inspirer d'autres jeunes femmes à prendre leur place dans la technologie",
  ]

  return (
    <section id="vision" className="min-h-screen bg-white pt-28 pb-20 dark:bg-[#1b1118]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6 animate-fade-in-left">
            <Badge className="rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-medium text-rose-700 hover:bg-rose-50 dark:border-rose-900/60 dark:bg-rose-950/30 dark:text-rose-200">
              Femmes, technologie & avenir
            </Badge>
            <div className="space-y-5">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl dark:text-rose-50">
                Des femmes noires fortes,
                <span className="block text-rose-600 dark:text-rose-300">intellectuelles et bâtisseuses de tech</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-rose-100/75">
                Cette page présente une vision : apprendre, créer, diriger et inspirer. Elle représente les femmes qui
                construisent le numérique avec compétence, élégance, discipline et ambition.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-lg bg-rose-600 px-6 text-white hover:bg-rose-700">
                <a href="/#contact">Me contacter</a>
              </Button>
              <Button asChild variant="outline" className="rounded-lg border-rose-200 text-rose-700 hover:bg-rose-50 dark:border-rose-800/70 dark:text-rose-200 dark:hover:bg-rose-900/30">
                <a href="/">Retour au portfolio</a>
              </Button>
            </div>
          </div>

          <div className="animate-fade-in-right">
            <div className="overflow-hidden rounded-3xl border border-rose-100 bg-rose-50 p-3 shadow-2xl shadow-rose-100/80 dark:border-rose-900/60 dark:bg-[#241820] dark:shadow-rose-950/40">
              <Image
                src="/images/women-tech-vision.png"
                alt="Femmes noires professionnelles dans la technologie"
                width={1400}
                height={900}
                className="aspect-[4/3] w-full rounded-2xl object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6 animate-fade-in-left">
            <Badge className="rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-medium text-rose-700 hover:bg-rose-50 dark:border-rose-900/60 dark:bg-rose-950/30 dark:text-rose-200">
              Vision & leadership
            </Badge>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-rose-50">
                Femme dans la technologie,
                <span className="block text-rose-600 dark:text-rose-300">future développeuse d'impact</span>
              </h2>
              <p className="text-lg leading-8 text-slate-600 dark:text-rose-100/75">
                Ma vision est de contribuer à une tech plus inclusive, plus humaine et plus utile. En tant que
                développeuse Full Stack Web & Mobile, je veux créer des solutions concrètes, tout en montrant que les
                femmes ont toute leur place dans l'ingénierie logicielle, l'innovation et le leadership technique.
              </p>
            </div>

            <div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-5 shadow-sm dark:border-rose-900/60 dark:bg-rose-950/20">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-white p-3 text-rose-600 shadow-sm dark:bg-[#241820] dark:text-rose-200">
                  <Rocket className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-950 dark:text-rose-50">Objectif professionnel</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-rose-100/70">
                    Devenir une développeuse complète, capable de concevoir, développer, déployer et améliorer des
                    applications web et mobiles performantes, sécurisées et adaptées aux besoins des utilisateurs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5 animate-fade-in-right">
            <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
              {pillars.map((pillar, index) => (
                <Card
                  key={pillar.title}
                  className="group border border-rose-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-100/70 dark:border-rose-900/60 dark:bg-[#241820] dark:hover:shadow-rose-950/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600 transition-colors duration-300 group-hover:bg-rose-600 group-hover:text-white dark:bg-rose-950/40 dark:text-rose-200">
                        {pillar.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-950 dark:text-rose-50">{pillar.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-rose-100/70">{pillar.text}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border border-rose-100 bg-white dark:border-rose-900/60 dark:bg-[#241820]">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl bg-rose-50 p-3 text-rose-600 dark:bg-rose-950/40 dark:text-rose-200">
                    <HeartHandshake className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-950 dark:text-rose-50">Mes engagements</h3>
                </div>
                <ul className="space-y-3">
                  {commitments.map((commitment) => (
                    <li key={commitment} className="flex items-start gap-3 text-sm text-slate-600 dark:text-rose-100/70">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-rose-600 dark:text-rose-300" />
                      <span>{commitment}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
