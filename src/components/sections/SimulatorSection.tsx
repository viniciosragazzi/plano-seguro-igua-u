import { useState } from "react";
import { User, Users, Wallet, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

type Step = 1 | 2 | 3 | 4;

const SimulatorSection = () => {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    age: "",
    people: "",
    budget: "",
    name: "",
    phone: "",
  });

  const ageRanges = [
    { value: "0-18", label: "0 a 18 anos" },
    { value: "19-28", label: "19 a 28 anos" },
    { value: "29-33", label: "29 a 33 anos" },
    { value: "34-43", label: "34 a 43 anos" },
    { value: "44-53", label: "44 a 53 anos" },
    { value: "54+", label: "54 anos ou mais" },
  ];

  const peopleOptions = [
    { value: "1", label: "Só eu" },
    { value: "2", label: "2 pessoas" },
    { value: "3-4", label: "3 a 4 pessoas" },
    { value: "5+", label: "5 ou mais" },
  ];

  const budgetOptions = [
    { value: "150", label: "Até R$ 150" },
    { value: "300", label: "R$ 150 a R$ 300" },
    { value: "500", label: "R$ 300 a R$ 500" },
    { value: "500+", label: "Acima de R$ 500" },
  ];

  const handleSubmit = () => {
    if (!formData.name || !formData.phone) {
      toast({
        title: "Preencha seus dados",
        description: "Nome e telefone são obrigatórios para receber a simulação.",
        variant: "destructive",
      });
      return;
    }
    
    setStep(4);
    toast({
      title: "Simulação enviada com sucesso! 🎉",
      description: "Nosso consultor entrará em contato em até 1 hora.",
    });
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center gap-3 mb-8">
      {[1, 2, 3].map((s) => (
        <div key={s} className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
              step >= s
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground"
            }`}
          >
            {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
          </div>
          {s < 3 && (
            <div
              className={`w-16 h-1 mx-2 rounded transition-colors duration-300 ${
                step > s ? "bg-primary" : "bg-secondary"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );

  const OptionButton = ({
    selected,
    onClick,
    children,
  }: {
    selected: boolean;
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <button
      onClick={onClick}
      className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 hover:shadow-card ${
        selected
          ? "border-primary bg-primary/5 shadow-soft"
          : "border-border bg-card hover:border-primary/50"
      }`}
    >
      {children}
    </button>
  );

  return (
    <section id="simulador" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simulador de Planos em{" "}
              <span className="text-accent">3 Passos</span>
            </h2>
            <p className="text-muted-foreground">
              Descubra o plano ideal para você em menos de 1 minuto
            </p>
          </div>

          {/* Simulator Card */}
          <div className="bg-card rounded-3xl shadow-elevated p-8 md:p-10 animate-scale-in">
            {step < 4 && <StepIndicator />}

            {/* Step 1: Age */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Qual a sua faixa etária?
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Selecione a idade do titular do plano
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {ageRanges.map((range) => (
                    <OptionButton
                      key={range.value}
                      selected={formData.age === range.value}
                      onClick={() => setFormData({ ...formData, age: range.value })}
                    >
                      <span className="font-medium text-foreground">{range.label}</span>
                    </OptionButton>
                  ))}
                </div>

                <Button
                  variant="hero"
                  size="lg"
                  className="w-full mt-6"
                  disabled={!formData.age}
                  onClick={() => setStep(2)}
                >
                  Continuar
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            )}

            {/* Step 2: People */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Quantas pessoas no plano?
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Incluindo você e seus dependentes
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {peopleOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      selected={formData.people === option.value}
                      onClick={() => setFormData({ ...formData, people: option.value })}
                    >
                      <span className="font-medium text-foreground">{option.label}</span>
                    </OptionButton>
                  ))}
                </div>

                <div className="flex gap-3 mt-6">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1"
                    onClick={() => setStep(1)}
                  >
                    Voltar
                  </Button>
                  <Button
                    variant="hero"
                    size="lg"
                    className="flex-1"
                    disabled={!formData.people}
                    onClick={() => setStep(3)}
                  >
                    Continuar
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Budget & Contact */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wallet className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Qual seu orçamento mensal?
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Por pessoa, aproximadamente
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {budgetOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      selected={formData.budget === option.value}
                      onClick={() => setFormData({ ...formData, budget: option.value })}
                    >
                      <span className="font-medium text-foreground">{option.label}</span>
                    </OptionButton>
                  ))}
                </div>

                {/* Contact Fields */}
                <div className="pt-6 border-t border-border space-y-4">
                  <p className="text-sm text-muted-foreground text-center">
                    Preencha seus dados para receber a simulação
                  </p>
                  <input
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="(21) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div className="flex gap-3 mt-6">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1"
                    onClick={() => setStep(2)}
                  >
                    Voltar
                  </Button>
                  <Button
                    variant="hero"
                    size="lg"
                    className="flex-1"
                    disabled={!formData.budget}
                    onClick={handleSubmit}
                  >
                    Receber Simulação
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Success */}
            {step === 4 && (
              <div className="text-center py-8 animate-scale-in">
                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-success" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                  Simulação Recebida!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Obrigado, {formData.name?.split(" ")[0]}! Nosso consultor especialista
                  entrará em contato pelo número informado em até 1 hora.
                </p>
                <div className="bg-muted/50 p-4 rounded-xl">
                  <p className="text-sm text-muted-foreground mb-2">Quer falar agora?</p>
                  <Button variant="success" size="lg">
                    <Phone className="w-5 h-5" />
                    Ligar Agora
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimulatorSection;
