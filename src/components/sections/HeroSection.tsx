import { Phone, MapPin, Clock, Shield, ArrowRight, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroFamily from "@/assets/hero-family.jpg";
import consultant1 from "@/assets/consultant-1.jpg";
import consultant2 from "@/assets/consultant-2.jpg";

const HeroSection = () => {
  const scrollToSimulator = () => {
    document.getElementById("simulador")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-highlight/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 gradient-purple rounded-2xl flex items-center justify-center shadow-purple">
              <Shield className="w-6 h-6 text-highlight-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-heading font-bold text-foreground">
                DD Planos de Saúde
              </h1>
              <p className="text-xs text-muted-foreground">Nova Iguaçu, RJ</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-muted-foreground text-sm">
            <a href="#simulador" className="hover:text-foreground transition-colors font-medium">
              Simulador
            </a>
            <a href="#redes" className="hover:text-foreground transition-colors font-medium">
              Redes
            </a>
            <a href="#sobre" className="hover:text-foreground transition-colors font-medium">
              Sobre Nós
            </a>
            <a href="#faq" className="hover:text-foreground transition-colors font-medium">
              Dúvidas
            </a>
            <Button variant="default" size="default">
              <Phone className="w-4 h-4" />
              Falar Agora
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 pt-12 pb-24 lg:pt-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-highlight/10 text-highlight px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Atendimento especializado na Baixada Fluminense
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              Sua saúde é nossa{" "}
              <span className="text-highlight">prioridade</span>
              <span className="text-primary">.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Proteja sua família em Nova Iguaçu com planos que cabem no seu bolso. 
              Simulação <strong className="text-foreground">gratuita</strong> em menos de 1 minuto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={scrollToSimulator}
                className="group"
              >
                Quero uma Simulação Grátis
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Emergency Call Badge */}
            <div className="inline-flex items-center gap-4 bg-card p-4 pr-6 rounded-2xl shadow-card">
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                <Phone className="w-5 h-5 text-success" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Ligação direta</p>
                <p className="font-heading font-bold text-lg text-foreground">(21) 99999-9999</p>
              </div>
            </div>
          </div>

          {/* Image Section with Floating Cards */}
          <div className="relative animate-fade-up lg:pl-8" style={{ animationDelay: "0.15s" }}>
            {/* Main Image Container */}
            <div className="relative">
              {/* Purple Glow Behind */}
              <div className="absolute -inset-4 bg-highlight/10 rounded-[2.5rem] blur-2xl" />
              
              {/* Main Image */}
              <div className="relative bg-gradient-to-br from-highlight/20 to-primary/20 p-3 rounded-[2rem]">
                <img
                  src={heroFamily}
                  alt="Família feliz protegida pelo plano de saúde"
                  className="rounded-[1.5rem] shadow-elevated w-full object-cover aspect-[4/3]"
                />
              </div>
              
              {/* Floating Card - Consultant */}
              <div className="absolute -left-6 top-1/4 glass-card p-3 rounded-2xl shadow-card animate-float hidden md:block">
                <div className="flex items-center gap-3">
                  <img 
                    src={consultant1} 
                    alt="Consultora especialista"
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div>
                    <p className="text-xs text-muted-foreground">Sua Consultora</p>
                    <p className="font-semibold text-sm text-foreground">Dra. Ana Paula</p>
                  </div>
                  <div className="w-8 h-8 bg-highlight/10 rounded-full flex items-center justify-center ml-2">
                    <ExternalLink className="w-4 h-4 text-highlight" />
                  </div>
                </div>
              </div>

              {/* Floating Card - Stats */}
              <div className="absolute -right-4 bottom-1/4 glass-card p-4 rounded-2xl shadow-card animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 gradient-accent rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-2xl text-foreground">500+</p>
                    <p className="text-xs text-muted-foreground">Famílias Protegidas</p>
                  </div>
                </div>
              </div>

              {/* Consultant Avatars Row */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass-card py-3 px-5 rounded-2xl shadow-card">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <img src={consultant1} alt="" className="w-10 h-10 rounded-full border-2 border-card object-cover" />
                    <img src={consultant2} alt="" className="w-10 h-10 rounded-full border-2 border-card object-cover" />
                    <div className="w-10 h-10 rounded-full border-2 border-card bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                      +3
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-foreground">Mais de 4 consultores</p>
                    <p className="text-xs text-muted-foreground">prontos para te atender</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logos Section */}
      <div className="relative z-10 border-t border-border bg-card/50 py-10">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trabalhamos com as principais operadoras do mercado
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            <span className="font-heading font-bold text-xl text-foreground">Unimed</span>
            <span className="font-heading font-bold text-xl text-foreground">Amil</span>
            <span className="font-heading font-bold text-xl text-foreground">Hapvida</span>
            <span className="font-heading font-bold text-xl text-foreground">SulAmérica</span>
            <span className="font-heading font-bold text-xl text-foreground">Bradesco</span>
            <span className="font-heading font-bold text-xl text-foreground">Intermédica</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
