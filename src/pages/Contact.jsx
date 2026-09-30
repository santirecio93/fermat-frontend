import { useLanguage } from "../context/LanguageContext";
import useFormSubmit from "../hooks/useFormSubmit";
import Icon from "../components/ui/Icon";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, whatsappLink } from "../config/contact";

function Contact() {
  const { t } = useLanguage();
  const { values, status, handleChange, submit } = useFormSubmit("/api/contact", {
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleSubmit = (e) =>
    submit(e, { successMessage: t("contact.success"), errorMessage: t("contact.error") });

  const loading = status.state === "loading";

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{t("contact.eyebrow")}</span>
          <h1>{t("contact.title")}</h1>
          <p>{t("contact.subtitle")}</p>
        </div>
      </section>

      <section className="section">
        <div className="container form-layout">
          <div>
            <h2 className="section__title">{t("contact.expectTitle")}</h2>
            <ul className="checklist">
              {t("contact.expect").map((item) => (
                <li key={item.title}>
                  <span className="icon-box">
                    <Icon name="check" strokeWidth={2.5} />
                  </span>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="direct">
              <span className="icon-box">
                <Icon name="mail" />
              </span>
              <div>
                <strong>{t("contact.directTitle")}</strong>
                <span>{t("contact.directText")}</span>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                <a
                  href={whatsappLink(t("contact.whatsappMessage"))}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>
              </div>
            </div>
          </div>

          <div className="form-card">
            <h2>{t("contact.formTitle")}</h2>
            <p>{t("contact.formText")}</p>

            <form className="form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="nombre">{t("contact.name")}</label>
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  autoComplete="name"
                  value={values.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="email">{t("contact.email")}</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="mensaje">{t("contact.message")}</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder={t("contact.messagePlaceholder")}
                  value={values.mensaje}
                  onChange={handleChange}
                  required
                />
              </div>

              {status.message && (
                <div className={`alert alert--${status.state}`} role="status">
                  {status.message}
                </div>
              )}

              <button type="submit" className="btn btn--primary btn--block" disabled={loading}>
                {loading ? t("contact.sending") : t("contact.submit")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
