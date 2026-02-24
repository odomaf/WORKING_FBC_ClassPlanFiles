import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

describe("Welcome component", () => {
  it("renders fallback text when missing name and topic", () => {
    render(<Welcome />);

    // getByRole finds what a user would see (a heading)
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Hey there!");
  });

  it("renders welcome text when name and topic are provided", () => {
    render(<Welcome name="Xander" topic="React" />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(
      "Welcome, Xander! We hope you learn a lot about React.",
    );
  });

  it("renders with any name and topic", () => {
    render(<Welcome name="Tammer" topic="Mocks" />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(
      "Welcome, Tammer! We hope you learn a lot about Mocks.",
    );
  });

  it("uses the default topic when only name is provided", () => {
    render(<Welcome name="Grace" />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(
      "Welcome, Grace! We hope you learn a lot about Web Development.",
    );
  });

  it("renders fallback text when only topic is provided (no name)", () => {
    render(<Welcome topic="Node" />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Hey there!");
  });
});
