import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/image";
import type { Product } from "@/sanity/types";

export function ProductCard({ product }: { product: Product }) {
  const imageUrl = urlForImage(product.image)
    .width(600)
    .height(600)
    .fit("crop")
    .url();

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col gap-3"
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-900">
        <Image
          src={imageUrl}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        {!product.inStock && (
          <span className="absolute left-3 top-3 rounded-full bg-neutral-950/80 px-3 py-1 text-xs font-semibold text-white">
            Out of stock
          </span>
        )}
      </div>
      <span className="text-sm font-medium text-white/90">{product.name}</span>
    </Link>
  );
}
