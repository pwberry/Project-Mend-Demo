import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import render from "@/assets/cards/render.png";
import journalImage from "@/assets/cards/journal_placeholder.jpg";
import podcastImage from "@/assets/cards/podcast_placeholder.jpg";
import newsImage from "@/assets/cards/news_placeholder.jpg";

const About = () => {
  // Prison and Time image will be provided by user
  const prisonAndTime = "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&h=600&fit=crop";

  return (
    <>
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Row 1: 3 cards */}
            <FeatureCard
              title="Mend, the journal"
              description="Mend is an annual publication celebrating the lives and creative work of systems-impacted people."
              image={journalImage}
              imageAlt="Stack of Mend journals"
              link="https://surface.syr.edu/mend/"
              external
            />
            
            <FeatureCard
              title="Project Mend Spoken Word/Podcast Series"
              description="In the Project Mend spoken word/podcast, our editors reflect on themes that appear in our archive."
              image={podcastImage}
              imageAlt="Podcast recording setup"
              comingSoon
            />
            
            <FeatureCard
              title="Special Issue: render"
              description="render, created by Writing and Rhetoric graduate Katherine Nikolau, celebrates the creative work and activism of nine justice-impacted artists, considering how composing can be healing after incarceration."
              image={render}
              imageAlt="Cover of render special issue"
              link="https://surface.syr.edu/mendbooks/1/"
              external
            />

            {/* Row 2: 2 cards */}
            <FeatureCard
              title="Artist-Writer Collaborations: Prison and Time"
              description="In 'Prison and Time,' Mend writer Marvin Wade and Evan Bode, an award-winning experimental animator, collaborate on a powerful film."
              image={prisonAndTime}
              imageAlt="Prison and Time film still"
              link="https://vimeo.com/1124375859/d7a60f58dc?share=copy"
              external
            />
            
            <FeatureCard
              title="News and Events"
              description="Find out about upcoming news and events."
              image={newsImage}
              imageAlt="Community gathering at event"
              link="https://project-mend.net/news.html"
              external
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
