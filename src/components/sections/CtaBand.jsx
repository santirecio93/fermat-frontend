import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import Icon from "../ui/Icon";

function CtaBand() {
  const { t } = useLanguage();

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="cta">
          <div>
            <h2>{t("cta.title")}</h2>
            <p>{t("cta.text")}</p>
          </div>
          <Link to="/contact" className="btn btn--accent">
            {t("cta.button")} <Icon name="arrow" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CtaBand;
