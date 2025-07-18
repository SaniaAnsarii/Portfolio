import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code2, ArrowUp } from "lucide-react";

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="bg-teal-gradient py-section px-6 lg:px-8">
      <div className="max-w-content mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-foreground mb-8">
          CONTACT
        </h2>
        
        <p className="text-xl text-teal-foreground mb-12 max-w-2xl mx-auto">
          Ready to turn your vision into reality? Let's connect and discuss how we can create something exceptional together.
        </p>
        
       <a href="mailto:ansarisania789@gmail.com">
  <Button 
    variant="outline" 
    size="lg"
    className="border-2 border-teal-500 mb-5 text-teal-500 hover:bg-teal-500 hover:text-white text-lg px-8 py-6 h-auto"
  >
    Get In Touch
  </Button>
</a>

        
        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-12">
          <a 
            href="https://github.com/SaniaAnsarii" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-teal-foreground hover:text-teal-light transition-colors p-2"
          >
            <Github className="w-8 h-8" />
          </a>
          <a 
            href="https://www.linkedin.com/in/sania-ansari" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-teal-foreground hover:text-teal-light transition-colors p-2"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a 
            href="https://leetcode.com/u/saniaanazz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-teal-foreground hover:text-teal-light transition-colors p-2"
          >
            <Code2 className="w-8 h-8" />
          </a>
        </div>
        
        {/* Back to top */}
        <button 
          onClick={scrollToTop}
          className="text-teal-foreground hover:text-teal-light transition-colors p-2 mb-8"
        >
          <ArrowUp className="w-6 h-6 mx-auto" />
        </button>
        
      
      </div>
    </section>
  );
};

export default Contact;