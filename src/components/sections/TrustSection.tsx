import { Heart, Stethoscope, Users, TrendingDown } from "lucide-react";

const TrustSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <p className="text-2xl md:text-3xl lg:text-4xl font-heading text-foreground leading-relaxed">
            Colocamos sua <span className="inline-flex items-center"><Heart className="w-8 h-8 text-destructive mx-2 animate-pulse-soft" /></span> saúde em primeiro lugar — em cada passo do caminho. Combinamos{" "}
            <span className="text-highlight font-semibold">cuidado especializado</span>, atendimento humanizado e tecnologia para garantir que cada{" "}
            <span className="inline-flex items-center"><Users className="w-8 h-8 text-primary mx-2" /></span> família receba um plano{" "}
            <span className="inline-flex items-center"><Stethoscope className="w-8 h-8 text-success mx-2" /></span> personalizado e acessível para um futuro mais saudável.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mt-20">
          <div className="text-center p-8 bg-card rounded-3xl border border-border shadow-soft hover:shadow-card transition-shadow animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-16 h-16 gradient-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-highlight-foreground" />
            </div>
            <p className="font-heading text-4xl font-bold text-foreground mb-2">500+</p>
            <p className="text-sm text-muted-foreground">Famílias atendidas</p>
          </div>

          <div className="text-center p-8 bg-card rounded-3xl border border-border shadow-soft hover:shadow-card transition-shadow animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingDown className="w-8 h-8 text-accent-foreground" />
            </div>
            <p className="font-heading text-4xl font-bold text-foreground mb-2">30%</p>
            <p className="text-sm text-muted-foreground">Economia média</p>
          </div>

          <div className="text-center p-8 bg-card rounded-3xl border border-border shadow-soft hover:shadow-card transition-shadow animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="w-16 h-16 bg-success/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Stethoscope className="w-8 h-8 text-success" />
            </div>
            <p className="font-heading text-4xl font-bold text-foreground mb-2">12+</p>
            <p className="text-sm text-muted-foreground">Operadoras parceiras</p>
          </div>

          <div className="text-center p-8 bg-card rounded-3xl border border-border shadow-soft hover:shadow-card transition-shadow animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <p className="font-heading text-4xl font-bold text-foreground mb-2">10</p>
            <p className="text-sm text-muted-foreground">Anos de experiência</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
