/**
 * @fileoverview Programs page component for Right Housing.
 * Displays comprehensive information about our programs and services.
 */

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@heroui/button";
import ProgramsHero from "./partials/ProgramsHero";
import HolisticApproach from "./partials/HolisticApproach";
import ProgramsServices from "./partials/ProgramsServices";
import ProgramsEligibility from "./partials/ProgramsEligibility";
import ProgramsCaseManagement from "./partials/ProgramsCaseManagement";

/**
 * Programs page component that showcases our comprehensive approach to recovery and reintegration.
 * Features various programs including mind-body wellness, job readiness, and community support.
 *
 * @returns {JSX.Element} The rendered Programs page component
 */
const Programs = () => {
  return (
    <main className="min-h-screen">
      <ProgramsHero />
      <HolisticApproach />
      <ProgramsServices />
      <ProgramsCaseManagement />
      <ProgramsEligibility />
    </main>
  );
};

export default Programs;
