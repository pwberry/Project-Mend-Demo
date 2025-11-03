import syracuseLogo from "@/assets/footer/syracuse.png";
import humanitiesNyLogo from "@/assets/footer/humanities_ny.png";
import ccaLogo from "@/assets/footer/cca.png";
import pinwheelLogo from "@/assets/footer/pinwheel.png";
import { Facebook, Instagram } from "lucide-react";

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
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Project Mend. All rights reserved.</p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a 
              href="mailto:contact@project-mend.net" 
              className="hover:text-primary transition-colors"
              aria-label="Email us"
            >
              contact@project-mend.net
            </a>
            
            <div className="flex items-center gap-4">
              <span className="text-xs uppercase tracking-wider">Connect</span>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=100089772678410"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/mend_syracuse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
