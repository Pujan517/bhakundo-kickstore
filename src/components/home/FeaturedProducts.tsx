
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { categories, getFeaturedProducts } from '@/lib/products';
import { useLazyImage } from '@/lib/animations';
import { cn } from '@/lib/utils';

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();
  const navigate = useNavigate();
  
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="block text-primary text-sm font-medium mb-2">Collections</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-jersey-800">Featured Jerseys</h2>
          </div>
          <button
            onClick={() => navigate('/products')}
            className="hidden sm:flex items-center text-jersey-700 hover:text-primary transition-colors duration-300"
          >
            <span className="mr-1">View All</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        
        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Mobile View All button */}
        <div className="mt-8 sm:hidden">
          <button
            onClick={() => navigate('/products')}
            className="w-full py-3 px-4 flex items-center justify-center text-jersey-700 border border-jersey-300 rounded-lg hover:bg-jersey-50 transition-colors duration-300"
          >
            <span>View All Products</span>
            <ChevronRight className="ml-1 h-5 w-5" />
          </button>
        </div>
        
        {/* Leagues/Categories Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <span className="block text-primary text-sm font-medium mb-2">Shop by</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-jersey-800">Leagues & Collections</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(0, 6).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Product Card Component
const ProductCard = ({ product }: { product: any }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { src, blur } = useLazyImage(product.image);
  
  return (
    <div 
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.01]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/products/${product.id}`)}
    >
      {/* Badge for new or discounted items */}
      {product.new && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-primary text-white text-xs font-medium px-2.5 py-1 rounded-full">New</span>
        </div>
      )}
      {product.originalPrice && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-red-500 text-white text-xs font-medium px-2.5 py-1 rounded-full">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% Off
          </span>
        </div>
      )}
      
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={src} 
          alt={product.name} 
          className={cn(
            "w-full h-full object-cover object-center transition-all duration-500",
            blur ? "blur-md scale-110" : "blur-0 scale-100",
            isHovered ? "scale-105" : "scale-100"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">{product.team}</div>
        <h3 className="text-jersey-800 font-medium mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">{product.name}</h3>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {product.originalPrice ? (
              <div className="flex items-center">
                <span className="text-red-500 font-semibold">${product.price.toFixed(2)}</span>
                <span className="text-gray-400 text-sm line-through ml-2">${product.originalPrice.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-jersey-800 font-semibold">${product.price.toFixed(2)}</span>
            )}
          </div>
          <div className="flex items-center">
            <div className="flex text-amber-400 text-sm">
              <span>★</span>
              <span className="text-gray-500 ml-1">{product.rating}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hover overlay with quick actions */}
      <div 
        className={cn(
          "absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 transition-opacity duration-300 flex items-center justify-center",
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <button 
          className="bg-white text-jersey-800 font-medium py-2 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 active:scale-95"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/products/${product.id}`);
          }}
        >
          Quick View
        </button>
      </div>
    </div>
  );
};

// Category Card Component
const CategoryCard = ({ category }: { category: any }) => {
  const navigate = useNavigate();
  const { src, blur } = useLazyImage(category.image);
  
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl shadow-sm cursor-pointer transform transition-all duration-300 hover:shadow-md hover:scale-[1.01]"
      onClick={() => navigate(`/products?league=${category.id}`)}
    >
      {/* Image */}
      <div className="aspect-[3/2] overflow-hidden">
        <img 
          src={src} 
          alt={category.name} 
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110",
            blur ? "blur-md scale-110" : "blur-0 scale-100"
          )}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
        <p className="text-white/80 text-sm mb-4">{category.count} products</p>
        <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="py-2 px-4 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full hover:bg-white/30 transition-colors duration-300">
            Shop Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
