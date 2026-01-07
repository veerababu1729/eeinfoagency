import { ExternalLink, TrendingUp, Eye, ShoppingCart } from "lucide-react";

const projects = [
  {
    title: "telugumemes.com",
    description: "Meme video sharing platform",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    impacts: [
      { icon: TrendingUp, label: "SEO Optimized" },
      { icon: Eye, label: "100% Responsive" },
      { icon: Eye, label: "50,000+ Visitors" },
    ],
    features: ["Aesthetic and interactive UI", "Video sharing capabilities", "Social engagement features"],
  },
  {
    title: "memecode.in",
    description: "eBook selling eCommerce site",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=600&fit=crop",
    impacts: [
      { icon: TrendingUp, label: "10% Conversion Rate" },
      { icon: ShoppingCart, label: "1,200+ Sales" },
      { icon: Eye, label: "Creative UI/UX" },
    ],
    features: ["Sales-driven architecture", "Psychological design principles", "Never-seen-before creative experience"],
  },
];

const PortfolioSection = () => {
  return (
    <section id="works" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
            Our Best <span className="gradient-text">Works</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Projects that speak for themselves
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-12 items-center`}
            >
              {/* Device Mockup */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Device frame */}
                  <div className="relative glass-card p-3 rounded-2xl">
                    <div className="flex items-center gap-2 mb-3 px-2">
                      <div className="w-3 h-3 rounded-full bg-destructive/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                      <span className="ml-4 text-xs text-muted-foreground">{project.title}</span>
                    </div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-80 object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground" />
                </div>

                <p className="text-lg text-muted-foreground">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                    Impact
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.impacts.map((impact) => (
                      <div
                        key={impact.label}
                        className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full"
                      >
                        <impact.icon className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground">{impact.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
