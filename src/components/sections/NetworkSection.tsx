import { MapPin, Building2, Stethoscope, Heart, ChevronRight, Clock, CheckCircle } from "lucide-react";

const services = [
  {
    title: "Consultas e Exames",
    description: "Acesso a consultas com especialistas e exames laboratoriais em toda a região.",
    icon: Stethoscope,
    expanded: false,
  },
  {
    title: "Internações",
    description: "Cobertura para internações em hospitais de referência da Baixada Fluminense.",
    icon: Building2,
    expanded: false,
  },
  {
    title: "Pronto-Socorro 24h",
    description: "Atendimento de emergência disponível 24 horas por dia, 7 dias por semana.",
    icon: Clock,
    expanded: true,
  },
  {
    title: "Planos Familiares",
    description: "Opções especiais para incluir toda a família com descontos progressivos.",
    icon: Heart,
    expanded: false,
  },
  {
    title: "Consulta Online",
    description: "Telemedicina disponível para consultas rápidas sem sair de casa.",
    icon: CheckCircle,
    expanded: false,
  },
];

const benefits = [
  "Atendimento personalizado",
  "Consulta preventiva",
  "Acompanhamento contínuo",
  "Consulta de emergência",
];

const NetworkSection = () => {
  return (
    <section id="redes" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-highlight/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Services List */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-highlight/10 text-highlight px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" />
              Nossos Serviços
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cuidado além do básico
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md">
              Cada serviço foi pensado para proporcionar conforto. De tecnologia avançada a cuidado personalizado — é por isso que nossos clientes nos escolhem.
            </p>

            {/* Services Accordion List */}
            <div className="space-y-3">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`group p-5 rounded-2xl border transition-all duration-300 cursor-pointer animate-fade-up ${
                    service.expanded
                      ? "bg-card border-highlight/30 shadow-card"
                      : "bg-transparent border-border hover:border-highlight/20 hover:bg-card/50"
                  }`}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        service.expanded ? "bg-highlight/20" : "bg-secondary"
                      }`}>
                        <service.icon className={`w-5 h-5 ${service.expanded ? "text-highlight" : "text-muted-foreground"}`} />
                      </div>
                      <span className={`font-medium ${service.expanded ? "text-foreground" : "text-muted-foreground"}`}>
                        {service.title}
                      </span>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${
                      service.expanded ? "rotate-90 text-highlight" : "text-muted-foreground"
                    }`} />
                  </div>
                  {service.expanded && (
                    <p className="mt-4 text-sm text-muted-foreground pl-14">
                      {service.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Benefits Card */}
          <div className="animate-fade-up lg:sticky lg:top-8" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card rounded-3xl p-8 shadow-elevated border border-border">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                    Consulta Preventiva
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Acompanhamento médico contínuo para você e sua família.
                  </p>
                </div>
                <div className="w-12 h-12 gradient-purple rounded-xl flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-highlight-foreground" />
                </div>
              </div>

              {/* Benefits List */}
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={benefit} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                    <div className="w-6 h-6 bg-highlight/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-highlight" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-secondary rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-highlight/20 to-primary/20 flex items-center justify-center">
                    <Heart className="w-12 h-12 text-highlight/50" />
                  </div>
                </div>
                <div className="aspect-square bg-secondary rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-success/20 flex items-center justify-center">
                    <Stethoscope className="w-12 h-12 text-primary/50" />
                  </div>
                </div>
              </div>
            </div>

            {/* Location Badge */}
            <div className="mt-6 p-4 bg-muted/50 rounded-2xl border border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Cidades atendidas:</span>{" "}
                Nova Iguaçu, Duque de Caxias, São João de Meriti, Belford Roxo, Nilópolis, Mesquita e região.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
