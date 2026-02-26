import { Smile, Activity, Heart, Shield, Sparkles, Users, Scissors, Wrench } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Smile,
      title: "Orthodontics (Braces)",
      description: "Transform your smile with our comprehensive orthodontic solutions. We offer traditional metal braces, ceramic braces, and invisible aligners. Our experienced orthodontists create personalized treatment plans for children, teens, and adults to achieve perfect teeth alignment.",
    },
    {
      icon: Activity,
      title: "Dental Implants",
      description: "Replace missing teeth with permanent, natural-looking dental implants. Using titanium posts and custom crowns, we restore both function and aesthetics. Our implants have a 98% success rate and can last a lifetime with proper care.",
    },
    {
      icon: Heart,
      title: "Gum Treatment (Periodontics)",
      description: "Comprehensive periodontal care to treat gum disease and maintain healthy gums. From deep cleaning to surgical procedures, we use advanced techniques to save teeth and restore gum health. Early treatment prevents tooth loss.",
    },
    {
      icon: Shield,
      title: "Root Canal Treatment",
      description: "Pain-free root canal therapy using rotary endodontics and digital imaging. We save infected teeth while ensuring maximum comfort. Single-visit procedures available for most cases with guaranteed success rates.",
    },
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry & Smile Correction",
      description: "Achieve your dream smile with veneers, teeth whitening, bonding, and complete smile makeovers. Our cosmetic dentists combine artistry with science to create beautiful, natural-looking results that boost your confidence.",
    },
    {
      icon: Wrench,
      title: "Prosthodontics",
      description: "Expert restoration of damaged or missing teeth with crowns, bridges, and dentures. We use high-quality materials and advanced CAD/CAM technology for precise, durable, and aesthetically pleasing restorations.",
    },
    {
      icon: Scissors,
      title: "Tooth Extraction",
      description: "Gentle, painless tooth extractions including wisdom teeth removal. We use modern anesthesia and surgical techniques to ensure comfort. Same-day replacement options available with dental implants.",
    },
    {
      icon: Users,
      title: "Preventive Care & Hygiene",
      description: "Regular dental check-ups, professional cleaning (scaling), and fluoride treatments. Our dental hygienists provide education on proper brushing, flossing, and diet to prevent cavities and gum disease.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive Dental Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From routine check-ups to advanced procedures, we offer complete dental care under one roof
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              State-of-the-Art Technology
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We invest in the latest dental technology for precise diagnosis and comfortable treatment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Digital X-Rays</h3>
              <p className="text-sm text-muted-foreground">
                90% less radiation, instant results, and clearer images for accurate diagnosis
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Laser Dentistry</h3>
              <p className="text-sm text-muted-foreground">
                Minimally invasive procedures with faster healing and less discomfort
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">3D Imaging</h3>
              <p className="text-sm text-muted-foreground">
                Patnered with labs for Comprehensive 3D scans for precise implant placement and orthodontic planning
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Digital Records</h3>
              <p className="text-sm text-muted-foreground">
                Secure, paperless system for easy access to your complete dental history
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Sedation Options</h3>
              <p className="text-sm text-muted-foreground">
                Multiple sedation choices for anxiety-free dental experiences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Schedule a consultation and our experts will recommend the best treatment plan for you
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="xl" className="bg-background text-foreground hover:bg-background/90">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
