import { siteConfig } from '@/data/site';

export type Enquiry = {
  name: string;
  phone: string;
  location: string;
  acType: string;
  problem: string;
  preferredTime: string;
  message: string;
};

export function buildWhatsAppUrl(data: Enquiry) {
  const text = `Hi, I would like to book an AC service.\n\nName: ${data.name}\nPhone: ${data.phone}\nLocation: ${data.location}\nAC Type: ${data.acType}\nProblem: ${data.problem}\nPreferred Time: ${data.preferredTime}\nMessage: ${data.message || '-'}\n\nPlease contact me.`;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
