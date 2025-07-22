import { Button } from "@/components/ui/button";

const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "TypeScript", level: 70 },
    { name: "Next JS", level: 80 },
    // { name: "Python", level: 70 },
    { name: "HTML/CSS", level: 95 },
    { name: "Git", level: 85 },
    { name: "SQL", level: 85 },
  ];

  return (
    <section id="skills" className="py-section px-6 lg:px-8 bg-background">
      <div className="max-w-content mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          SKILLS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-foreground">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className="bg-teal h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${skill.level}%`,
                    animationDelay: `${index * 100}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Ready to bring your ideas to life?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm passionate about creating exceptional digital experiences. Let's collaborate and build something amazing together.
          </p>
          <Button 
            variant="teal" 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-8 py-6 h-auto"
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Skills;