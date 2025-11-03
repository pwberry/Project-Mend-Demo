import { Button } from "@/components/ui/button";
import { FileText, Image, Music, Video } from "lucide-react";

const Submit = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Submit Your Work
          </h1>
          <p className="text-lg text-muted-foreground mb-12 text-center">
            We welcome creative submissions from systems-impacted individuals. Share your voice 
            and join our community of artists, writers, and storytellers.
          </p>

          {/* Guidelines */}
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Submission Guidelines</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3 flex items-center gap-2">
                  <FileText className="text-primary" size={20} />
                  Accepted Formats
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-7">
                  <li>Written work: poetry, essays, short stories, memoir (Word, PDF, or plain text)</li>
                  <li>Visual art: drawings, paintings, photography (JPEG, PNG, or high-res PDF)</li>
                  <li>Audio: spoken word, music, podcasts (MP3, WAV)</li>
                  <li>Video: short films, animations, documentaries (MP4, MOV)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">Review Process</h3>
                <p className="text-muted-foreground">
                  Our editorial team reviews all submissions on a rolling basis. You can expect 
                  to hear back within 8-12 weeks. We carefully consider each piece and provide 
                  feedback when possible.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">What We're Looking For</h3>
                <p className="text-muted-foreground">
                  We seek authentic voices and creative work that reflects the experiences of 
                  systems-impacted individuals. We value pieces that challenge, inspire, heal, 
                  and connect communities.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-light text-primary-foreground transition-all duration-300"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                Submit Your Work
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Questions? Email us at <a href="mailto:submissions@project-mend.net" className="text-primary hover:underline">submissions@project-mend.net</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submit;
