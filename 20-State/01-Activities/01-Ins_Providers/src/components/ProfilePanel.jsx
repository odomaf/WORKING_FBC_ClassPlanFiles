// This component represents a simple dashboard panel that reads
// user information from a React Context Provider higher in the app.

export default function ProfilePanel() {
  return (
    <>
      <h1>Student Dashboard</h1>

      <p className="text-larger">
        This component is receiving user information from a React Provider
        higher in the component tree. Context allows data such as the current
        user, theme settings, or preferences to be shared without manually
        passing props through every component.
      </p>

      <p className="text-larger">
        To see how the data is flowing, open the{" "}
        <strong>React Developer Tools</strong> and inspect this component inside
        the <code>Components</code> tab.
      </p>

      <div id="links"></div>

      <ul className="text-larger">
        <li>
          <a
            className="bullet"
            href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi">
            Install React DevTools for Chrome
          </a>
        </li>

        <li>
          <a
            className="bullet"
            href="https://addons.mozilla.org/en-US/firefox/addon/react-devtools/">
            Install React DevTools for Firefox
          </a>
        </li>
      </ul>
    </>
  );
}
