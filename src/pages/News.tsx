import { Calendar, ExternalLink } from "lucide-react";

interface NewsItem {
  title: string;
  date: string;
  excerpt: string;
  link?: string;
  external?: boolean;
}

const News = () => {
  const newsItems: NewsItem[] = [
    {
      title: "New Issue of Mend Released",
      date: "November 15, 2024",
      excerpt: "We're thrilled to announce the release of our latest issue, featuring powerful works from 25 systems-impacted creators.",
      link: "https://surface.syr.edu/mend/",
      external: true,
    },
    {
      title: "Community Reading Event",
      date: "October 28, 2024",
      excerpt: "Join us for an evening of readings from Mend contributors, followed by a panel discussion on art and justice.",
      link: "https://project-mend.net/news.html",
      external: true,
    },
    {
      title: "Podcast Series Launch",
      date: "September 10, 2024",
      excerpt: "Coming soon: The Project Mend Podcast, where editors and contributors discuss themes from our archive.",
    },
    {
      title: "Workshop Series: Creative Writing in the Justice System",
      date: "August 5, 2024",
      excerpt: "Our team facilitated a month-long creative writing workshop series at local correctional facilities.",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            News & Events
          </h1>
          <p className="text-lg text-muted-foreground mb-12 text-center">
            Stay updated on Project Mend announcements, events, and community happenings
          </p>

          {/* News Items */}
          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <article
                key={index}
                className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Calendar className="text-primary" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h2 className="text-xl font-semibold text-foreground">{item.title}</h2>
                      {item.link && item.external && (
                        <ExternalLink className="text-muted-foreground flex-shrink-0" size={18} />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{item.date}</p>
                    <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="text-primary hover:text-primary-light font-medium inline-flex items-center gap-1 transition-colors"
                      >
                        Read more
                        {item.external && <ExternalLink size={14} />}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* External Link CTA */}
          <div className="mt-12 text-center p-8 bg-muted rounded-lg">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Looking for more updates?
            </h3>
            <p className="text-muted-foreground mb-4">
              Visit our full news archive for additional announcements and event details
            </p>
            <a
              href="https://project-mend.net/news.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-medium transition-colors"
            >
              View Full Archive
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
