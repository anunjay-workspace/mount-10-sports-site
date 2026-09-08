import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="flex flex-col items-center gap-8 px-4 py-24 text-center sm:px-6">
      <Image
        src="/logo-main.svg"
        alt={siteConfig.name}
        width={220}
        height={192}
        priority
      />
      <div className="max-w-xl space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {siteConfig.tagline}
        </h1>
        <p className="text-base text-white/70">
          Browse the latest shoes in store. Spot something you like? Reach out
          on WhatsApp or TikTok and we&rsquo;ll take it from there.
        </p>
      </div>
      <Link
        href="/products"
        className="inline-flex items-center rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-lime-300"
      >
        Shop the collection
      </Link>
    </section>
  );
}
