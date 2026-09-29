import { useLanguage } from "../context/LanguageContext";
import CtaBand from "../components/sections/CtaBand";
import Icon from "../components/ui/Icon";

function About() {
  const { t } = useLanguage();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">{t("about.eyebrow")}</span>
          <h1>{t("about.title")}</h1>
          <p>{t("about.subtitle")}</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split__text">
            <h2 className="section__title" style={{ marginBottom: 20 }}>
              {t("about.storyTitle")}
            </h2>
            {t("about.story").map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <aside className="quote">
            <div className="quote__formula">
              x<sup>n</sup> + y<sup>n</sup> ≠ z<sup>n</sup>
            </div>
            <h3 style={{ marginTop: 20 }}>{t("about.nameTitle")}</h3>
            <p>{t("about.nameText")}</p>
          </aside>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section__head section__head--center">
            <h2 className="section__title">{t("about.valuesTitle")}</h2>
          </div>
          <div className="grid grid--3">
            {t("about.values").map((v) => (
              <article className="card" key={v.title}>
                <span className="icon-box">
                  <Icon name={v.icon} />
                </span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div style={{ paddingTop: 96 }}>
        <CtaBand />
      </div>
    </>
  );
}

export default About;
