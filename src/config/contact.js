// Datos de contacto públicos de Fermat Analytics
export const CONTACT_EMAIL = "fermatanalytics@gmail.com";

// WhatsApp en formato internacional (Argentina, celular: 54 9 + área + número)
export const WHATSAPP_NUMBER = "5491155018894";
export const WHATSAPP_DISPLAY = "+54 9 11 5501-8894";

export const whatsappLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
