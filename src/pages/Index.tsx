import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { useEffect, useRef } from 'react';

const Index = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const sections = [aboutRef.current, skillsRef.current, projectsRef.current, contactRef.current];
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ParallaxProvider>
      <div className="min-h-screen">
        <Navigation />
        <main>
          <div id="home">
            <Hero />
          </div>

          <div id="about" ref={aboutRef} className="opacity-0 transition-opacity duration-1000">
            <Parallax speed={-5}>
              <About />
            </Parallax>
          </div>

          <div id="skills" ref={skillsRef} className="opacity-0 transition-opacity duration-1000">
            <Parallax speed={5}>
              <Skills />
            </Parallax>
          </div>

          <div id="projects" ref={projectsRef} className="opacity-0 transition-opacity duration-1000">
            <Parallax speed={-7}>
              <Projects />
            </Parallax>
          </div>

          <div id="contact" ref={contactRef} className="opacity-0 transition-opacity duration-1000">
            <Parallax speed={3}>
              <Contact />
            </Parallax>
          </div>

        </main>
      </div>
    </ParallaxProvider>
  );
};

export default Index;
