import { render, screen } from "@testing-library/react";
import App from "../App";

test("App renders the Garage Inventory heading", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /garage inventory/i }),
  ).toBeTruthy();
});
