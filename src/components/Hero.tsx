import Ribbons from "./Ribbons.tsx";
import Galaxy from "./Galaxy";
import { Button } from "@/components/ui/button";
import TextType from './TextType';

  



const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className=" relative min-h-screen flex items-center justify-center bg-hero-gradient px-6 lg:px-8">
      
      <div className="absolute inset-0 z-0">
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={0.4}
          glowIntensity={0.15}
          saturation={0.1}
          hueShift={200}
          twinkleIntensity={0}
          transparent={true}
        />
      </div>

      <div className="absolute inset-0 z-0">
        <Ribbons
          baseThickness={30}
          colors={['#14b8a6']}
          speedMultiplier={0.5}
          maxAge={500}
          enableFade={false}
          enableShaderEffect={true}
        />
      </div>
      
      <div className=" relative max-w-content mx-auto text-center z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-10">
          <TextType 
            text={[
              "Hello Everyone",
              "I'm Sania Naz Ansari, Frontend Developer",
              "Happy Coding"
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </h1>

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