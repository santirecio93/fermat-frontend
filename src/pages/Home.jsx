import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import DashboardMock from "../components/sections/DashboardMock";
import CtaBand from "../components/sections/CtaBand";
import AiReporting from "../components/sections/AiReporting";
import BusinessDrivers from "../components/sections/BusinessDrivers";
import SmbFocus from "../components/sections/SmbFocus";
import AdvancedAnalytics from "../components/sections/AdvancedAnalytics";
import Icon from "../components/ui/Icon";

const highlightIcons = ["layers", "target", "refresh"];

function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero__inner">
          <div>
            <span className="hero__badge">
              <span className="hero__badge-dot" />
              {t("hero.badge")}
            </span>
            <h1 className="hero__title">
              {t("hero.titleStart")} <span>{t("hero.titleHighlight")}</span>
            </h1>
            <p className="hero__subtitle">{t("hero.subtitle")}</p>
            <div className="hero__ctas">
              <Link to="/contact" className="btn btn--accent">
                {t("hero.ctaPrimary")} <Icon name="arrow" size={18} />
              </Link>
              <a href="#proceso" className="btn btn--ghost">
                {t("hero.ctaSecondary")}
              </a>
            </div>
            <ul className="hero__points">
              {t("hero.points").map((p) => (
                <li key={p}>
                  <Icon name="check" size={16} strokeWidth={3} /> {p}
                </li>
              ))}
            </ul>
          </div>
          <DashboardMock />
        </div>
      </section>

      {/* Highlights */}
      <section className="strip">
        <div className="container strip__grid">
          {t("highlights").map((h, i) => (
            <div className="strip__item" key={h.title}>
              <span className="icon-box">
                <Icon name={highlightIcons[i]} />
              </span>
              <div>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SmbFocus />

      <BusinessDrivers />

      <AdvancedAnalytics />

      {/* Servicios */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">{t("services.eyebrow")}</span>
            <h2 className="section__title">{t("services.title")}</h2>
            <p className="section__subtitle">{t("services.subtitle")}</p>
          </div>
          <div className="grid grid--3">
            {t("services.items").map((s) => (
              <article className="card" key={s.title}>
                <span className="icon-box">
                  <Icon name={s.icon} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AiReporting />

      {/* Proceso */}
      <section className="section section--soft" id="proceso">
        <div className="container">
          <div className="section__head section__head--center">
            <span className="eyebrow">{t("process.eyebrow")}</span>
            <h2 className="section__title">{t("process.title")}</h2>
          </div>
          <ol className="steps grid grid--4">
            {t("process.steps").map((s, i) => (
              <li className="step" key={s.title}>
                <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Áreas / KPIs */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">{t("areas.eyebrow")}</span>
            <h2 className="section__title">{t("areas.title")}</h2>
            <p className="section__subtitle">{t("areas.subtitle")}</p>
          </div>
          <div className="grid grid--4">
            {t("areas.items").map((a) => (
              <article className="area" key={a.title}>
                <span className="icon-box">
                  <Icon name={a.icon} />
                </span>
                <h3>{a.title}</h3>
                <ul>
                  {a.kpis.map((k) => (
                    <li key={k}>{k}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

export default Home;
