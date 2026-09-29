import { render, screen } from "@testing-library/react";
import App from "./App";
import { LanguageProvider } from "./context/LanguageContext";

test("renderiza el hero de la home", () => {
  render(
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/decisiones/i);
});
