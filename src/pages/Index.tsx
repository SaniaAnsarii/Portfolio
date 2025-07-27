import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';


const Index = () => {
  return (
    <ParallaxProvider>
      <div className="min-h-screen">
        <Navigation />
        <main>
          <div id="home">
            <Hero />
          </div>

          <Parallax speed={-5}>
            <About />
          </Parallax>

          <Parallax speed={5}>
            <Skills />
          </Parallax>

          <Parallax speed={-7}>
            <Projects />
          </Parallax>

          <Parallax speed={3}>
            <Contact />
          </Parallax>

        </main>
      </div>
    </ParallaxProvider>
  );
};



export default Index;
