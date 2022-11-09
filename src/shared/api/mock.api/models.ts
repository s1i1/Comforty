export interface ProductItems {
  id: string;
  image: string;
  title: string;
  price: number;
  prevPrice?: number;
  newest: boolean;
  bestSeller: boolean;
  featured: boolean;
  trending: boolean;
  category: string;
  rating: number;
}

export interface TopCategoriesItems {
  id: string;
  image: string;
  category: string;
  total: string;
}

export interface DiscountItems {
  image: string;
  discount: string;
}

export interface AboutUsItems {
  id: string;
  image: string;
  name: string;
  profession: string;
  text: string;
}
