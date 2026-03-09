import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StudentStats from "../components/StudentStats";
import StudentDirectory from "../components/StudentDirectory";
import StudentProvider from "../utils/StudentContext";

test("StudentDirectory renders", () => {
  render(
    <StudentProvider>
      <StudentDirectory />
    </StudentProvider>,
  );

  expect(screen.getByText(/student dashboard/i)).toBeVisible();
  expect(screen.getByText(/alex kim/i)).toBeVisible();
});

test("StudentStats renders", () => {
  render(
    <StudentProvider>
      <StudentStats />
    </StudentProvider>,
  );

  expect(screen.getByText(/students in shared state/i)).toBeVisible();
  expect(screen.getByText(/majors in shared state/i)).toBeVisible();
});
