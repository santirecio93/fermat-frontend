import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, whatsappLink } from "../../config/contact";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <strong>Fermat Analytics</strong>
            <p>{t("footer.tagline")}</p>
            <a className="footer__email" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            <a
              className="footer__email"
              href={whatsappLink(t("contact.whatsappMessage"))}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
          </div>
          <nav className="footer__links" aria-label="Footer">
            <Link to="/">{t("nav.home")}</Link>
            <Link to="/about">{t("nav.about")}</Link>
            <Link to="/contact">{t("nav.contact")}</Link>
            <Link to="/signup">{t("nav.signup")}</Link>
          </nav>
        </div>
        <div className="footer__bottom">
          © {new Date().getFullYear()} Fermat Analytics. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
