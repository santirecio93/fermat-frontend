import { useLanguage } from "../../context/LanguageContext";
import Icon from "../ui/Icon";

// Datos ilustrativos para el tablero de ejemplo del hero
const actual = [52, 61, 58, 70, 66, 78, 84, 92];
const target = [60, 62, 64, 66, 68, 72, 76, 80];

const W = 320;
const H = 120;
const MAX = 100;
const slot = W / actual.length;
const barW = slot * 0.52;
const y = (v) => H - (v / MAX) * H;

function DashboardMock() {
  const { t } = useLanguage();

  const targetLine = target
    .map((v, i) => `${i === 0 ? "M" : "L"}${(i * slot + slot / 2).toFixed(1)},${y(v).toFixed(1)}`)
    .join(" ");

  const kpis = [
    { label: t("mock.sales"), value: "$48,2M", delta: "+12,4%" },
    { label: t("mock.margin"), value: "34,6%", delta: "+1,8 pp" },
    { label: t("mock.stock"), value: "5,8x", delta: "+0,6x" },
  ];

  return (
    <div className="mock" aria-hidden="true">
      <div className="mock__top">
        <span className="mock__title">{t("mock.title")}</span>
        <span className="mock__tag">{t("mock.tag")}</span>
      </div>

      <div className="mock__kpis">
        {kpis.map((k) => (
          <div className="mock__kpi" key={k.label}>
            <div className="mock__kpi-label">{k.label}</div>
            <div className="mock__kpi-value">{k.value}</div>
            <div className="mock__kpi-delta">▲ {k.delta}</div>
          </div>
        ))}
      </div>

      <div className="mock__chart">
        <div className="mock__chart-head">
          <span>{t("mock.chart")}</span>
          <span className="mock__legend">
            <span>
              <i style={{ background: "var(--brand)" }} />
              {t("mock.actual")}
            </span>
            <span>
              <i style={{ background: "var(--accent)" }} />
              {t("mock.target")}
            </span>
          </span>
        </div>
        <svg viewBox={`0 0 ${W} ${H + 4}`} width="100%" role="img">
          {[0.25, 0.5, 0.75].map((f) => (
            <line key={f} x1="0" x2={W} y1={H * f} y2={H * f} stroke="#eef2f7" />
          ))}
          {actual.map((v, i) => (
            <rect
              key={i}
              x={i * slot + (slot - barW) / 2}
              y={y(v)}
              width={barW}
              height={H - y(v)}
              rx="4"
              fill={i === actual.length - 1 ? "var(--brand)" : "#9db6da"}
            />
          ))}
          <path d={targetLine} fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeDasharray="5 4" />
        </svg>
      </div>

      <div className="mock__float">
        <span className="mock__float-icon">
          <Icon name="bell" size={18} />
        </span>
        <span>
          <strong>{t("mock.floatTitle")}</strong>
          <small>{t("mock.floatText")}</small>
        </span>
      </div>
    </div>
  );
}

export default DashboardMock;
