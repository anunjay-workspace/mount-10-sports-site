import Image from "next/image";
import { siteConfig, tiktokLink, whatsappLink } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-neutral-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center sm:px-6">
        <Image
          src="/logo-mark-dark.svg"
          alt={siteConfig.name}
          width={32}
          height={40}
        />
        <p className="text-sm text-white/60">
          {siteConfig.name} &mdash; {siteConfig.tagline}
        </p>
        <div className="flex gap-4 text-sm font-medium text-white/80">
          <a
            href={whatsappLink("Hi! I have a question about your shoes.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            WhatsApp
          </a>
          <a
            href={tiktokLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            TikTok
          </a>
        </div>
        <p className="text-xs text-white/40">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
