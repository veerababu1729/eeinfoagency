import { Star } from "lucide-react";
import userAvatar from "@/assets/user-avatar.png";
import linkedinLogo from "@/assets/linkedinlogo.png";

const testimonials = [
  {
    name: "Arun Kumar R",
    role: "Telugumemes cofounder",
    content: "EE Info transformed our vision into reality. Their attention to detail and commitment to quality is unmatched. The conversion rate optimization they delivered exceeded all expectations.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/arun-kumar-rayudu-17311621b/",
  },
  {
    name: "Salmon Kaliboina",
    role: "Memecode.in founder",
    content: "Working with EE Info was a game-changer. They don't just build websites; they create experiences that convert. Our sales increased by 40% after the redesign.",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/ksb9100733887/",
  },
  {
    name: "Priya Sharma",
    role: "Interior designer",
    content: "The team at EE Info understands the psychology of design. They delivered a platform that not only looks stunning but drives real business results. Highly recommended!",
    rating: 5,
    linkedin: "https://linkedin.com/",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            What our clients say about us
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 p-8 flex flex-col hover:border-primary/50 hover:shadow-lg transition-all duration-300 rounded-2xl"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed flex-grow mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={userAvatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-border"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                {testimonial.linkedin && (
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 hover:bg-primary/20 transition-colors"
                    aria-label={`View ${testimonial.name}'s LinkedIn profile`}
                  >
                    <img
                      src={linkedinLogo}
                      alt="LinkedIn"
                      className="w-5 h-5"
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
