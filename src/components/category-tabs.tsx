"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import type { Category, Product } from "@/sanity/types";

export function CategoryTabs({
  categories,
  products,
}: {
  categories: Category[];
  products: Product[];
}) {
  const [active, setActive] = useState<string | "all">("all");

  const filtered = useMemo(() => {
    if (active === "all") return products;
    return products.filter((product) => product.category?.slug === active);
  }, [active, products]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-2">
        <TabButton
          label="All"
          isActive={active === "all"}
          onClick={() => setActive("all")}
        />
        {categories.map((category) => (
          <TabButton
            key={category._id}
            label={category.name}
            isActive={active === category.slug}
            onClick={() => setActive(category.slug)}
          />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-white/60">No products in this category yet.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

function TabButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
        isActive
          ? "bg-lime-400 text-neutral-950"
          : "bg-white/10 text-white/80 hover:bg-white/20"
      }`}
    >
      {label}
    </button>
  );
}
