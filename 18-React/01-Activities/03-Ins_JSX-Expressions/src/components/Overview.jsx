import FeatureList from "./FeatureList";

// Overview is a reusable React component.
// It displays a page title and includes another component.
function Overview() {
  const pageTitle = "Understanding React Structure";

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title text-primary">{pageTitle}</h2>

          {/* Rendering another component inside this component */}
          <FeatureList />
        </div>
      </div>
    </div>
  );
}

export default Overview;
