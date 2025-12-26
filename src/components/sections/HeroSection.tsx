import { Phone, MapPin, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroFamily from "@/assets/hero-family.jpg";

const HeroSection = () => {
  const scrollToSimulator = () => {
    document.getElementById("simulador")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground/20 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-10 h-10 text-accent" />
            <div>
              <h1 className="text-xl font-heading font-bold text-primary-foreground">
                DD Planos de Saúde
              </h1>
              <p className="text-xs text-primary-foreground/70">Nova Iguaçu, RJ</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-primary-foreground/80 text-sm">
            <a href="#simulador" className="hover:text-primary-foreground transition-colors">
              Simulador
            </a>
            <a href="#redes" className="hover:text-primary-foreground transition-colors">
              Redes
            </a>
            <a href="#faq" className="hover:text-primary-foreground transition-colors">
              Dúvidas
            </a>
            <a 
              href="tel:+5521999999999" 
              className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-lg hover:bg-primary-foreground/20 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (21) 99999-9999
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 pt-12 pb-20 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full text-sm text-primary-foreground/90 mb-6">
              <MapPin className="w-4 h-4" />
              Atendimento especializado na Baixada Fluminense
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Proteja sua família em{" "}
              <span className="text-accent">Nova Iguaçu</span>{" "}
              com planos que cabem no seu bolso
            </h2>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Faça uma simulação gratuita em menos de 1 minuto e descubra o plano ideal para você e sua família.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={scrollToSimulator}
                className="group"
              >
                Quero uma Simulação Grátis
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </Button>
              <Button variant="heroOutline" size="xl">
                <Phone className="w-5 h-5" />
                Falar com Consultor
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-primary-foreground/70 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                Resposta em até 1 hora
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent" />
                100% Gratuito
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl" />
              <img
                src={heroFamily}
                alt="Família feliz protegida pelo plano de saúde"
                className="relative rounded-3xl shadow-elevated w-full object-cover aspect-[4/3]"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-card animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">+500 Famílias</p>
                    <p className="text-xs text-muted-foreground">Atendidas em 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
