import { CategoryTabs } from "@/components/category-tabs";
import { sanityFetch } from "@/sanity/fetch";
import { categoriesQuery, productsQuery } from "@/sanity/queries";
import type { Category, Product } from "@/sanity/types";

export const revalidate = 3600;

export default async function ProductsPage() {
  const [categories, products] = await Promise.all([
    sanityFetch<Category[]>({ query: categoriesQuery, tags: ["category"] }),
    sanityFetch<Product[]>({ query: productsQuery, tags: ["product"] }),
  ]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="mb-8 text-2xl font-bold tracking-tight">
        Shop the collection
      </h1>
      <CategoryTabs categories={categories} products={products} />
    </div>
  );
}
