import fondo from "../../assets/fondo.jpg";

function Background({ children }) {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 70px)", // 👈 descuenta navbar
        width: "100%",
        backgroundImage: `
          linear-gradient(
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.85)
          ),
          url(${fondo})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
}

export default Background;