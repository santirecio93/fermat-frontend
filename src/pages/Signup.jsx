import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import useFormSubmit from "../hooks/useFormSubmit";

function Signup() {
  const { t } = useLanguage();
  const { values, status, handleChange, submit } = useFormSubmit("/api/signup", {
    nombre: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) =>
    submit(e, { successMessage: t("signup.success"), errorMessage: t("signup.error") });

  const loading = status.state === "loading";

  return (
    <section className="section section--soft">
      <div className="container">
        <div className="form-card form-card--narrow">
          <h2>{t("signup.title")}</h2>
          <p>{t("signup.text")}</p>

          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="nombre">{t("signup.name")}</label>
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
              <label htmlFor="email">{t("signup.email")}</label>
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
              <label htmlFor="password">{t("signup.password")}</label>
              <input
                id="password"
                type="password"
                name="password"
                autoComplete="new-password"
                minLength={8}
                value={values.password}
                onChange={handleChange}
                required
              />
              <small>{t("signup.passwordHint")}</small>
            </div>

            {status.message && (
              <div className={`alert alert--${status.state}`} role="status">
                {status.message}
              </div>
            )}

            <button type="submit" className="btn btn--primary btn--block" disabled={loading}>
              {loading ? t("signup.sending") : t("signup.submit")}
            </button>

            <p className="form-note">
              {t("signup.contactPrompt")} <Link to="/contact">{t("signup.contactLink")}</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;
