import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1Image from "@/assets/Project-1.png";
import project2Image from "@/assets/Project-2.png";
import project3Image from "@/assets/Project-3.png";

const Projects = () => {
  const projects = [
    {
      id: 0,
      title: "Quiz Web App",
      description:
        "A dynamic and responsive quiz application built with React and Tailwind CSS, supporting single/multiple correct MCQs and short answers. Features include modular components, localStorage integration, and client-side routing for creating, playing, and managing quizzes efficiently.",
      image: project1Image,
      liveUrl: "https://quiz-webapp-pearl.vercel.app/",
      sourceUrl: "https://github.com/SaniaAnsarii/Quiz-webapp.git",
    },
    {
      id: 1,
      title: "Alumni Association Platform",
      description:
        "A full-stack alumni networking platform enabling users to register, connect, and interact seamlessly. Built with React, Node.js, MongoDB, and Tailwind CSS, it features secure authentication, dynamic user profiles, and real-time communication for enhanced alumni engagement.",
      image: project2Image,
      liveUrl: "https://alumni-gray.vercel.app/",
      sourceUrl: "https://github.com/SaniaAnsarii/alumni.git",
    },
    {
      id: 3,
      title: "Share Your Food Recipe",
      description:
        "A full-stack recipe sharing web app developed using Next.js, MongoDB Atlas, and Tailwind CSS. It allows users to add and explore recipes, with image upload support via AWS S3. Deployed on Vercel with secure environment configuration.",
      image: project3Image,
      liveUrl: "https://share-your-food-recipe-3vro.vercel.app/",
      sourceUrl: "https://github.com/SaniaAnsarii/ShareYourFoodRecipe.git",
    },
  ];

  return (
    <section id="projects" className="py-section px-6 lg:px-8 bg-background">
      <div className="max-w-content mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          PROJECTS
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="teal" size="lg" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      See Live
                    </Button>
                  </a>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="lg" className="gap-2">
                      <Github className="w-4 h-4" />
                      Source Code
                    </Button>
                  </a>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="rounded-lg overflow-hidden shadow-elegant hover:shadow-teal transition-all duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Have a project in mind?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            From concept to deployment, I'll help you build scalable web
            applications that drive results.
          </p>
          <Button
            variant="teal-outline"
            size="lg"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-lg px-8 py-6 h-auto"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
