
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getAllProducts, categories } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Filter, X, SlidersHorizontal } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(searchParams.get("league") || null);
  const [filterOpen, setFilterOpen] = useState(false);
  
  // Load all products
  useEffect(() => {
    const allProducts = getAllProducts();
    setProducts(allProducts);
    
    // Apply initial filtering based on URL params
    const leagueParam = searchParams.get("league");
    if (leagueParam) {
      setSelectedCategory(leagueParam);
      const filtered = allProducts.filter(product => 
        product.categories && product.categories.includes(leagueParam)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(allProducts);
    }
  }, [searchParams]);
  
  // Handle category selection
  const handleCategoryChange = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      // Deselect if already selected
      setSelectedCategory(null);
      searchParams.delete("league");
      setSearchParams(searchParams);
      setFilteredProducts(products);
    } else {
      // Select new category
      setSelectedCategory(categoryId);
      searchParams.set("league", categoryId);
      setSearchParams(searchParams);
      
      const filtered = products.filter(product => 
        product.categories && product.categories.includes(categoryId)
      );
      setFilteredProducts(filtered);
    }
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory(null);
    searchParams.delete("league");
    setSearchParams(searchParams);
    setFilteredProducts(products);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-jersey-800">
              {selectedCategory 
                ? `${categories.find(c => c.id === selectedCategory)?.name || 'Products'}`
                : 'All Products'
              }
            </h1>
            <div className="flex items-center gap-3">
              {selectedCategory && (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={clearFilters}
                  className="text-sm flex items-center"
                >
                  <X className="h-4 w-4 mr-1" />
                  Clear Filters
                </Button>
              )}
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setFilterOpen(!filterOpen)}
                className="lg:hidden text-sm flex items-center"
              >
                <SlidersHorizontal className="h-4 w-4 mr-1" />
                Filters
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filters - Desktop */}
            <div className="hidden lg:block w-64 shrink-0">
              <div className="bg-white p-5 rounded-xl shadow-sm">
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-jersey-800">Categories</h3>
                    {selectedCategory && (
                      <button 
                        onClick={clearFilters}
                        className="text-xs text-primary hover:underline"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                  <div className="mt-3 space-y-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryChange(category.id)}
                        className={`w-full text-left px-3 py-2 text-sm rounded-lg flex items-center justify-between ${
                          selectedCategory === category.id 
                            ? 'bg-primary/10 text-primary font-medium' 
                            : 'hover:bg-jersey-50'
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className="text-xs bg-jersey-100 px-2 py-0.5 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile filters */}
            {filterOpen && (
              <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 flex items-end">
                <div className="bg-white w-full rounded-t-xl p-5 animate-slide-up">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium text-lg">Filters</h3>
                    <button onClick={() => setFilterOpen(false)}>
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-jersey-800 mb-2">Categories</h4>
                    <div className="flex flex-wrap gap-2">
                      {categories.map(category => (
                        <button
                          key={category.id}
                          onClick={() => {
                            handleCategoryChange(category.id);
                            setFilterOpen(false);
                          }}
                          className={`px-3 py-2 text-sm rounded-lg ${
                            selectedCategory === category.id 
                              ? 'bg-primary/10 text-primary font-medium' 
                              : 'bg-jersey-50'
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-4">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => {
                        clearFilters();
                        setFilterOpen(false);
                      }}
                    >
                      Clear All
                    </Button>
                    <Button 
                      className="flex-1"
                      onClick={() => setFilterOpen(false)}
                    >
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Product Grid */}
            <div className="flex-1">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-3xl font-bold text-jersey-300 mb-4">No products found</div>
                  <p className="text-jersey-500 mb-6">We couldn't find any products matching your criteria</p>
                  <Button onClick={clearFilters}>View All Products</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
