import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ContactButtons } from "@/components/contact-buttons";
import { sanityFetch } from "@/sanity/fetch";
import { productBySlugQuery } from "@/sanity/queries";
import { urlForImage } from "@/sanity/image";
import type { ProductDetail } from "@/sanity/types";

export const revalidate = 3600;

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await sanityFetch<ProductDetail | null>({
    query: productBySlugQuery,
    params: { slug },
    tags: ["product"],
  });

  if (!product) notFound();

  const imageUrl = urlForImage(product.image).width(1000).height(1000).fit("crop").url();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Link href="/products" className="text-sm text-white/60 hover:text-white">
        &larr; Back to collection
      </Link>
      <div className="mt-6 grid gap-10 sm:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-900">
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col gap-4">
          {product.category && (
            <span className="text-xs font-semibold uppercase tracking-wide text-lime-400">
              {product.category.name}
            </span>
          )}
          <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
          {product.description && (
            <p className="text-white/70">{product.description}</p>
          )}
          {!product.inStock && (
            <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">
              Currently out of stock
            </span>
          )}
          <div className="mt-2">
            <ContactButtons productName={product.name} />
          </div>
        </div>
      </div>
    </div>
  );
}
