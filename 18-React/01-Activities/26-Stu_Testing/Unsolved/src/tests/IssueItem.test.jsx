import pretty from "pretty";
import { render } from "@testing-library/react";
// TODO: Import the IssueItem component here
// import IssueItem from "../components/IssueItem";

const issue = {
  url: "https://api.github.com/repos/microsoft/vscode/issues/68",
  html_url: "https://github.com/microsoft/vscode/issues/68",
  id: 117635943,
  node_id: "MDU6SXNzdWUxMTc2MzU5NDM=",
  number: 68,
  title: "Git: Support git history in VSCode",
};

describe("IssueItem", () => {
  it("should contain the expected text", () => {
    // TODO: Render IssueItem using the issue object above
    // Hint:
    // render(<IssueItem key={issue.id} issue={issue} />);
    // render();

    expect(document.querySelector(".item").textContent).toBe(
      "Git: Support git history in VSCode",
    );
  });

  it("should match snapshot", () => {
    // TODO: Render IssueItem first
    // render(<IssueItem key={issue.id} issue={issue} />);
    // Then format the HTML and save snapshot
    // const html = pretty(document.querySelector(".item").innerHTML);
    // expect(html).toMatchSnapshot();
  });
});
