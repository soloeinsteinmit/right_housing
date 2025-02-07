import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Heart, Users, Calendar, Clock, Star, Send } from "lucide-react";
import VolunteerForm from "./partials/VolunteerForm";
import VolunteerHero from "./partials/VolunteerHero";
import OpportunitiesSection from "./partials/OpportunitiesSection";

const Volunteer = () => {
  // SEO structured data for Volunteer page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "VolunteerOpportunity",
    "name": "Volunteer with RIGHT Housing",
    "description": "Make a difference in your community by volunteering with RIGHT Housing. Help support individuals in recovery through various volunteer opportunities and meaningful engagement.",
    "organizer": {
      "@type": "NGO",
      "name": "RIGHT Housing Inc.",
      "url": "https://righthousing.org"
    },
    "offers": {
      "@type": "Offer",
      "itemOffered": [
        {
          "@type": "Service",
          "name": "Community Support Volunteer",
          "description": "Help organize and support community events and activities"
        },
        {
          "@type": "Service",
          "name": "Administrative Support",
          "description": "Assist with office tasks and program coordination"
        },
        {
          "@type": "Service",
          "name": "Mentorship Program",
          "description": "Provide guidance and support to program participants"
        },
        {
          "@type": "Service",
          "name": "Skills Workshop Facilitator",
          "description": "Lead workshops in areas like job skills, life skills, or wellness"
        }
      ]
    },
    "areaServed": {
      "@type": "City",
      "name": "Camden"
    },
    "availabilityStarts": "2025-02-07",
    "volunteerRequirements": [
      "Background Check Required",
      "18 years or older",
      "Commitment to Recovery Support",
      "Regular Availability"
    ]
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Volunteer with RIGHT Housing | Make a Difference in Recovery Support</title>
        <meta 
          name="description" 
          content="Join RIGHT Housing's volunteer program and make a meaningful impact in recovery support. Help build stronger communities through mentorship, support services, and community engagement."
        />
        <meta 
          name="keywords" 
          content="volunteer opportunities, recovery support volunteer, community service, NGO volunteer, housing support volunteer, recovery program volunteer, community outreach, volunteer program, mentorship program, volunteer application, community involvement, social impact volunteer, recovery support, volunteer positions, nonprofit volunteer, community engagement, volunteer recruitment, support services volunteer, recovery community volunteer, volunteer training, volunteer coordinator, volunteer requirements, volunteer benefits, volunteer experience, meaningful volunteering"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Volunteer with RIGHT Housing | Make a Difference in Recovery Support" />
        <meta 
          property="og:description" 
          content="Join RIGHT Housing's volunteer program and make a meaningful impact in recovery support. Help build stronger communities through mentorship, support services, and community engagement."
        />

        {/* Twitter */}
        <meta name="twitter:title" content="Volunteer with RIGHT Housing | Make a Difference in Recovery Support" />
        <meta 
          name="twitter:description" 
          content="Join RIGHT Housing's volunteer program and make a meaningful impact in recovery support. Help build stronger communities through mentorship, support services, and community engagement."
        />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="application-name" content="RIGHT Housing Volunteer Program" />
        <meta name="author" content="RIGHT Housing Inc." />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <VolunteerHero />
        <OpportunitiesSection />
        <VolunteerForm />
      </div>
    </>
  );
};

export default Volunteer;
