import { useLanguage } from "../../context/LanguageContext";
import Icon from "../ui/Icon";

function SmbFocus() {
  const { t } = useLanguage();

  return (
    <section className="section smb">
      <div className="container">
        <div className="smb__box">
          <div className="smb__head">
            <span className="eyebrow">{t("smb.eyebrow")}</span>
            <h2 className="section__title">{t("smb.title")}</h2>
            <p className="section__subtitle">{t("smb.subtitle")}</p>
          </div>
          <div className="grid grid--4">
            {t("smb.items").map((item) => (
              <div className="smb__item" key={item.title}>
                <span className="icon-box">
                  <Icon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SmbFocus;
