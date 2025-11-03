import { Button } from "@/components/ui/button";
import { Users, Edit, Calendar, MessageSquare, Heart } from "lucide-react";

const Join = () => {
  const responsibilities = [
    {
      icon: Edit,
      title: "Review Submissions",
      description: "Read and provide thoughtful feedback on creative work submitted to Mend",
    },
    {
      icon: MessageSquare,
      title: "Collaborate",
      description: "Work with other editors and contributors to shape each issue",
    },
    {
      icon: Calendar,
      title: "Attend Meetings",
      description: "Participate in monthly editorial meetings and planning sessions",
    },
    {
      icon: Users,
      title: "Build Community",
      description: "Help create an inclusive, supportive space for systems-impacted creators",
    },
    {
      icon: Heart,
      title: "Advocate",
      description: "Champion the voices and stories of justice-impacted individuals",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Join Our Editorial Team
            </h1>
            <p className="text-xl text-muted-foreground">
              Help us amplify the voices of systems-impacted creators and build a platform 
              for transformative storytelling.
            </p>
          </div>

          {/* Why Join */}
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Why Join Project Mend?</h2>
            <p className="text-muted-foreground mb-6">
              As an editorial team member, you'll play a vital role in shaping Mend and supporting 
              systems-impacted creators. This is an opportunity to contribute to meaningful work, 
              develop your editorial skills, and be part of a community committed to social justice 
              through creative expression.
            </p>
          </div>

          {/* Responsibilities */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
              What You'll Do
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {responsibilities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">What We're Looking For</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Commitment to social justice and supporting systems-impacted individuals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Strong reading and editorial skills with attention to detail</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Ability to provide constructive, respectful feedback</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Availability for monthly meetings and ongoing editorial work</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Collaborative spirit and openness to diverse perspectives</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-light text-primary-foreground transition-all duration-300"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                Apply to Join Our Team
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Questions? Reach out at{" "}
              <a href="mailto:editorial@project-mend.net" className="text-primary hover:underline">
                editorial@project-mend.net
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
