import { useLanguage } from "../../context/LanguageContext";
import Icon from "../ui/Icon";

function AiReporting() {
  const { t } = useLanguage();

  return (
    <section className="section ai" id="ia">
      <div className="container split">
        <div>
          <span className="eyebrow">{t("ai.eyebrow")}</span>
          <h2 className="section__title">{t("ai.title")}</h2>
          <p className="section__subtitle">{t("ai.subtitle")}</p>

          <ul className="checklist">
            {t("ai.features").map((f) => (
              <li key={f.title}>
                <span className="icon-box">
                  <Icon name="sparkles" />
                </span>
                <div>
                  <strong>{f.title}</strong>
                  <span>{f.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="chat" aria-hidden="true">
          <div className="chat__msg chat__msg--user">
            <Icon name="message" size={16} />
            {t("ai.chatQuestion")}
          </div>
          <div className="chat__msg chat__msg--ai">
            <span className="chat__label">
              <Icon name="sparkles" size={14} />
              {t("ai.chatLabel")}
            </span>
            <p>{t("ai.chatAnswer")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AiReporting;
