export const siteConfig = {
  name: "Mount 10 Sports",
  tagline: "Step up your game.",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "10000000000",
  tiktokHandle: process.env.NEXT_PUBLIC_TIKTOK_HANDLE || "mount10sports",
  instagramHandle: process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || "",
};

export function whatsappLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

export function tiktokLink() {
  return `https://www.tiktok.com/@${siteConfig.tiktokHandle}`;
}

export function instagramLink() {
  return siteConfig.instagramHandle
    ? `https://www.instagram.com/${siteConfig.instagramHandle}`
    : null;
}
