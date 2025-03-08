
export interface Product {
  id: string;
  name: string;
  team: string;
  league: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  description: string;
  size: string[];
  color: string[];
  featured: boolean;
  new: boolean;
  popular: boolean;
  rating: number;
  reviews: number;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "FC Barcelona Home Jersey 2023/24",
    team: "FC Barcelona",
    league: "La Liga",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1617712945426-eb7dfa3cb829?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    images: [
      "https://images.unsplash.com/photo-1617712945426-eb7dfa3cb829?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1560635921-14cd390a2b8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1602341618136-e5ecb8a41dc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
    ],
    description: "The official FC Barcelona home jersey for the 2023/24 season, featuring the iconic blue and red stripes. Made with sustainable materials and advanced Dri-FIT technology for maximum comfort and performance.",
    size: ["S", "M", "L", "XL", "XXL"],
    color: ["Blue/Red"],
    featured: true,
    new: true,
    popular: true,
    rating: 4.8,
    reviews: 127,
    inStock: true
  },
  {
    id: "2",
    name: "Manchester United Home Jersey 2023/24",
    team: "Manchester United",
    league: "Premier League",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1606209077949-08f57c25022e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    images: [
      "https://images.unsplash.com/photo-1606209077949-08f57c25022e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1626012725252-62c6cbc499f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1526816729675-e59f39bf5e3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    ],
    description: "The official Manchester United home jersey for the 2023/24 season. This classic red jersey features subtle tonal patterns, iconic club crest, and is made with lightweight, quick-drying fabric for optimal performance.",
    size: ["S", "M", "L", "XL", "XXL"],
    color: ["Red"],
    featured: true,
    new: true,
    popular: true,
    rating: 4.7,
    reviews: 95,
    inStock: true
  },
  {
    id: "3",
    name: "Real Madrid Home Jersey 2023/24",
    team: "Real Madrid",
    league: "La Liga",
    price: 94.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1571724523853-51a3115ba854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    images: [
      "https://images.unsplash.com/photo-1571724523853-51a3115ba854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1614632537236-445d5e4becf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    ],
    description: "The elegant Real Madrid home jersey for the 2023/24 season. Pure white with subtle gold accents, this jersey represents the royal heritage of the most successful club in European football history.",
    size: ["S", "M", "L", "XL"],
    color: ["White"],
    featured: true,
    new: true,
    popular: false,
    rating: 4.9,
    reviews: 156,
    inStock: true
  },
  {
    id: "4",
    name: "Liverpool FC Home Jersey 2023/24",
    team: "Liverpool",
    league: "Premier League",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1646635142090-9404faf4a856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
    images: [
      "https://images.unsplash.com/photo-1646635142090-9404faf4a856?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
      "https://images.unsplash.com/photo-1562852385-4da284068a82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1511426463457-0571e247d816?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    ],
    description: "The iconic red Liverpool home jersey for the 2023/24 season. This vibrant jersey features subtle patterning and honors the club's rich history while offering modern performance technology for players and fans alike.",
    size: ["S", "M", "L", "XL", "XXL"],
    color: ["Red"],
    featured: false,
    new: true,
    popular: true,
    rating: 4.7,
    reviews: 88,
    inStock: true
  },
  {
    id: "5",
    name: "Bayern Munich Home Jersey 2023/24",
    team: "Bayern Munich",
    league: "Bundesliga",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1615726835028-56a50e6b2663?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    images: [
      "https://images.unsplash.com/photo-1615726835028-56a50e6b2663?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1580891792500-222276b6de72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1526816729675-e59f39bf5e3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    ],
    description: "The bold Bayern Munich home jersey for the 2023/24 season. This traditional red jersey features subtle diamond patterns inspired by the Bavarian flag and the architecture of Allianz Arena.",
    size: ["S", "M", "L", "XL"],
    color: ["Red"],
    featured: true,
    new: false,
    popular: true,
    rating: 4.6,
    reviews: 73,
    inStock: true
  },
  {
    id: "6",
    name: "Paris Saint-Germain Home Jersey 2023/24",
    team: "Paris Saint-Germain",
    league: "Ligue 1",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    images: [
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1542883477-38ded18fc2f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1518155317743-a8ff43ea6a5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    ],
    description: "The stylish Paris Saint-Germain home jersey for the 2023/24 season. This classic navy blue jersey with a vertical red stripe embodies the elegance of Paris and the ambition of one of Europe's most exciting clubs.",
    size: ["S", "M", "L", "XL", "XXL"],
    color: ["Blue/Red"],
    featured: false,
    new: true,
    popular: false,
    rating: 4.8,
    reviews: 91,
    inStock: true
  },
  {
    id: "7",
    name: "Juventus Home Jersey 2023/24",
    team: "Juventus",
    league: "Serie A",
    price: 89.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1617143214772-e0f161c0eaba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    images: [
      "https://images.unsplash.com/photo-1617143214772-e0f161c0eaba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1550330550-92a4c167de0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
      "https://images.unsplash.com/photo-1594909074881-0fccdbfb79b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    ],
    description: "The iconic black and white striped Juventus home jersey for the 2023/24 season. This classic jersey features a modern interpretation of Juventus' traditional design with premium detailing and excellent performance features.",
    size: ["S", "M", "L", "XL"],
    color: ["Black/White"],
    featured: false,
    new: false,
    popular: true,
    rating: 4.5,
    reviews: 82,
    inStock: true
  },
  {
    id: "8",
    name: "Manchester City Home Jersey 2023/24",
    team: "Manchester City",
    league: "Premier League",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1624982752001-13ef26b08b57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    images: [
      "https://images.unsplash.com/photo-1624982752001-13ef26b08b57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1614632537776-06b1b0311c3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1577423968596-314a523a0ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    ],
    description: "The sleek Manchester City home jersey for the 2023/24 season. This iconic sky blue jersey celebrates the club's recent successes with subtle geometric patterns inspired by Manchester's industrial heritage.",
    size: ["S", "M", "L", "XL", "XXL"],
    color: ["Sky Blue"],
    featured: true,
    new: false,
    popular: false,
    rating: 4.6,
    reviews: 79,
    inStock: true
  }
];

export const categories: Category[] = [
  {
    id: "premier-league",
    name: "Premier League",
    image: "https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    count: 42
  },
  {
    id: "la-liga",
    name: "La Liga",
    image: "https://images.unsplash.com/photo-1629891593895-0c1b19394e29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    count: 36
  },
  {
    id: "bundesliga",
    name: "Bundesliga",
    image: "https://images.unsplash.com/photo-1574629170108-3d9559eb773e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    count: 28
  },
  {
    id: "serie-a",
    name: "Serie A",
    image: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    count: 24
  },
  {
    id: "ligue-1",
    name: "Ligue 1",
    image: "https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    count: 18
  },
  {
    id: "national-teams",
    name: "National Teams",
    image: "https://images.unsplash.com/photo-1617144519956-cc8d875f3085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
    count: 52
  }
];

// Helper functions
export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured).slice(0, 4);
}

export function getNewArrivals(): Product[] {
  return products.filter(product => product.new).slice(0, 4);
}

export function getPopularProducts(): Product[] {
  return products.filter(product => product.popular).slice(0, 4);
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getRelatedProducts(id: string): Product[] {
  const product = getProductById(id);
  if (!product) return [];
  
  return products
    .filter(p => p.id !== id && (p.team === product.team || p.league === product.league))
    .slice(0, 4);
}
