import Image from "next/image";
import Link from "next/link";

export function NotFoundContent() {
  return (
    <div className="flex flex-col items-center gap-6 px-4 py-24 text-center sm:px-6">
      <Image src="/logo-mark-dark.svg" alt="" width={64} height={80} />
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Page not found
        </h1>
        <p className="text-white/70">
          We couldn&rsquo;t find what you were looking for.
        </p>
      </div>
      <Link
        href="/products"
        className="inline-flex items-center rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-lime-300"
      >
        Shop the collection
      </Link>
    </div>
  );
}
