
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Heart, Share2, Star } from "lucide-react";
import { getProductById } from "@/lib/products";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import AnimatedLink from "@/components/ui/AnimatedLink";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (id) {
      try {
        const productData = getProductById(Number(id));
        if (productData) {
          setProduct(productData);
        } else {
          // Product not found, redirect to 404
          navigate("/not-found", { replace: true });
        }
      } catch (error) {
        console.error("Error loading product:", error);
      } finally {
        setLoading(false);
      }
    }
  }, [id, navigate]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "You need to select a size before adding to cart",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Added to cart",
      description: `${product.name} (${selectedSize}) has been added to your cart`,
    });
  };

  const handleAddToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist`,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-sm text-jersey-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Product Details */}
            <div>
              <div className="mb-6">
                <div className="text-sm text-jersey-500 mb-2">{product.team}</div>
                <h1 className="text-3xl font-bold text-jersey-800 mb-3">{product.name}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5"
                        fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                  <span className="text-jersey-600 ml-2">{product.rating} Stars</span>
                  <span className="mx-2 text-jersey-400">•</span>
                  <span className="text-jersey-600">24 Reviews</span>
                </div>

                <div className="mb-4">
                  {product.originalPrice ? (
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-jersey-800">${product.price.toFixed(2)}</span>
                      <span className="text-jersey-500 line-through ml-3">${product.originalPrice.toFixed(2)}</span>
                      <span className="ml-3 bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% Off
                      </span>
                    </div>
                  ) : (
                    <span className="text-2xl font-bold text-jersey-800">${product.price.toFixed(2)}</span>
                  )}
                </div>
              </div>

              {/* Product Description */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-jersey-800 mb-2">Description</h2>
                <p className="text-jersey-600">
                  {product.description || "Official football jersey made with premium materials for comfort and performance. Features moisture-wicking technology and authentic team details."}
                </p>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-lg font-semibold text-jersey-800">Select Size</h2>
                  <AnimatedLink href="/size-guide" className="text-sm text-primary">
                    Size Guide
                  </AnimatedLink>
                </div>
                <div className="flex flex-wrap gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`h-10 w-10 rounded-full flex items-center justify-center border ${
                        selectedSize === size
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-jersey-300 hover:border-primary/50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-jersey-800 mb-3">Quantity</h2>
                <div className="flex items-center">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10 border border-jersey-300 rounded-l-lg flex items-center justify-center hover:bg-jersey-50"
                  >
                    -
                  </button>
                  <div className="h-10 w-14 border-t border-b border-jersey-300 flex items-center justify-center">
                    {quantity}
                  </div>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10 border border-jersey-300 rounded-r-lg flex items-center justify-center hover:bg-jersey-50"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleAddToCart}
                  className="flex-grow bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg flex items-center justify-center"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  onClick={handleAddToWishlist}
                  variant="outline"
                  className="flex-grow border-jersey-300 hover:bg-jersey-50 px-8 py-3 rounded-lg flex items-center justify-center"
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Wishlist
                </Button>
              </div>

              {/* Additional Details */}
              <div className="mt-8 pt-8 border-t border-jersey-200">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-jersey-500 block">Category</span>
                    <span className="text-jersey-800">Football Jerseys</span>
                  </div>
                  <div>
                    <span className="text-jersey-500 block">Team</span>
                    <span className="text-jersey-800">{product.team}</span>
                  </div>
                  <div>
                    <span className="text-jersey-500 block">Season</span>
                    <span className="text-jersey-800">2023/24</span>
                  </div>
                  <div>
                    <span className="text-jersey-500 block">Material</span>
                    <span className="text-jersey-800">100% Polyester</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
