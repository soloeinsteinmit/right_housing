import { motion } from "framer-motion";
import { Heart, Users, Calendar, Clock, Star, Send } from "lucide-react";
import VolunteerForm from "./partials/VolunteerForm";
import VolunteerHero from "./partials/VolunteerHero";
import OpportunitiesSection from "./partials/OpportunitiesSection";

const Volunteer = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <VolunteerHero />
      <OpportunitiesSection />
      <VolunteerForm />
    </div>
  );
};

export default Volunteer;
