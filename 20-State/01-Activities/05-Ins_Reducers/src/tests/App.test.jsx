import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CarComponent from "../components/CarComponent";
import CarProvider from "../utils/CarContext";

test("CarComponent displays cars from context", () => {
  render(
    <CarProvider>
      <CarComponent />
    </CarProvider>,
  );

  // Verify a car model appears on the screen
  expect(screen.getByText(/camry/i)).toBeVisible();

  // Verify the year text also appears
  expect(screen.getByText(/2022/i)).toBeVisible();
});
