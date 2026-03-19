import { useLanguage } from "../../context/LanguageContext";

function About() {
  const { lang } = useLanguage();

  return (
    <div
      style={{
        padding: "60px 20px",
        textAlign: "center",
        color: "white",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        {lang === "es" ? "Quiénes somos" : "About us"}
      </h2>

      <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
        {lang === "es"
          ? "Convertimos tus datos en información estratégica para mejorar la toma de decisiones. Integramos los datos de tu ERP y, mediante herramientas como Power BI, los transformamos en KPIs claros, accionables y en tiempo real, diseñados para potenciar la gestión y la visión del equipo directivo."
          : "We transform your data into strategic insights to enhance decision-making. By integrating data from your ERP and leveraging tools like Power BI, we convert it into clear, actionable, real-time KPIs designed to empower management and executive teams."}
      </p>
    </div>
  );
}

export default About;