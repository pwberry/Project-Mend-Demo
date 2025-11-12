import { useState } from "react";
import { Calendar, ExternalLink, Instagram } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useToast } from "@/hooks/use-toast";
import launchPartyImage from "@/assets/news/launch_party_2025.png";
import alexAndersonImage from "@/assets/news/alex_anderson.png";
import mendTeamImage from "@/assets/news/mend_team_2024.jpg";
import unitedWeEndRacismImage from "@/assets/news/united_we_end_racism.jpg";

interface Article {
  id: string;
  title: string;
  date: string;
  category: "Featured" | "Client Stories" | "In The Media" | "Our News";
  excerpt: string;
  content: string;
  image?: string;
  slug: string;
  featured: boolean;
}

const articles: Article[] = [
  {
    id: "1",
    title: "Celebrating the 2025 Issue of Mend",
    date: "February 15, 2025",
    category: "Featured",
    excerpt: "It's hard to believe that we have completed the third issue of Mend, a publication showcasing the writing and art of those impacted by the criminal legal system.",
    content: `It's hard to believe that we have completed the third issue of Mend, a publication showcasing the writing and art of those impacted by the criminal legal system.

Our launch party will be a hybrid event, where we will celebrate the 2025 issue of Mend and render, a new publication exploring the lives and creative works of impacted artists produced by Katherine Nikolau, a Writing and Rhetoric major who graduated in December through a SOURCE research grant.

**Date:** Saturday, February 15
**Time:** 12:00 p.m. - 1:30 p.m. ET
**Location:** Syracuse Central Library, Community Room, 447 S. Salina St., Syracuse, NY 13202 and via Zoom

This event will include a light lunch.

Project Mend is made possible through collaboration with the Center for Community Alternatives and through an HNY Post-Incarceration Humanities Partnership, which is generously supported by the Mellon Foundation. Additionally, the project has been supported at Syracuse University by: Engaged Humanities Network, The Humanities Center, SOURCE, Syracuse University Libraries, and the Department of Writing Studies, Rhetoric, and Composition.

For accommodations or more information: Contact Patrick W. Berry at pwberry@syr.edu by February 11.`,
    slug: "celebrating-2025-issue-mend",
    featured: true,
    image: launchPartyImage
  },
  {
    id: "2",
    title: "HNY Post-Incarceration Humanities Partnership Convening",
    date: "May 21, 2024",
    category: "Our News",
    excerpt: "Humanities New York hosted an in-person convening for our Post-Incarceration Humanities Partnership (PIHP) grant cohort members.",
    content: "On May 21, 2024, Humanities New York hosted an in-person convening for our Post-Incarceration Humanities Partnership (PIHP) grant cohort members, bringing together organizations working to support returning citizens through humanities programming.",
    slug: "hny-pihp-convening",
    featured: false,
  },
  {
    id: "3",
    title: "Alex Anderson Visit: Reentry Theater of Harlem",
    date: "September 19, 2024",
    category: "Our News",
    excerpt: "Delighted to have Alex Anderson from Reentry Theater of Harlem join us on Thursday, September 19.",
    content: `Alex Anderson, Art Director of Reentry Theater of Harlem (RTH), presents a screening of a powerful rite of passage ceremony involving returning citizens. Participants will learn how RTH utilizes the arts, rituals and rites of passage to foster true reintegration and disrupt the carceral practices that perpetuate recidivism.

**Public Talk: "Reentry Theater of Harlem: A Homecoming Rite of Passage Program"**
- Thursday, September 19
- 12:30-1:50 PM
- 500 Hall of Languages & via Zoom

**RSVP Stigma-Mask Making Workshop**
In this workshop, Alex Anderson presents a short film on the process of creating a stigma mask. Participants will create their own masks and have the opportunity to compose an accompanying poem or monologue.
- Thursday, September 19
- 6-7:30 PM
- Schine 228

**About Alex Anderson**
Alex Anderson is the founder and executive director of Reentry Theater of Harlem (RTH). Alex, a returning citizen himself, earned a Bachelor of Arts degree from Syracuse University while incarcerated at Auburn Correctional Facility. Upon his release, he obtained a Social Work degree from the Silberman Graduate School of Social Work at Hunter College, alongside certifications in mental health, substance use counseling (CASAC) and restorative justice. Inspired by his own transformative journey, Alex channeled his love for his community and the arts into creating RTH, where the arts and lived experience serve as a catalyst for healing and transformation.

Cosponsors: Writing Studies, Rhetoric, and Composition, Project Mend, the Engaged Humanities Network, and the Syracuse University Humanities Center. Project Mend is made possible through collaboration with the Center for Community Alternatives and from an HNY Post-Incarceration Humanities Partnership, which is generously supported by the Mellon Foundation.`,
    slug: "alex-anderson-visit",
    featured: true,
    image: alexAndersonImage
  },
  {
    id: "4",
    title: "Congratulations to Mend Editor Ilhy Gomez",
    date: "May 2024",
    category: "Client Stories",
    excerpt: "Celebrating the achievements of our dedicated Mend editorial team member.",
    content: "Congratulations to Mend editor Ilhy Gomez Del Campo Rojas for their outstanding contributions to the 2024 issue and continued dedication to amplifying the voices of those impacted by the criminal legal system.",
    slug: "congratulations-ilhy-gomez",
    featured: false,
    image: mendTeamImage
  },
  {
    id: "5",
    title: "United We End Racism Community Festival",
    date: "June 8, 2024",
    category: "Our News",
    excerpt: "On June 8th, 2024, Project Mend had the great opportunity of participating in the community festival United We End Racism.",
    content: `On June 8th, 2024, Project Mend had the great opportunity of participating in the community festival United We End Racism, presented by Syracuse University and El-Hindi Center for Dialogue and Action.

**24th Annual Racial Justice Awards & Duck Race to End Racism**

The event featured:
- Family activities and games
- Decorated duck contests
- Performance stage
- Booths - food and youth focus
- STEM Fair | SU Engineering
- Food vendors
- Fun run
- And more!

**Date:** Saturday, June 8th, 10am-2pm
**Location:** Syracuse Inner Harbor`,
    slug: "united-we-end-racism-festival",
    featured: false,
    image: unitedWeEndRacismImage
  },
];

