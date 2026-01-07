import { Star, Linkedin } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Founder, TechVentures",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "EE Info transformed our vision into reality. Their attention to detail and commitment to quality is unmatched. The conversion rate optimization they delivered exceeded all expectations.",
    rating: 5,
    linkedin: "https://linkedin.com",
  },
  {
    name: "Priya Sharma",
    role: "CEO, Digital Solutions",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content: "Working with EE Info was a game-changer. They don't just build websites; they create experiences that convert. Our sales increased by 40% after the redesign.",
    rating: 5,
    linkedin: "https://linkedin.com",
  },
  {
    name: "Amit Patel",
    role: "Marketing Director, GrowthCo",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "The team at EE Info understands the psychology of design. They delivered a platform that not only looks stunning but drives real business results. Highly recommended!",
    rating: 5,
    linkedin: "https://linkedin.com",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            What our clients say about us
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card p-8 flex flex-col hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed flex-grow mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-border"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <a
                  href={testimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
                  aria-label={`View ${testimonial.name}'s LinkedIn profile`}
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
