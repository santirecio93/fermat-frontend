import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import Icon from "../ui/Icon";
import logo from "../../assets/logo.jpg";

function LanguageSwitch() {
  const { lang, changeLanguage } = useLanguage();

  return (
    <div className="lang" role="group" aria-label="Idioma / Language">
      {["es", "en"].map((code) => (
        <button
          key={code}
          type="button"
          aria-pressed={lang === code}
          onClick={() => changeLanguage(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Cerrar el menú mobile al cambiar de página
  useEffect(() => setOpen(false), [pathname]);

  const links = [
    { to: "/", label: t("nav.home"), end: true },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ];

  const navLinkClass = ({ isActive }) => `nav__link${isActive ? " active" : ""}`;

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link to="/" className="nav__brand">
          <img src={logo} alt="" />
          Fermat Analytics
        </Link>

        <nav className="nav__links" aria-label="Principal">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={navLinkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <LanguageSwitch />
          <NavLink to="/signup" className={navLinkClass}>
            {t("nav.signup")}
          </NavLink>
          <Link to="/contact" className="btn btn--primary btn--sm">
            {t("nav.cta")}
          </Link>
          <button
            type="button"
            className="nav__toggle"
            aria-label={t("nav.menu")}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      <nav className={`nav__mobile${open ? " open" : ""}`} aria-label="Mobile">
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.end} className={navLinkClass}>
            {l.label}
          </NavLink>
        ))}
        <NavLink to="/signup" className={navLinkClass}>
          {t("nav.signup")}
        </NavLink>
        <Link to="/contact" className="btn btn--primary">
          {t("nav.cta")}
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
