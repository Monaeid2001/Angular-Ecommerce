export interface Product {
    id: number;
    title: String;
    description:String;
    price:number; 
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: String;
    category: String
    thumbnail:String;
    images:Array<String>;
    createdAt: String;
  }
