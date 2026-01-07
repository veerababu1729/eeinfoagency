import nodeLogo from "@/assets/nodejs.jpg";
import expressLogo from "@/assets/expresslogo.png";
import pythonLogo from "@/assets/python.png";
import javaLogo from "@/assets/java.png";
import gitLogo from "@/assets/git logo.png";
import githubLogo from "@/assets/github.png";
import vercelLogo from "@/assets/vercel.png";
import awsLogo from "@/assets/aws.png";
import typescriptLogo from "@/assets/typescript.png";
import nextjsLogo from "@/assets/nextjs.jpg";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢", image: nodeLogo },
  { name: "MongoDB", icon: "🍃" },
  { name: "Express", icon: "🚂", image: expressLogo },
  { name: "Python", icon: "🐍", image: pythonLogo },
  { name: "Java", icon: "☕", image: javaLogo },
  { name: "Git", icon: "📦", image: gitLogo },
  { name: "GitHub", icon: "🐙", image: githubLogo },
  { name: "Vercel", icon: "▲", image: vercelLogo },
  { name: "TypeScript", icon: "💙", image: typescriptLogo },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️", image: awsLogo },
  { name: "Tailwind", icon: "🎨" },
  { name: "Next.js", icon: "⬛", image: nextjsLogo },
  { name: "Firebase", icon: "🔥" },
];

const TechStackSection = () => {
  return (
    <section id="tech" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 italic">
            "It is a matter of requirement and dynamic."
          </p>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center justify-center p-4 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:scale-110 cursor-default rounded-2xl"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="h-10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                {tech.image ? (
                  <img src={tech.image} alt={tech.name} className="h-full w-auto object-contain" />
                ) : (
                  <span className="text-3xl md:text-4xl">{tech.icon}</span>
                )}
              </div>
              <span className="text-xs text-gray-600 text-center group-hover:text-gray-900 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-gray-600">
          ...and many more, tailored to your project's needs
        </p>
      </div>
    </section>
  );
};

export default TechStackSection;
