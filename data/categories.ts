import categoriesJson from "./categories.json";

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  gradient: string;
  accentColor: string;
  count: string;
}

export const categories: Category[] = categoriesJson as Category[];
