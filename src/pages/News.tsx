import { useState } from "react";
import { Calendar, Search } from "lucide-react";
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

// TODO: Replace this with actual articles from the legacy news page
const articles: Article[] = [
  {
    id: "1",
    title: "New Issue of Mend Released",
    date: "November 15, 2024",
    category: "Featured",
    excerpt: "We're thrilled to announce the release of our latest issue, featuring powerful works from 25 systems-impacted creators.",
    content: "Full article content here...",
    slug: "new-issue-mend-released",
    featured: true,
    image: "/placeholder.svg"
  },
  {
    id: "2",
    title: "Community Reading Event",
    date: "October 28, 2024",
    category: "Our News",
    excerpt: "Join us for an evening of readings from Mend contributors, followed by a panel discussion on art and justice.",
    content: "Full article content here...",
    slug: "community-reading-event",
    featured: false,
  },
  {
    id: "3",
    title: "Podcast Series Launch",
    date: "September 10, 2024",
    category: "Featured",
    excerpt: "Coming soon: The Project Mend Podcast, where editors and contributors discuss themes from our archive.",
    content: "Full article content here...",
    slug: "podcast-series-launch",
    featured: true,
  },
  {
    id: "4",
    title: "Workshop Series: Creative Writing in the Justice System",
    date: "August 5, 2024",
    category: "Client Stories",
    excerpt: "Our team facilitated a month-long creative writing workshop series at local correctional facilities.",
    content: "Full article content here...",
    slug: "workshop-series-creative-writing",
    featured: false,
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
            <p className="text-lg text-muted-foreground">
              Stay updated on Project Mend announcements, events, and community happenings
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Featured Articles Section */}
          {featuredArticles.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8">Featured</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredArticles.slice(0, 2).map((article) => (
                  <article
                    key={article.id}
                    className="group bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30"
                  >
                    {article.image && (
                      <div className="aspect-video overflow-hidden bg-muted">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant={getCategoryColor(article.category)}>
                          {article.category}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar size={14} />
                          <time dateTime={article.date}>{article.date}</time>
                        </div>
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                      <Button variant="link" className="p-0 h-auto">
                        Read more →
                      </Button>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {paginatedArticles.map((article) => (
                  <article
                    key={article.id}
                    className="group bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30"
                  >
                    {article.image && (
                      <div className="aspect-video overflow-hidden bg-muted">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant={getCategoryColor(article.category)} className="text-xs">
                          {article.category}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar size={12} />
                        <time dateTime={article.date}>{article.date}</time>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <Button variant="link" className="p-0 h-auto text-sm">
                        Read more →
                      </Button>
                    </div>
                  </article>
                ))}
              </div>

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
