import syracuseLogo from "@/assets/footer/syracuse.png";
import humanitiesNyLogo from "@/assets/footer/humanities_ny.png";
import ccaLogo from "@/assets/footer/cca.png";
import pinwheelLogo from "@/assets/footer/pinwheel.png";

const Footer = () => {
  return (
    <footer className="bg-muted mt-auto">
      <div className="container mx-auto px-4 py-8">
        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
          <img 
            src={syracuseLogo} 
            alt="Syracuse University" 
            className="h-16 w-auto object-contain"
          />
          <img 
            src={humanitiesNyLogo} 
            alt="Humanities New York" 
            className="h-16 w-auto object-contain"
          />
          <img 
            src={ccaLogo} 
            alt="Center for Community Alternatives" 
            className="h-16 w-auto object-contain"
          />
          <img 
            src={pinwheelLogo} 
            alt="Partner Logo" 
            className="h-16 w-auto object-contain"
          />
        </div>
        
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
