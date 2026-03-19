function Card({ title, value }) {
  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "12px",
        minWidth: "200px",
      }}
    >
      <h4 style={{ color: "#94a3b8" }}>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
}

export default Card;