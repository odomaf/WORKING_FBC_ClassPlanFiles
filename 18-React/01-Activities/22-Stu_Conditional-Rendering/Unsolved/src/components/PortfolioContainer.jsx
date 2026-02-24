import { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  // `currentPage` tracks which page should be displayed in the main content area.
  // When currentPage changes, React re-renders and we show a different component.
  const [currentPage, setCurrentPage] = useState("Home");

  // TODO: Add a comment describing what this function does.
  // Hint: It chooses which page component to render based on `currentPage`.
  const renderPage = () => {
    if (currentPage === "Home") return <Home />;
    if (currentPage === "About") return <About />;
    if (currentPage === "Blog") return <Blog />;
    return <Contact />;
  };

  // TODO: Add a comment describing what this function does.
  // Hint: This updates state so the UI switches pages.
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* TODO: Add a comment explaining what props we pass to NavTabs and why */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

      {/* TODO: Add a comment explaining why we call renderPage() here */}
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}
