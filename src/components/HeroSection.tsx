import steveJobs from "@/assets/steve-jobs.jpeg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Steve Jobs Image */}
          <div className="relative fade-in group">
            {/* Rotating shiny glow effects */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary via-transparent to-transparent blur-xl opacity-80 animate-[spin_8s_linear_infinite]" />
            <div className="absolute -inset-2 rounded-full bg-gradient-to-bl from-accent via-transparent to-transparent blur-xl opacity-80 animate-[spin_12s_linear_infinite_reverse]" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/50 via-primary to-primary/50 blur-lg opacity-50 animate-[spin_20s_linear_infinite]" />

            {/* Main glow layers */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-primary/10 rounded-full blur-3xl group-hover:blur-[80px] transition-all duration-500" />
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-full blur-3xl opacity-50" />

            {/* Shimmer overlay effect */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </div>

            <img
              src={steveJobs}
              alt="Steve Jobs"
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-primary/30 shadow-2xl shadow-primary/20 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-[1.02]"
            />
          </div>

          {/* Quote & Company Info */}
          <div className="text-center lg:text-left max-w-xl">
            <blockquote className="fade-in fade-in-delay-1">
              <span className="text-6xl text-primary/30 font-display leading-none">"</span>
              <p className="text-2xl md:text-3xl lg:text-4xl font-display text-foreground leading-relaxed -mt-8 ml-4">
                Think different from{" "}
                <span className="gradient-text">first principles</span>
              </p>
              <footer className="mt-6 text-muted-foreground text-lg">
                — Steve Jobs
              </footer>
            </blockquote>

            <div className="mt-12 fade-in fade-in-delay-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
                EE Info
              </h1>
              <p className="mt-3 text-xl text-primary font-medium tracking-widest uppercase">
                Next Gen Softwares
              </p>
            </div>

            <div className="mt-10 fade-in fade-in-delay-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105"
              >
                Let's Build Together
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
