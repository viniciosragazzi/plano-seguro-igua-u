import { MapPin, Building2, Stethoscope, Heart } from "lucide-react";

const networks = [
  {
    name: "Hospital Geral de Nova Iguaçu",
    type: "Hospital Público de Referência",
    icon: Building2,
  },
  {
    name: "Unimed Baixada Fluminense",
    type: "Rede Credenciada",
    icon: Heart,
  },
  {
    name: "Amil",
    type: "Planos Individuais e Familiares",
    icon: Stethoscope,
  },
  {
    name: "Intermédica",
    type: "Ampla Rede na Região",
    icon: Building2,
  },
  {
    name: "Hapvida",
    type: "Cobertura Completa",
    icon: Heart,
  },
  {
    name: "SulAmérica",
    type: "Premium e Acessível",
    icon: Stethoscope,
  },
];

const NetworkSection = () => {
  return (
    <section id="redes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            Cobertura Regional
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Atendimento perto de você na{" "}
            <span className="text-primary">Baixada Fluminense</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Trabalhamos com as principais operadoras que possuem hospitais, clínicas e laboratórios 
            em Nova Iguaçu, Duque de Caxias, São João de Meriti e toda a região.
          </p>
        </div>

        {/* Networks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {networks.map((network, index) => (
            <div
              key={network.name}
              className="group gradient-card p-6 rounded-2xl border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <network.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                    {network.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{network.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Locations */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Cidades atendidas:</span>{" "}
            Nova Iguaçu, Duque de Caxias, São João de Meriti, Belford Roxo, 
            Nilópolis, Mesquita, Queimados e região.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