const ITEMS_PER_PAGE = 6;

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const featuredArticles = articles.filter(article => article.featured);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    // TODO: Implement newsletter signup
    toast({
      title: "Success!",
      description: "You've been added to our mailing list.",
    });
    setName("");
    setEmail("");
  };

  const getCategoryColor = (category: Article["category"]) => {
    switch (category) {
      case "Featured":
        return "default";
      case "Client Stories":
        return "secondary";
      case "In The Media":
        return "outline";
      case "Our News":
        return "outline";
      default:
        return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              News & Events
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Stay updated on Project Mend announcements, events, and community happenings
            </p>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("https://www.instagram.com/projectmend/", "_blank")}
              className="gap-2"
            >
              <Instagram size={20} />
              Follow us on Instagram
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Featured Articles Section - Grid Layout */}
          {featuredArticles.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8">Featured Stories</h2>
              <div className="space-y-12">
                {featuredArticles.map((article, index) => (
                  <article
                    key={article.id}
                    className={`grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-6 border-b border-border pb-12 last:border-0 ${
                      index % 2 === 1 ? "lg:grid-cols-[1fr,300px]" : ""
                    }`}
                  >
                    {article.image && (
                      <div className={`overflow-hidden rounded-lg h-[300px] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant={getCategoryColor(article.category)}>
                          {article.category}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar size={14} />
                          <time dateTime={article.date}>{article.date}</time>
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {article.title}
                      </h3>
                      <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {article.content}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Category Tabs */}
          <Tabs defaultValue="All" className="mb-12" onValueChange={setSelectedCategory}>
            <TabsList className="w-full justify-start overflow-x-auto">
              <TabsTrigger value="All">All</TabsTrigger>
              <TabsTrigger value="Featured">Featured</TabsTrigger>
              <TabsTrigger value="Client Stories">Client Stories</TabsTrigger>
              <TabsTrigger value="In The Media">In The Media</TabsTrigger>
              <TabsTrigger value="Our News">Our News</TabsTrigger>
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-8">
              {/* Articles Grid */}
              {paginatedArticles.length > 0 ? (
                <>
                  <div className="space-y-12 mb-12">
                    {paginatedArticles.map((article, index) => (
                      <article
                        key={article.id}
                        className={`grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-6 border-b border-border pb-12 last:border-0 ${
                          index % 2 === 1 ? "lg:grid-cols-[1fr,300px]" : ""
                        }`}
                      >
                        {article.image ? (
                          <div className={`overflow-hidden rounded-lg h-[300px] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                            <img
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className={`bg-muted rounded-lg h-[300px] flex items-center justify-center ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                            <p className="text-muted-foreground text-sm">No image</p>
                          </div>
                        )}
                        <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                          <div className="flex items-center gap-3 mb-3">
                            <Badge variant={getCategoryColor(article.category)}>
                              {article.category}
                            </Badge>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar size={14} />
                              <time dateTime={article.date}>{article.date}</time>
                            </div>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                            {article.title}
                          </h3>
                          <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                            {article.content}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No articles found in this category.</p>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => setCurrentPage(page)}
                          isActive={currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </TabsContent>
          </Tabs>

          {/* Newsletter Signup */}
          <section className="mt-16 bg-muted/50 rounded-lg p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Stay Connected
              </h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to our mailing list to receive the latest news, events, and updates from Project Mend.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-left">
                    <Label htmlFor="newsletter-name" className="mb-2 block">
                      Name
                    </Label>
                    <Input
                      id="newsletter-name"
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="text-left">
                    <Label htmlFor="newsletter-email" className="mb-2 block">
                      Email
                    </Label>
                    <Input
                      id="newsletter-email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Subscribe to Newsletter
                </Button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default News;
