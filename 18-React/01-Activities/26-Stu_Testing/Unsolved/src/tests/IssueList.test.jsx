import pretty from "pretty";
import { render } from "@testing-library/react";
// TODO: Import the IssueList component here
// import IssueList from "../components/IssueList";

const issues = [
  {
    url: "https://api.github.com/repos/microsoft/vscode/issues/68",
    html_url: "https://github.com/microsoft/vscode/issues/68",
    id: 117635943,
    node_id: "MDU6SXNzdWUxMTc2MzU5NDM=",
    number: 68,
    title: "Git: Support git history in VSCode",
  },
  {
    url: "https://api.github.com/repos/microsoft/vscode/issues/127",
    html_url: "https://github.com/microsoft/vscode/issues/127",
    id: 117711073,
    node_id: "MDU6SXNzdWUxMTc3MTEwNzM=",
    number: 127,
    title: "Provide option to opt out of line ending normalisation for files",
  },
];

describe("IssueList", () => {
  it("should render and match snapshot", () => {
    // TODO: Render the component
    // render(<IssueList issues={issues} />);
    // TODO: Format the rendered HTML with pretty
    // const html = pretty(document.querySelector(".list").outerHTML);
    // TODO: Expect the HTML to match the snapshot
    // expect(html).toMatchSnapshot();
  });

  it('should contain text "Git: Support git history in VSCode"', () => {
    // TODO: Render the component
    // render(<IssueList issues={issues} />);
    // TODO: Check the rendered HTML contains the expected text
    // expect(document.querySelector(".list").innerHTML).toContain(
    //   "Git: Support git history in VSCode"
    // );
  });
});
