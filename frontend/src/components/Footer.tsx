import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src={logoFull} 
                alt="Magizh Dental Care" 
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Quality Treatment with Dental Awareness. Serving Kottivakkam and Neelankarai with excellence.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/magizhdentalcare/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Dental Implants</li>
              <li className="text-sm text-muted-foreground">Orthodontics (Braces)</li>
              <li className="text-sm text-muted-foreground">Root Canal Treatment</li>
              <li className="text-sm text-muted-foreground">Cosmetic Dentistry</li>
              <li className="text-sm text-muted-foreground">Gum Treatment</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-foreground mb-2">Kottivakkam Branch</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      496, Ground Floor, Karpagambal Nagar 2nd St, Kottivakkam
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <a href="tel:+918667744342" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      +91 86677 44342
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground mb-2">Neelankarai Branch</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      1st Floor, 3/143 ECR, Opposite Sri Kapaleeswarar Nagar
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <a href="tel:+917010982997" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      +91 70109 82997
                    </a>
                  </li>
                </ul>
              </div>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:info@magizhdentalcare.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@magizhdentalcare.com
                </a>
              </li>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Magizh Dental Care. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
