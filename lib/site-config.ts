const WHATSAPP_NUMBER = "2348069563676";
const WHATSAPP_MESSAGE = "Hi Olusola, I'd like to get started as a new client.";

export const siteConfig = {
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
};
