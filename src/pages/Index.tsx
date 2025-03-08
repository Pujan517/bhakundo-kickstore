
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import { ShoppingBag, Truck, RotateCcw, Clock } from "lucide-react";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <main className="flex-grow">
        <Hero />
        
        {/* Featured Products */}
        <FeaturedProducts />
        
        {/* Benefits Section */}
        <section className="py-16 bg-jersey-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-jersey-800 mb-4">Why Choose Bhakundo</h2>
              <p className="text-jersey-600 max-w-2xl mx-auto">The highest quality football jerseys delivered to your doorstep with premium service every step of the way.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center transition-transform duration-300 hover:shadow-md hover:scale-[1.02] reveal-on-scroll">
                <div className="bg-primary/10 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                  <ShoppingBag className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-jersey-800 mb-2">Authentic Jerseys</h3>
                <p className="text-jersey-600 text-sm">100% authentic jerseys from official suppliers, never compromise on quality.</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center transition-transform duration-300 hover:shadow-md hover:scale-[1.02] reveal-on-scroll">
                <div className="bg-primary/10 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                  <Truck className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-jersey-800 mb-2">Fast Delivery</h3>
                <p className="text-jersey-600 text-sm">Quick and reliable shipping options to get your jersey to you when you need it.</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center transition-transform duration-300 hover:shadow-md hover:scale-[1.02] reveal-on-scroll">
                <div className="bg-primary/10 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                  <RotateCcw className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-jersey-800 mb-2">Easy Returns</h3>
                <p className="text-jersey-600 text-sm">Not the right fit? No problem. Free returns within 30 days of purchase.</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center transition-transform duration-300 hover:shadow-md hover:scale-[1.02] reveal-on-scroll">
                <div className="bg-primary/10 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                  <Clock className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-jersey-800 mb-2">24/7 Support</h3>
                <p className="text-jersey-600 text-sm">Our customer service team is available around the clock for any questions.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join Our Team</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter and be the first to know about new jerseys, exclusive discounts, and upcoming football events.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none text-jersey-800"
              />
              <button 
                type="submit"
                className="bg-jersey-800 text-white px-6 py-3 rounded-lg font-medium transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
