import { Star, Quote, Play } from "lucide-react";
import consultant1 from "@/assets/consultant-1.jpg";
import consultant2 from "@/assets/consultant-2.jpg";

const testimonials = [
  {
    name: "Faisal Ahmed",
    role: "Empresário",
    content: "Os consultores foram incrivelmente atenciosos, e o nível de cuidado que recebi durante todo o processo foi absolutamente excepcional e tranquilizador.",
    avatar: consultant2,
  },
  {
    name: "Shamima Banu",
    role: "Professora",
    content: "Os consultores foram incrivelmente atenciosos, e o nível de cuidado que recebi foi absolutamente excepcional. Super recomendo!",
    avatar: consultant1,
  },
  {
    name: "Tariq Nazar",
    role: "Designer",
    content: "Os consultores foram incrivelmente atenciosos, e o nível de cuidado que recebi foi excepcional e tranquilizador ao longo de todo o processo.",
    avatar: consultant2,
  },
  {
    name: "Md. Mafikur Rahman",
    role: "Engenheiro",
    content: "Os consultores foram incrivelmente atenciosos, e o nível de cuidado que recebi foi absolutamente excepcional e tranquilizador.",
    avatar: consultant1,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-highlight/5 rounded-full blur-3xl translate-y-1/2" />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            Depoimentos
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            O que nossos clientes dizem?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Testimonial with Video Placeholder */}
          <div className="lg:col-span-1 lg:row-span-2 animate-fade-up">
            <div className="relative h-full bg-card rounded-3xl overflow-hidden shadow-card border border-border">
              <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-highlight/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-card rounded-full shadow-elevated flex items-center justify-center hover:scale-105 transition-transform">
                    <Play className="w-6 h-6 text-primary ml-1" />
                  </button>
                </div>
                {/* Quote Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-card via-card/90 to-transparent">
                  <Quote className="w-8 h-8 text-highlight mb-3" />
                  <p className="text-sm text-foreground mb-4">
                    Os consultores foram incrivelmente atenciosos, e o nível de cuidado que recebi foi absolutamente excepcional. Seu suporte durante a minha consulta foi impressionante, fazendo um momento difícil muito mais fácil.
                  </p>
                  <div className="flex items-center gap-3">
                    <img src={consultant1} alt="" className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-sm text-foreground">Rafaela Karen</p>
                      <p className="text-xs text-muted-foreground">Gerente de RH</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Regular Testimonials */}
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-card transition-shadow animate-fade-up"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <Quote className="w-6 h-6 text-highlight/40 mb-4" />
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-3">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
