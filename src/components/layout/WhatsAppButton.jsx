import { useLanguage } from "../../context/LanguageContext";
import { whatsappLink } from "../../config/contact";

// Botón flotante de WhatsApp, visible en todas las páginas
function WhatsAppButton() {
  const { t } = useLanguage();

  return (
    <a
      className="wa-float"
      href={whatsappLink(t("contact.whatsappMessage"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("contact.whatsappLabel")}
      title={t("contact.whatsappLabel")}
    >
      <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true">
        <path d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 7L3 29l6.4-2c2 1.1 4.3 1.7 6.6 1.7 7.2 0 13-5.7 13-12.8S23.2 3 16 3zm0 23.4c-2.1 0-4.1-.6-5.9-1.6l-.4-.3-3.8 1.2 1.2-3.7-.3-.4c-1.2-1.8-1.8-3.8-1.8-5.9C5 9.8 9.9 5.1 16 5.1s11 4.7 11 10.7-4.9 10.6-11 10.6zm6-7.9c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.9 8.9 0 0 1-4.4-3.8c-.3-.6.3-.5 1-1.8.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.1-1.2 2.7 1.2 3.2 1.4 3.4 2.4 3.6 5.8 5c2.1.9 3 .9 4 .8.7-.1 1.9-.8 2.2-1.5s.3-1.3.2-1.5c-.1-.1-.3-.2-.7-.4z" />
      </svg>
    </a>
  );
}

export default WhatsAppButton;
