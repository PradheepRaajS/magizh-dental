import { Link } from "react-router-dom";
import { Calendar, Award, Users, Heart, Smile, Shield, Activity, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import heroImage from "@/assets/hero-dental.jpg";

const Index = () => {
  const services = [
    {
      icon: Smile,
      title: "Orthodontics (Braces)",
      description: "Transform your smile with modern braces and invisible aligners. We offer personalized treatment plans for all ages.",
    },
    {
      icon: Activity,
      title: "Dental Implants",
      description: "Restore missing teeth with our world-class implant technology. Permanent, natural-looking solutions.",
    },
    {
      icon: Heart,
      title: "Gum Treatment",
      description: "Expert periodontal care to treat gum disease and maintain healthy gums for a lifetime.",
    },
    {
      icon: Shield,
      title: "Root Canal Treatment",
      description: "Pain-free root canal procedures using advanced technology and gentle techniques.",
    },
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description: "Achieve your perfect smile with veneers, whitening, and smile makeovers.",
    },
    {
      icon: Users,
      title: "Preventive Care",
      description: "Regular check-ups, scaling, and hygiene services to keep your teeth healthy.",
    },
  ];

  const testimonials = [
    {
      name: "Lalitha Lali",
      location: "Kottivakkam, Chennai",
      rating: 5,
      text: "Good and satisfactory treatment and friendly behaviour of staffs and doctors",
    },
    {
      name: "Saravanan",
      location: "Neelankarai, Chennai",
      rating: 5,
      text: "Doctor are very kind and good treatment Clear explanation",
    },
    {
      name: "Mohan P.",
      location: "Kottivakkam, Chennai",
      rating: 5,
      text: "Excellent service This was my first visit, Had a great experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Modern dental clinic reception"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Magizh Dental Care
              <span className="block text-primary">Quality Treatment with Dental Awareness</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Renowned dental care in Kottivakkam & Neelankarai. Rated 4.9★ with 600+ happy patients across Chennai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.9★</div>
              <div className="text-sm text-muted-foreground">Google Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">600+</div>
              <div className="text-sm text-muted-foreground">Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2</div>
              <div className="text-sm text-muted-foreground">Convenient Locations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">7+</div>
              <div className="text-sm text-muted-foreground">Dental Services</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our World-Class Dental Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive dental care using the latest technology and techniques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="default" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Patients Trust Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of patient-first dental care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Expert Team</h3>
              <p className="text-muted-foreground">
                Highly qualified dentists with international training and decades of experience
              </p>
            </div>
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Advanced Technology</h3>
              <p className="text-muted-foreground">
                State-of-the-art equipment and digital systems for precise, comfortable treatment
              </p>
            </div>
            <div className="text-center p-6">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Patient Care</h3>
              <p className="text-muted-foreground">
                Gentle, personalized care in a clean, comfortable environment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from our valued patients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Schedule your appointment today and experience world-class dental care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="xl" className="bg-background text-foreground hover:bg-background/90">
                <Calendar className="mr-2 h-5 w-5" />
                Book Online
              </Button>
            </Link>
            <a href="tel:+919876543210">
              <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Call +91 98765 43210
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
