import { SITE } from "../config/site";

export function buildWhatsAppUrl(message: string): string | null {
  const number = SITE.contact.whatsappNumber.replace(/\D/g, "");

  if (number.length < 8) {
    return null;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
