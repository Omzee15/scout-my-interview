import iconPersonalized from "@/assets/icon-personalized.png";
import iconCoding from "@/assets/icon-coding.png";
import iconVoice from "@/assets/icon-voice.png";
import iconInsights from "@/assets/icon-insights.png";

const Features = () => {
  const features = [
    {
      icon: iconPersonalized,
      title: "Personalized Questions",
      description: "AI analyzes your resume and experience to create tailored interview questions that match real job requirements."
    },
    {
      icon: iconCoding,
      title: "Real-time Coding",
      description: "Practice coding challenges with instant feedback, syntax highlighting, and performance analysis just like technical interviews."
    },
    {
      icon: iconVoice,
      title: "Voice Interaction",
      description: "Speak naturally with our AI interviewer using advanced voice recognition for authentic interview practice."
    },
    {
      icon: iconInsights,
      title: "Performance Insights",
      description: "Get detailed analytics on your communication skills, technical knowledge, and areas for improvement after each session."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium">
            ✨ Powerful Features
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Everything You Need to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Ace Your Interview
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered platform provides comprehensive interview training with personalized feedback and real-world scenarios.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Ready to get started?</span>
            <a 
              href="#cta" 
              className="text-primary hover:text-primary-dark font-medium transition-colors"
            >
              Try it free →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;