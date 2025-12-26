import { Shield, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToSimulator = () => {
    document.getElementById("simulador")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Pronto para proteger sua família?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Faça uma simulação gratuita agora e descubra o plano ideal para você
          </p>
          <Button variant="hero" size="xl" onClick={scrollToSimulator}>
            Quero uma Simulação Grátis
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Button>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 pt-12 border-t border-primary-foreground/20">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-accent" />
              <div>
                <h3 className="font-heading font-bold text-lg">DD Planos de Saúde</h3>
                <p className="text-xs text-primary-foreground/60">Nova Iguaçu, RJ</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Consultores especialistas em planos de saúde individuais e familiares 
              na Baixada Fluminense.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+5521999999999" className="hover:text-primary-foreground transition-colors">
                  (21) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:contato@ddplanos.com.br" className="hover:text-primary-foreground transition-colors">
                  contato@ddplanos.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span>Nova Iguaçu, RJ - Baixada Fluminense</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-4 text-xs text-primary-foreground/60">
              Horário de atendimento: Seg a Sex, 8h às 18h
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
          <p>
            © {new Date().getFullYear()} DD Planos de Saúde. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
