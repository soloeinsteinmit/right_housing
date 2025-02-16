/**
 * @fileoverview Parent layout component that wraps all pages in the application.
 * Provides common layout elements like header, footer, and navigation.
 */

import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import ScrollControls from "../components/common/ScrollControls";
import LenisProvider from "../components/providers/LenisProvider";

/**
 * ParentLayout component that provides the main application structure.
 * Includes the main navigation, content area, and footer.
 * Uses React Router's Outlet for rendering child routes.
 *
 * @component
 * @returns {JSX.Element} The rendered ParentLayout component
 */
const ParentLayout = () => {
  return (
    <LenisProvider>
      <div className="flex flex-col min-h-screen">
        {/* Main Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />

        <ScrollControls />
      </div>
    </LenisProvider>
  );
};

export default ParentLayout;
