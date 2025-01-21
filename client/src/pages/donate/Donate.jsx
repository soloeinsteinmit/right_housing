/**
 * @fileoverview Donation page component.
 * Handles donation form and Stripe payment integration.
 */

import { useEffect } from "react";
import DonateHero from "./partials/DonateHero";
import DonationOptions from "./partials/DonationOptions";
import ImpactStories from "./partials/ImpactStories";

/**
 * Donate component that handles donation collection and processing.
 * Integrates with Stripe for secure payment processing.
 *
 * @component
 * @returns {JSX.Element} The rendered Donate component
 */
const Donate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-grow">
      <DonateHero />
      <DonationOptions />
      <ImpactStories />
    </main>
  );
};

export default Donate;
