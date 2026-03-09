import { render, screen } from "@testing-library/react";
import CarForm from "../components/CarForm";
import { GlobalProvider } from "../utils/GlobalState";

test("CarForm renders the form fields and add button", () => {
  render(
    <GlobalProvider>
      <CarForm />
    </GlobalProvider>,
  );

  expect(screen.getByPlaceholderText(/make/i)).toBeTruthy();
  expect(screen.getByPlaceholderText(/model/i)).toBeTruthy();
  expect(screen.getByPlaceholderText(/year/i)).toBeTruthy();
  expect(screen.getByRole("button", { name: /add car/i })).toBeTruthy();
});
