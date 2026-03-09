import { render, screen } from "@testing-library/react";
import CarList from "../components/CarList";
import { GlobalProvider } from "../utils/GlobalState";

test("CarList renders existing cars from global state", () => {
  render(
    <GlobalProvider>
      <CarList />
    </GlobalProvider>,
  );

  expect(screen.getByText(/2008 Honda Civic/i)).toBeTruthy();
  expect(screen.getByText(/2021 Tesla Model Y/i)).toBeTruthy();
});
