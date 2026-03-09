import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StudentDirectory from "../components/StudentDirectory";
import { StudentProvider } from "../utils/StudentContext";

test("StudentDirectory displays shared student data from context", () => {
  render(
    <StudentProvider>
      <StudentDirectory />
    </StudentProvider>,
  );

  expect(screen.getByText(/student directory/i)).toBeVisible();
  expect(screen.getByText(/alex kim/i)).toBeVisible();
  expect(screen.getByText(/computer science/i)).toBeVisible();
});
