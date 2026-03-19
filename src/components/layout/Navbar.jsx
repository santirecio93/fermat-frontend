import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import logo from "../../assets/fondo.jpg";

function Navbar() {
  const { changeLanguage, lang, t } = useLanguage();

  return (
    <nav
      style={{
        height: "70px",
        padding: "0 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(0,0,0,0.9)",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src={logo}
          alt="Fermat logo"
          style={{
            width: "40px",
            height: "40px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <h2
          style={{
            color: "#38bdf8",
            margin: 0,
            fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
            fontWeight: 600,
            letterSpacing: "0.5px",
          }}
        >
          Fermat Analytics
        </h2>
      </div>

      {/* Navegación */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        
        <Link to="/" style={{ color: "#fff" }}>
          {t("home")}
        </Link>

        <Link to="/about" style={{ color: "#fff" }}>
          {lang === "es" ? "Quiénes somos" : "About"}
        </Link>

        {/* CONTACTO */}
        <Link to="/contact" style={{ color: "#fff" }}>
          {lang === "es" ? "Contacto" : "Contact"}
        </Link>

        {/* Idiomas */}
        <div style={{ display: "flex", gap: "5px", marginLeft: "20px" }}>
          <button onClick={() => changeLanguage("es")}>ES</button>
          <button onClick={() => changeLanguage("en")}>EN</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;