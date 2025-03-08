
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { useLazyImage } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { type Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  variant?: 'grid' | 'list';
}

const ProductCard = ({ product, variant = 'grid' }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { src, blur } = useLazyImage(product.image);
  
  return (
    <div 
      className={cn(
        "group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.01]",
        variant === 'list' ? "flex" : ""
      )}
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
      <div className={cn(
        "relative overflow-hidden",
        variant === 'grid' ? "aspect-square" : "w-1/3 aspect-[3/4]"
      )}>
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
      <div className={cn(
        "p-4",
        variant === 'list' ? "w-2/3 flex flex-col justify-between" : ""
      )}>
        <div>
          <div className="text-xs text-gray-500 mb-1">{product.team}</div>
          <h3 className="text-jersey-800 font-medium mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">{product.name}</h3>
          
          {variant === 'list' && (
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
          )}
          
          <div className={cn(
            "flex items-center",
            variant === 'list' ? "mb-4" : "justify-between"
          )}>
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
            <div className="flex items-center ml-4">
              <div className="flex text-amber-400 text-sm">
                <span>★</span>
                <span className="text-gray-500 ml-1">{product.rating}</span>
              </div>
            </div>
          </div>
        </div>
        
        {variant === 'list' && (
          <div className="flex space-x-3 mt-4">
            <button 
              className="flex-1 flex items-center justify-center space-x-2 bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                // Add to cart
                console.log('Add to cart:', product.id);
              }}
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Add to Cart</span>
            </button>
            <button 
              className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-jersey-700 p-2 rounded-lg transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                // Add to wishlist
                console.log('Add to wishlist:', product.id);
              }}
            >
              <Heart className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
      
      {/* Quick actions overlay */}
      {variant === 'grid' && (
        <div 
          className={cn(
            "absolute inset-0 flex items-end justify-center p-4 opacity-0 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="w-full flex gap-2 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg transform transition-transform duration-300 translate-y-8 group-hover:translate-y-0">
            <button 
              className="flex-1 flex items-center justify-center space-x-1 bg-primary text-white py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                // Add to cart
                console.log('Add to cart:', product.id);
              }}
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Add to Cart</span>
            </button>
            <button 
              className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-jersey-700 p-2 rounded-lg transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                // Add to wishlist
                console.log('Add to wishlist:', product.id);
              }}
            >
              <Heart className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
