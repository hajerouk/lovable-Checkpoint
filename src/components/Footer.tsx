import { Heart, Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-gradient-to-t from-muted/30 to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-4">
          <p className="text-lg text-primary font-medium italic mb-2">
            "Le code, c'est de la poésie que les machines comprennent."
          </p>
          <p className="text-sm text-muted-foreground">
            — Inspiré par l'art de créer des expériences numériques
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
          <span>Créé avec</span>
          <Heart className="w-4 h-4 text-red-500 animate-pulse" />
          <span>et</span>
          <Code2 className="w-4 h-4 text-primary" />
          <span>par Hajer OUKHAY • {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;