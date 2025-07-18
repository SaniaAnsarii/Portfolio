import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";

const About = () => {
  return (
    <section id="about" className="bg-teal-gradient py-section px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-teal-foreground mb-16">
          ABOUT ME
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="w-80 h-80 rounded-lg overflow-hidden shadow-elegant">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <p className="text-lg md:text-xl text-teal-foreground mb-6 leading-relaxed">
              I'm a passionate and Frontend Developer with practical experience
              in building modern, responsive web applications using React.js,
              Next.js, and Tailwind CSS. I specialize in creating clean,
              maintainable code with a strong focus on component-based
              architecture, performance optimization, and mobile-first design
              principles. My projects often involve API integration, dynamic
              routing, and server-side rendering using Next.js. I'm also
              familiar with backend fundamentals like Node.js and Express, and I
              use Git/GitHub for version control. I thrive in collaborative
              environments, value clean UI/UX, and enjoy delivering seamless
              digital experiences that are both scalable and user-friendly
            </p>
           

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white text-lg px-8 py-6 h-auto"
            >
              View Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
