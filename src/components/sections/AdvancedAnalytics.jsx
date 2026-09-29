import { useLanguage } from "../../context/LanguageContext";

// Mini gráficos ilustrativos para cada tarjeta
const clusters = [
  { color: "var(--brand)", cx: 52, cy: 46, pts: [[-18, -8], [-8, 10], [6, -14], [14, 6], [-2, 0], [18, -4], [0, 16]] },
  { color: "var(--accent)", cx: 144, cy: 58, pts: [[-16, -10], [-6, 8], [10, -8], [16, 10], [0, -2], [-18, 4], [6, 16]] },
  { color: "#8aa3c7", cx: 232, cy: 42, pts: [[-14, -4], [0, 10], [14, -8], [-4, -16], [10, 8], [-16, 8]] },
];

function ClustersVisual() {
  return (
    <svg viewBox="0 0 280 100" width="100%">
      {clusters.map((c) => (
        <g key={c.cx}>
          <circle cx={c.cx} cy={c.cy} r="34" fill={c.color} opacity="0.1" />
          {c.pts.map(([dx, dy], i) => (
            <circle key={i} cx={c.cx + dx} cy={c.cy + dy} r="5.5" fill={c.color} />
          ))}
        </g>
      ))}
    </svg>
  );
}

const abc = [38, 26, 16, 7, 5, 3, 2, 1.5, 1, 0.5];

function AbcVisual() {
  const max = abc[0];
  let acc = 0;
  const line = abc
    .map((v, i) => {
      acc += v;
      return `${i === 0 ? "M" : "L"}${i * 28 + 12},${96 - acc * 0.9}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 280 100" width="100%">
      {abc.map((v, i) => (
        <rect
          key={i}
          x={i * 28 + 3}
          y={96 - (v / max) * 80}
          width="18"
          height={(v / max) * 80}
          rx="3"
          fill={i < 2 ? "var(--brand)" : i < 5 ? "#8aa3c7" : "#d3deec"}
        />
      ))}
      <path d={line} fill="none" stroke="var(--accent)" strokeWidth="2.5" />
      <text x="4" y="10" fontSize="10" fontWeight="700" fill="var(--brand)">A</text>
      <text x="60" y="10" fontSize="10" fontWeight="700" fill="#8aa3c7">B</text>
      <text x="144" y="10" fontSize="10" fontWeight="700" fill="#a9b8cc">C</text>
    </svg>
  );
}

const history = [60, 52, 58, 70, 66, 74, 68, 62, 71, 80, 76, 84];
const forecast = [84, 80, 88, 94, 90];

function ForecastVisual({ t }) {
  const step = 280 / (history.length + forecast.length - 2);
  const y = (v) => 100 - v;
  const pts = (arr, offset) => arr.map((v, i) => [(i + offset) * step, y(v)]);
  const toPath = (p) => p.map(([x, yy], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${yy}`).join(" ");

  const h = pts(history, 0);
  const f = pts(forecast, history.length - 1);
  // Banda de confianza que se abre a medida que se aleja en el tiempo
  const upper = f.map(([x, yy], i) => [x, yy - i * 4]);
  const lower = f.map(([x, yy], i) => [x, yy + i * 4]).reverse();
  const band = toPath([...upper, ...lower]) + " Z";

  return (
    <svg viewBox="0 0 280 100" width="100%">
      <path d={band} fill="var(--accent)" opacity="0.18" />
      <path d={toPath(h)} fill="none" stroke="var(--brand)" strokeWidth="2.5" />
      <path d={toPath(f)} fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeDasharray="5 4" />
      <line x1={f[0][0]} x2={f[0][0]} y1="8" y2="96" stroke="#c9d6ea" strokeDasharray="2 3" />
      <text x="4" y="94" fontSize="9" fill="var(--muted)">{t("analytics.legendHistory")}</text>
      <text x={f[0][0] + 6} y="94" fontSize="9" fill="var(--muted)">{t("analytics.legendForecast")}</text>
    </svg>
  );
}

function AdvancedAnalytics() {
  const { t } = useLanguage();

  const visuals = {
    clusters: <ClustersVisual />,
    abc: <AbcVisual />,
    forecast: <ForecastVisual t={t} />,
  };

  return (
    <section className="section section--soft">
      <div className="container">
        <div className="section__head section__head--center">
          <span className="eyebrow">{t("analytics.eyebrow")}</span>
          <h2 className="section__title">{t("analytics.title")}</h2>
          <p className="section__subtitle">{t("analytics.subtitle")}</p>
        </div>
        <div className="grid grid--3">
          {t("analytics.items").map((item) => (
            <article className="card analytics__card" key={item.visual}>
              <div className="analytics__visual" aria-hidden="true">
                {visuals[item.visual]}
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <ul className="analytics__tags">
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdvancedAnalytics;
