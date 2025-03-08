
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const slides = [
  {
    id: 1,
    title: "FC Barcelona 2023/24",
    subtitle: "Official Home Jersey",
    description: "The iconic Barcelona stripes reimagined for the new season.",
    image: "https://images.unsplash.com/photo-1617712945426-eb7dfa3cb829?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    ctaLink: "/products/1",
    bgColor: "from-blue-600/80 to-red-600/80",
  },
  {
    id: 2,
    title: "Manchester United 2023/24",
    subtitle: "Official Home Jersey",
    description: "The classic red jersey, reimagined for a new era.",
    image: "https://images.unsplash.com/photo-1606209077949-08f57c25022e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    ctaLink: "/products/2",
    bgColor: "from-red-600/80 to-red-900/80",
  },
  {
    id: 3,
    title: "Real Madrid 2023/24",
    subtitle: "Official Home Jersey",
    description: "The royal white of Real Madrid, elegance in every detail.",
    image: "https://images.unsplash.com/photo-1571724523853-51a3115ba854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    ctaLink: "/products/3",
    bgColor: "from-slate-600/80 to-slate-900/80",
  }
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  
  // Auto-rotation for slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        goToNextSlide();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeSlide, isAnimating]);
  
  const goToSlide = (index: number) => {
    if (index === activeSlide || isAnimating) return;
    
    setIsAnimating(true);
    setActiveSlide(index);
    
    // Reset animation flag after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const goToNextSlide = () => {
    const nextSlide = (activeSlide + 1) % slides.length;
    goToSlide(nextSlide);
  };
  
  const goToPrevSlide = () => {
    const prevSlide = (activeSlide - 1 + slides.length) % slides.length;
    goToSlide(prevSlide);
  };
  
  const handleCtaClick = () => {
    navigate(slides[activeSlide].ctaLink);
  };
  
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-500 ease-out-expo",
            index === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          {/* Image with gradient overlay */}
          <div className="absolute inset-0 w-full h-full">
            <div className={cn(
              "absolute inset-0 bg-gradient-to-r opacity-85 z-10",
              slide.bgColor
            )} />
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-xl text-white transition-all duration-700 transform translate-y-0" style={{ opacity: index === activeSlide ? 1 : 0 }}>
                <span className="inline-block py-1 px-3 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium mb-4">
                  {slide.subtitle}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-balance">
                  {slide.title}
                </h1>
                <p className="text-xl opacity-90 mb-8 text-balance max-w-md">
                  {slide.description}
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={handleCtaClick}
                    className="group bg-white text-jersey-800 py-3 px-6 rounded-full font-medium flex items-center transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Shop Now
                    <ChevronRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <button 
                    onClick={() => navigate('/products')}
                    className="bg-transparent border border-white/70 text-white py-3 px-6 rounded-full font-medium transition-all duration-300 hover:bg-white/10 active:scale-[0.98]"
                  >
                    View All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === activeSlide 
                ? "bg-white w-6" 
                : "bg-white/50 hover:bg-white/70"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Previous/Next Buttons (hidden on mobile) */}
      <button 
        className="absolute top-1/2 left-4 -translate-y-1/2 z-30 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white rounded-full p-2 hidden md:flex items-center justify-center transition-all duration-300 hover:scale-110"
        onClick={goToPrevSlide}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        className="absolute top-1/2 right-4 -translate-y-1/2 z-30 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white rounded-full p-2 hidden md:flex items-center justify-center transition-all duration-300 hover:scale-110"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
};

export default Hero;
