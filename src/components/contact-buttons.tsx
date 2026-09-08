import { instagramLink, tiktokLink, whatsappLink } from "@/lib/site-config";

export function ContactButtons({ productName }: { productName: string }) {
  const instagram = instagramLink();

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={whatsappLink(`Hi! I'm interested in the ${productName}.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-neutral-950 transition hover:brightness-95"
      >
        Chat on WhatsApp
      </a>
      <a
        href={tiktokLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition hover:brightness-95"
      >
        Follow on TikTok
      </a>
      {instagram && (
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/60"
        >
          Instagram
        </a>
      )}
    </div>
  );
}
