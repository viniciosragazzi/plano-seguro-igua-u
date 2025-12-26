import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "O que é carência e como funciona?",
    answer:
      "Carência é o período que você precisa esperar depois de contratar o plano para usar alguns serviços. Para consultas e exames simples, geralmente são 30 dias. Para internações, cirurgias e partos, o prazo pode chegar a 180 dias ou mais. Alguns planos oferecem carências reduzidas — podemos te ajudar a encontrar as melhores condições.",
  },
  {
    question: "Como funciona o reembolso?",
    answer:
      "Se você for atendido por um profissional fora da rede credenciada, pode solicitar o reembolso de parte do valor. Cada plano tem suas regras e limites de reembolso. Planos mais completos costumam oferecer reembolso maior. Explicamos tudo direitinho na hora da simulação.",
  },
  {
    question: "A rede credenciada atende em Nova Iguaçu?",
    answer:
      "Sim! Trabalhamos com operadoras que possuem ampla rede na Baixada Fluminense, incluindo hospitais, clínicas e laboratórios em Nova Iguaçu, Duque de Caxias, São João de Meriti e cidades vizinhas. Na simulação, mostramos quais unidades estão disponíveis perto de você.",
  },
  {
    question: "Qual a diferença entre plano individual e familiar?",
    answer:
      "O plano individual cobre apenas uma pessoa. Já o plano familiar permite incluir dependentes (cônjuge, filhos, pais) no mesmo contrato, geralmente com desconto progressivo. Quanto mais pessoas, menor o valor por pessoa. Analisamos qual opção fica mais vantajosa para sua situação.",
  },
  {
    question: "Posso incluir dependentes depois?",
    answer:
      "Sim, você pode adicionar dependentes ao plano posteriormente. É importante saber que novos dependentes podem precisar cumprir carência, dependendo das regras do plano. Planejando desde o início, conseguimos encontrar as melhores condições.",
  },
  {
    question: "A simulação é realmente gratuita?",
    answer:
      "Sim, 100% gratuita e sem compromisso! Nosso trabalho é apresentar as melhores opções para você. Só cobramos se você decidir contratar através da gente — e mesmo assim, o custo já está incluso no valor do plano, sem nenhum adicional.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              Perguntas Frequentes
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tire suas dúvidas
            </h2>
            <p className="text-muted-foreground">
              Respostas claras para as perguntas mais comuns sobre planos de saúde
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
