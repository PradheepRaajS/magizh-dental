import { Award, Heart, Users, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import clinicRoom from "@/assets/clinic-room.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Magizh Dental Care</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quality dental treatment with awareness, serving Kottivakkam and Neelankarai with excellence
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1974 by Dr. Rajendran Kumar, Chennai Dental Clinic began with a simple mission: to provide world-class dental care with compassion and integrity. What started as a small practice in T Nagar has grown into one of Chennai's most trusted multispecialty dental centers.
                </p>
                <p>
                  Over the past 50 years, we have treated more than 50,000 patients from across India and around the world. Our commitment to excellence has earned us recognition as a leader in dental innovation and patient care.
                </p>
                <p>
                  Today, our clinic combines cutting-edge technology with time-tested expertise. We have invested in the latest dental equipment, digital record systems, and continue to train our team in the most advanced techniques available globally.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={clinicRoom}
                alt="Modern dental treatment room"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Patient First</h3>
              <p className="text-sm text-muted-foreground">
                Every decision we make prioritizes your comfort, safety, and satisfaction
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                We maintain the highest standards in every aspect of dental care
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Integrity</h3>
              <p className="text-sm text-muted-foreground">
                Honest communication and transparent treatment recommendations always
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Continuously adopting the latest technology and techniques
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Major Milestones</h2>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-primary">1974</span>
              </div>
              <div className="flex-grow border-l-2 border-primary pl-6 pb-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">Clinic Founded</h3>
                <p className="text-muted-foreground">
                  Dr. Rajendran Kumar establishes Chennai Dental Clinic in T Nagar
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-primary">1990</span>
              </div>
              <div className="flex-grow border-l-2 border-primary pl-6 pb-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">Expansion</h3>
                <p className="text-muted-foreground">
                  Expanded to multispecialty clinic with prosthodontics and orthodontics departments
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-primary">2005</span>
              </div>
              <div className="flex-grow border-l-2 border-primary pl-6 pb-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">Digital Transformation</h3>
                <p className="text-muted-foreground">
                  Implemented fully digital patient record system and advanced imaging technology
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-primary">2015</span>
              </div>
              <div className="flex-grow border-l-2 border-primary pl-6 pb-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">International Recognition</h3>
                <p className="text-muted-foreground">
                  Began serving international patients seeking quality dental care at affordable costs
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-primary">2024</span>
              </div>
              <div className="flex-grow pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">50 Years Strong</h3>
                <p className="text-muted-foreground">
                  Celebrating five decades of dental excellence with over 50,000 happy patients
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
