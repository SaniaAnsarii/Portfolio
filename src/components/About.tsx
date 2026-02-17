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
              I’m a dedicated Full Stack Developer skilled in the MERN stack
              (React.js, Next.js, Node.js, Express.js, MongoDB) with a passion
              for building fast, secure, and responsive web applications. I
              focus on writing clean, reusable code and optimizing performance
              through efficient APIs, server-side rendering, and database
              design. My experience includes deploying projects on AWS and
              Vercel, integrating JWT authentication, and maintaining CI/CD
              pipelines. I enjoy working in Agile environments, collaborating
              with teams, and delivering user-focused solutions that balance
              functionality, scalability, and design.
            </p>

            <a
              href="https://drive.google.com/file/d/1xkhXNqX3Fat0Ptg4a4NMC8OaT_KIkufm/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white text-lg px-8 py-6 h-auto"
              >
                View Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
