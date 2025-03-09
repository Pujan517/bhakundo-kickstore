
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import AnimatedLink from "@/components/ui/AnimatedLink";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-jersey-800">404</h1>
        <p className="text-xl text-jersey-600 mb-8">Oops! Page not found</p>
        <AnimatedLink href="/" className="text-primary text-lg">
          Return to Home
        </AnimatedLink>
      </div>
    </div>
  );
};

export default NotFound;
