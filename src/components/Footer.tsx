const Footer = () => {
  return (
    <footer className="bg-muted mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Project Mend. All rights reserved.</p>
          <div className="flex gap-6">
            <a 
              href="mailto:contact@project-mend.net" 
              className="hover:text-primary transition-colors"
              aria-label="Email us"
            >
              contact@project-mend.net
            </a>
            {/* Social links placeholders */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
