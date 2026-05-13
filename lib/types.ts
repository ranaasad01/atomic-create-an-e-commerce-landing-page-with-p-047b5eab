export type Category = "All" | "Electronics" | "Clothing" | "Home" | "Sports" | "Beauty";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  category: Exclude<Category, "All">;
  badge?: "sale" | "featured" | "new";
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

export type CartAction =
  | { type: "ADD_ITEM"; product: Product }
  | { type: "REMOVE_ITEM"; productId: number }
  | { type: "UPDATE_QUANTITY"; productId: number; quantity: number }
  | { type: "TOGGLE_CART" }
  | { type: "CLOSE_CART" };
