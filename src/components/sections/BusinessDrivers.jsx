import { useLanguage } from "../../context/LanguageContext";

function BusinessDrivers() {
  const { t } = useLanguage();
  const tree = t("drivers.tree");

  return (
    <section className="section">
      <div className="container split">
        <div>
          <span className="eyebrow">{t("drivers.eyebrow")}</span>
          <h2 className="section__title">{t("drivers.title")}</h2>
          <p className="section__subtitle">{t("drivers.subtitle")}</p>

          <ol className="drivers__points">
            {t("drivers.points").map((p, i) => (
              <li key={p.title}>
                <span className="drivers__num">{i + 1}</span>
                <div>
                  <strong>{p.title}</strong>
                  <span>{p.text}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <figure className="tree">
          <div className="tree__root">{tree.root}</div>
          <div className="tree__branches">
            {tree.branches.map((b) => (
              <div className="tree__branch" key={b.name}>
                <div className="tree__node">{b.name}</div>
                <ul>
                  {b.leaves.map((leaf) => (
                    <li key={leaf}>{leaf}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <figcaption>{tree.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default BusinessDrivers;
