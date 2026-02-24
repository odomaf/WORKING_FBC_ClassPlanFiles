// TODO: Add a comment explaining what's happening in the function parameters.
// Hint: This is object destructuring from the props object.
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          // TODO (Bonus): Add a comment explaining the ternary operator below.
          // Hint: It conditionally applies the "active" class based on currentPage.
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}>
          Home
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          // TODO: Add a comment explaining how this className logic works.
          className={currentPage === "About" ? "nav-link active" : "nav-link"}>
          About
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange("Blog")}
          // TODO: Add a comment explaining how this className logic works.
          className={currentPage === "Blog" ? "nav-link active" : "nav-link"}>
          Blog
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          // TODO: Add a comment explaining how this className logic works.
          className={
            currentPage === "Contact" ? "nav-link active" : "nav-link"
          }>
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
