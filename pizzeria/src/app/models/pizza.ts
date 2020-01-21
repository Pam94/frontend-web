export interface Pizza {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  isOnSale: boolean;
  quantityInCart: number;
  ingredients: Ingredient[];
}

export interface Ingredient {
  name: string;
  kcal: number;
  vegan: boolean;
  glutten: boolean;
}
