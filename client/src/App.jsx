/**
 * @fileoverview Root application component.
 * Provides the router configuration and global providers.
 */

import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import router from "./routes/router";
import "./styles/blur.css";

/**
 * Root App component that sets up routing and global providers.
 * Uses RouterProvider to enable client-side routing.
 *
 * @component
 * @returns {JSX.Element} The rendered App component
 */
function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
