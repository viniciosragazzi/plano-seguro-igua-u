import { Award, Search, HeartHandshake, TrendingDown } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Comparamos todas as operadoras",
    description:
      "Analisamos Unimed, Amil, Bradesco, SulAmérica, Hapvida e mais para encontrar o melhor custo-benefício para você.",
  },
  {
    icon: TrendingDown,
    title: "Foco em economia real",
    description:
      "Nosso trabalho é encontrar planos que cabem no seu bolso, sem abrir mão da qualidade de atendimento.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento humanizado",
    description:
      "Somos consultores, não vendedores. Ouvimos suas necessidades e indicamos o plano mais adequado para sua realidade.",
  },
  {
    icon: Award,
    title: "Especialistas há 10 anos",
    description:
      "Mais de uma década ajudando famílias da Baixada Fluminense a encontrar proteção acessível e de qualidade.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              Por que a DD Planos?
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Consultores especialistas que buscam o{" "}
              <span className="text-primary">melhor custo-benefício</span> para você
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Diferente de corretores tradicionais que empurram um único plano, nós analisamos
              todas as opções do mercado para encontrar exatamente o que você precisa,
              pelo preço que você pode pagar.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-muted/50 rounded-xl">
                <p className="font-heading text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Famílias atendidas</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-xl">
                <p className="font-heading text-3xl font-bold text-primary">10</p>
                <p className="text-sm text-muted-foreground">Anos de mercado</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-xl">
                <p className="font-heading text-3xl font-bold text-primary">12+</p>
                <p className="text-sm text-muted-foreground">Operadoras parceiras</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 bg-card rounded-2xl border border-border hover:shadow-card hover:border-primary/30 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
