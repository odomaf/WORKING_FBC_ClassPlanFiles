import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProfilePanel from "../components/ProfilePanel";
import UserProvider from "../utils/UserContext";

test("ProfilePanel renders within UserProvider context", () => {
  render(
    <UserProvider>
      <ProfilePanel />
    </UserProvider>,
  );

  const heading = screen.getByText(/student dashboard/i);
  expect(heading).toBeVisible();
});
