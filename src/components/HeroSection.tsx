import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
const profileImage = "/lovable-uploads/19e8c11e-6f80-419b-8242-a57d1bc9b671.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-background via-muted/30 to-accent/20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="fade-in mb-8">
          <div className="relative inline-block">
            <img
              src={profileImage}
              alt="Photo de profil"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover profile-glow transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-background"></div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="fade-in-delay mb-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Salut, je suis <span className="hero-title">Hajer OUKHAY</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Développeur Front-End Junior passionnée
          </p>
        </div>

        {/* Description */}
        <div className="fade-in-delay mb-8 max-w-2xl mx-auto">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Je crée des interfaces web{" "}
            <span className="text-primary font-medium">intuitives et accessibles</span>{" "}
            avec une approche centrée sur l'utilisateur. Passionné par le{" "}
            <span className="text-primary font-medium">design moderne</span> et les{" "}
            <span className="text-primary font-medium">technologies innovantes</span>.
          </p>
        </div>

        {/* Passions */}
        <div className="fade-in-delay mb-10">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {[
              "Design UI/UX",
              "Accessibilité Web",
              "React & TypeScript",
              "Animations CSS",
              "Design System",
            ].map((passion, index) => (
              <span
                key={passion}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {passion}
              </span>
            ))}
          </div>
        </div>

        {/* Objectif */}
        <div className="fade-in-delay mb-10">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 card-hover border border-border/50">
            <p className="text-base text-foreground/90 italic">
              "Mon objectif : rejoindre une équipe créative et innovante pour développer
              des expériences web exceptionnelles qui marquent les esprits."
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="fade-in-delay flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="gradient" 
            size="lg" 
            className="group"
            onClick={() => window.open('mailto:alex@example.com')}
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Me contacter
          </Button>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://linkedin.com/in/alexhttps://www.linkedin.com/in/hajer-oukhay-29829a183/', '_blank')}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://github.com/hajerouk', '_blank')}
            >
              <Github className="w-5 h-5" />
              GitHub
            </Button>
          </div>
        </div>

        {/* Location */}
        <div className="fade-in-delay mt-8 flex items-center justify-center gap-2 text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">Djerba, Tunisie</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;