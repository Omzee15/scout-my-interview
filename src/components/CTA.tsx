import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section id="cta" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-primary/95"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm text-white font-medium backdrop-blur-sm">
              <Sparkles className="mr-2 w-4 h-4" />
              Start Your Journey Today
            </div>
            
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Ready to Land Your{" "}
              <span className="text-white/90">Dream Job?</span>
            </h2>
            
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Join thousands of professionals who have successfully improved their interview skills and landed their ideal positions with HireScout.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 py-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white">10,000+</div>
              <div className="text-white/70">Successful Interviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white">85%</div>
              <div className="text-white/70">Job Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white">4.9★</div>
              <div className="text-white/70">User Rating</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/prep">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold group shadow-lg"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/demo">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm"
              >
                Watch Demo
              </Button>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="pt-8 text-white/60 text-sm">
            No credit card required • 7-day free trial • Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;