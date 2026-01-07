import { Shield, Zap, Award } from "lucide-react";

const values = [
  {
    letter: "T",
    title: "Trust",
    description: "We build relationships, not just products. Your vision is our commitment.",
    icon: Shield,
  },
  {
    letter: "S",
    title: "Speed",
    description: "Rapid delivery without compromise. From concept to launch, faster than ever.",
    icon: Zap,
  },
  {
    letter: "Q",
    title: "Quality",
    description: "Excellence in every pixel. Premium standards that exceed expectations.",
    icon: Award,
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900">
            Why <span className="gradient-text">Only Us</span>?
          </h2>
          <p className="mt-4 text-lg text-gray-600">TSQ — The pillars of our excellence</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.letter}
              className="group bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 p-8 text-center hover:border-primary/50 hover:shadow-lg transition-all duration-500 hover:scale-105 rounded-2xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                <span className="absolute text-7xl font-display font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {value.letter}
                </span>
                <value.icon className="relative w-10 h-10 text-primary" />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {value.title}
              </h3>

              <p className="text-gray-700 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-900 font-display italic leading-relaxed max-w-3xl mx-auto">
            "We don't build softwares, we build{" "}
            <span className="gradient-text font-semibold">systems that drive conversions</span>."
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
