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
                  Magizh Dental Care was founded with a clear mission: Quality Treatment with Dental Awareness. With our two conveniently located branches in Kottivakkam and Neelankarai, we serve the Chennai community with dedication and expertise.
                </p>
                <p>
                  Under the leadership of Founder and Chief Doctor Dr.Dheepshi Manavalan MDS., , our clinic has become known for combining advanced dental technology with compassionate, patient-centered care. We have earned the trust of over 600 patients with our 4.9-star rating on Google Reviews.
                </p>
                <p>
                  Today, our clinic represents the perfect blend of modern technology and personalized care. We continue to invest in the latest dental equipment and ensure our team stays updated with the most advanced techniques in dentistry.
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
                <span className="text-2xl font-bold text-primary">2020</span>
              </div>
              <div className="flex-grow border-l-2 border-primary pl-6 pb-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">Clinic Founded</h3>
                <p className="text-muted-foreground">
                  Magizh Dental Care established in Kottivakkam with a mission of quality treatment and dental awareness
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-primary">2022</span>
              </div>
              <div className="flex-grow border-l-2 border-primary pl-6 pb-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">Second Branch Opens</h3>
                <p className="text-muted-foreground">
                  Expansion to Neelankarai to better serve our growing patient community
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-primary">2026</span>
              </div>
              <div className="flex-grow border-l-2 border-primary pl-6 pb-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">No break</h3>
                <p className="text-muted-foreground">
                  Seamless care from morning to night: Announced our new continuous full-day hours.
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
