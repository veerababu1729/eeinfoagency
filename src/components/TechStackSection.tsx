const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Express", icon: "🚂" },
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "Git", icon: "📦" },
  { name: "GitHub", icon: "🐙" },
  { name: "Vercel", icon: "▲" },
  { name: "TypeScript", icon: "💙" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Next.js", icon: "⬛" },
  { name: "Firebase", icon: "🔥" },
];

const TechStackSection = () => {
  return (
    <section id="tech" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground italic">
            "It is a matter of requirement and dynamic."
          </p>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center justify-center p-4 glass-card hover:border-primary/50 transition-all duration-300 hover:scale-110 cursor-default"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-3xl md:text-4xl mb-2 group-hover:scale-110 transition-transform">
                {tech.icon}
              </span>
              <span className="text-xs text-muted-foreground text-center group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-muted-foreground">
          ...and many more, tailored to your project's needs
        </p>
      </div>
    </section>
  );
};

export default TechStackSection;
