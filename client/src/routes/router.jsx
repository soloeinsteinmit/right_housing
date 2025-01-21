/**
 * @fileoverview Main routing configuration for the Right Housing application.
 * This file defines all the application routes and their corresponding components.
 */

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

// Layouts
import ParentLayout from "../layouts/ParentLayout";

// Error Pages
import ErrorBoundary from "../pages/error/ErrorBoundary";
import PageNotFound from "../pages/error/PageNotFound";

// Main Pages
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Programs from "../pages/programs/Programs";
import Contact from "../pages/contact/Contact";

// Application Pages
import Apply from "../pages/apply/Apply";
import ApplicationStatus from "../pages/apply/ApplicationStatus";

// Donation Pages
import Donate from "../pages/donate/Donate";
import DonationSuccess from "../pages/donate/DonationSuccess";
import DonationCancel from "../pages/donate/DonationCancel";

// Legal Pages
import PrivacyPolicy from "../pages/legal/PrivacyPolicy";
import TermsOfService from "../pages/legal/TermsOfService";

// Volunteer Pages
import Volunteer from "../pages/volunteer/Volunteer";

/**
 * @typedef {Object} RouteConfig
 * @property {string} path - The URL path for the route
 * @property {React.Component} element - The component to render for this route
 * @property {React.Component} [errorElement] - Optional error boundary component
 * @property {RouteConfig[]} [children] - Nested routes
 */

/**
 * Main router configuration for the application.
 * Uses createBrowserRouter for client-side routing with HTML5 history API.
 * 
 * Route Structure:
 * - / (Home)
 * - /about (About Us)
 * - /programs (Our Programs)
 * - /apply (Application Form)
 * - /apply/status (Application Status)
 * - /donate (Donation Page)
 * - /donate/success (Successful Donation)
 * - /donate/cancel (Cancelled Donation)
 * - /contact (Contact Us)
 * - /privacy (Privacy Policy)
 * - /terms (Terms of Service)
 * - /volunteer (Volunteer)
 * 
 * @type {import('react-router-dom').RouterProvider}
 */
export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route 
            path="/"
            element={<ParentLayout />}
            errorElement={<ErrorBoundary />}
        >
            {/* Main routes */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="programs" element={<Programs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="volunteer" element={<Volunteer />} />

            {/* Application routes */}
            <Route path="apply">
                <Route index element={<Apply />} />
                <Route path="status" element={<ApplicationStatus />} />
            </Route>

            {/* Donation routes */}
            <Route path="donate">
                <Route index element={<Donate />} />
                <Route path="success" element={<DonationSuccess />} />
                <Route path="cancel" element={<DonationCancel />} />
            </Route>

            {/* Legal routes */}
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsOfService />} />

            {/* 404 route */}
            <Route path="*" element={<PageNotFound />} />
        </Route>
    )
);

export default router;
