import pretty from "pretty";
import { render } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

describe("SearchBar", () => {
  it("should render and match snapshot", () => {
    // Render the component
    render(<SearchBar />);

    // Format the rendered output for a cleaner snapshot
    const html = pretty(document.querySelector(".search-bar").outerHTML);

    // Verify the output matches snapshot
    expect(html).toMatchSnapshot();
  });
});
