const People = () => {
  const contributors = [
    {
      name: "John Doe",
      role: "Editor",
      bio: "Systems-impacted writer and editor passionate about creative expression and social justice.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Jane Smith",
      role: "Contributor",
      bio: "Artist and activist working to amplify marginalized voices through collaborative projects.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Michael Johnson",
      role: "Editor",
      bio: "Writer and community organizer dedicated to transformative justice initiatives.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    // Add more contributors as needed
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our People</h1>
          <p className="text-lg text-muted-foreground">
            Meet the editors, contributors, and community members who make Project Mend possible.
          </p>
        </div>

        {/* Filter options placeholder */}
        <div className="max-w-4xl mx-auto mb-8 flex gap-3 flex-wrap justify-center">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium">
            All
          </button>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
            Editors
          </button>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
            Contributors
          </button>
        </div>

        {/* Contributors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contributors.map((person, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-muted"
                />
                <h3 className="text-xl font-semibold text-foreground mb-1">{person.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{person.role}</p>
                <p className="text-muted-foreground text-sm">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default People;
