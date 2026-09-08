import type { Image } from "sanity";

export type Category = {
  _id: string;
  name: string;
  slug: string;
};

export type Product = {
  _id: string;
  name: string;
  slug: string;
  image: Image;
  inStock: boolean;
  category: Pick<Category, "name" | "slug"> | null;
};

export type ProductDetail = Product & {
  description?: string;
};
