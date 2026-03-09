import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ThemePanel from "../components/ThemePanel";
import ThemeProvider from "../utils/ThemeContext";

test("ThemePanel displays the theme demo heading", () => {
  render(
    <ThemeProvider>
      <ThemePanel />
    </ThemeProvider>,
  );

  expect(screen.getByText(/theme consumer demo/i)).toBeVisible();
});
