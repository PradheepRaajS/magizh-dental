import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DoctorCard from "@/components/DoctorCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Dheepshi Manvalan",
      qualification: "BDS, MDS (Endodontics)",
      specialization: "Founder & Chief Endodontist",
      experience: "7+ years experience",
      dciNum: "DCI No: 27667",
      imageSrc: "/doctors/DrDheepshi.png",
    },
    {
      name: "Dr. Anjugam",
      qualification: "BDS",
      specialization: "General Dentistry",
      designation: "Associate Dentist",
      dciNum: "DCAI No: 34019",
      imageSrc: "/doctors/DrAnjugam.jpeg",
    },
    {
      name: "Dr. Prathiba",
      qualification: "BDS",
      specialization: "General Dentistry",
      designation: "Associate Dentist",
      dciNum: "DCI No: 36766",
      imageSrc: "/doctors/DrPrathiba.jpeg",
    },
    {
      name: "Dr. Vidhyashree",
      qualification: "BDS, MDS (Orthodontics)",
      specialization: "Orthodontist (Braces & Aligners Specialist)",
      designation: "Senior Consultant",
      dciNum: "DCI No: 27601",
      imageSrc: "/doctors/DrVidhya.jpeg",
    },
    {
      name: "Dr. Sahana",
      qualification: "BDS, MDS (Prosthodontics)",
      specialization: "Prosthodontist & Cosmetic Dentist",
      designation: "Senior Consultant",
      //dciNum: "DCI No: 27601",
      //imageSrc: "/doctors/DrSahana.jpeg",

    }, 
    {
      name: "Dr. Pandiyarajan",
      qualification: "BDS, MDS (Prosthodontics)",
      specialization: "Prosthodontist & Cosmetic Dentist",
      designation: "Senior Consultant",
      //dciNum: "DCI No: 27601",
      //imageSrc: "/doctors/DrSahana.jpeg",

    },    
    {
      name: "Dr. Sandhiya",
      qualification: "BDS, MDS (Prosthodontics)",
      specialization: "Prosthodontist & Cosmetic Dentist",
      designation: "Senior Consultant",
      //dciNum: "DCI No: 27601",
      //imageSrc: "/doctors/DrSahana.jpeg",

    }, 
  ];

  // pick featured doctor and rest
  const featuredIndex = doctors.findIndex(d => d.name === "Dr. Dheepshi Manvalan");
  const featured = featuredIndex !== -1 ? doctors[featuredIndex] : null;
  const rest = doctors.filter((_, i) => i !== featuredIndex);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our Expert Dentists
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Highly qualified professionals with international training and decades of combined experience
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our team of specialists brings together expertise from leading dental institutions across India and abroad. 
            Each dentist is committed to continuous learning, staying updated with the latest techniques and technologies. 
            With a patient-first approach, our doctors take time to understand your concerns and provide personalized treatment plans.
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Use 3 columns on large screens so we can center the featured card with empty placeholders */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured ? (
              <>
                <div className="hidden lg:block" aria-hidden />
                <DoctorCard key="featured" {...featured} designation={featured.designation ?? ""} />
                <div className="hidden lg:block" aria-hidden />
              </>
            ) : null}

            {rest.map((doctor, index) => (
              <DoctorCard key={index} {...doctor} designation={doctor.designation ?? ""} />
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Awards & Recognition
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">4.8★</div>
              <p className="text-muted-foreground">Average Patient Rating</p>
              <span className="text-sm text-muted-foreground">What more than you need than the patients trust!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Doctors Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Sets Our Doctors Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Patient-First Approach</h3>
              <p className="text-sm text-muted-foreground">
                We take time to listen, explain procedures clearly, and ensure you're comfortable throughout
              </p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Continuous Learning</h3>
              <p className="text-sm text-muted-foreground">
                Regular attendance at conferences and workshops to stay at the forefront of dentistry
              </p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Gentle Care</h3>
              <p className="text-sm text-muted-foreground">
                Specialized in providing anxiety-free dental experiences with gentle techniques and sedation options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Meet Our Team?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Schedule your appointment and experience personalized dental care from our expert team
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="xl" className="bg-background text-foreground hover:bg-background/90">
              Book Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Doctors;