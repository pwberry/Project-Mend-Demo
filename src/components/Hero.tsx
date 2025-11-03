import { Button } from "@/components/ui/button";
import Slideshow from "./Slideshow";

const Hero = () => {
  return (
    <section className="w-full" style={{ maxHeight: "70vh" }}>
      <div className="grid md:grid-cols-2 h-full" style={{ minHeight: "500px", maxHeight: "70vh" }}>
        {/* Left: Text Content */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-12 md:py-0 bg-background">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Project Mend
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Project Mend is a platform for systems-impacted creators. It includes Mend, an annual 
              journal; a spoken word/podcast series; special issues; artist-writer collaborations; 
              and updates on news and events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg"
                className="bg-primary hover:bg-primary-light text-primary-foreground transition-all duration-300"
              >
                <a 
                  href="https://surface.syr.edu/mend/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Read the Journal
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <a 
                  href="https://project-mend.net/news.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  News & Events
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Right: Slideshow */}
        <div className="h-full min-h-[400px] md:min-h-0">
          <Slideshow />
        </div>
      </div>
    </section>
  );
};

export default Hero;
