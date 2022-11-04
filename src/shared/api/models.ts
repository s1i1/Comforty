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
