import brandsJson from "./brands.json";

export interface Brand {
  id: string;
  name: string;
  logo: string;
  slug: string;
  tagline: string;
  accentColor: string;
}

export const brands: Brand[] = brandsJson as Brand[];
