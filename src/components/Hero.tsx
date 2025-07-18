import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient px-6 lg:px-8">
      <div className="max-w-content mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
          Hi, my name is <span className="text-teal">Sania Naz Ansari</span>
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8">
          I'm the Frontend Web Developer.
        </h2>
        <Button 
          variant="teal-outline" 
          size="lg"
          onClick={() => scrollToSection('about')}
          className="text-lg px-8 py-6 h-auto"
        >
          Know more
        </Button>
      </div>
    </section>
  );
};

export default Hero;