import { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  // State controls which page we show in the <main> section.
  // Changing this state triggers a re-render.
  const [currentPage, setCurrentPage] = useState("Home");

  // Conditional rendering:
  // We return a different component depending on the currentPage value.
  const renderPage = () => {
    if (currentPage === "Home") return <Home />;
    if (currentPage === "About") return <About />;
    if (currentPage === "Blog") return <Blog />;
    return <Contact />;
  };

  // This gets passed to NavTabs. When a tab is clicked, NavTabs calls this
  // function with the page name (ex: "About"), which updates state here.
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Passing state + a state-updater function to the child component */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

      {/* We call renderPage() to decide which page component shows up */}
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}
