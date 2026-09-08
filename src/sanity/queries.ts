import { defineQuery } from "next-sanity";

export const categoriesQuery = defineQuery(`
  *[_type == "category"] | order(order asc, name asc) {
    _id,
    name,
    "slug": slug.current
  }
`);

export const productsQuery = defineQuery(`
  *[_type == "product"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    image,
    inStock,
    "category": category-> {
      name,
      "slug": slug.current
    }
  }
`);

export const productBySlugQuery = defineQuery(`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    image,
    description,
    inStock,
    "category": category-> {
      name,
      "slug": slug.current
    }
  }
`);
