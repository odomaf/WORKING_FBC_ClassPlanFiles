export default function Welcome({ loggedIn, onToggle }) {
  // Conditional rendering means: React displays different JSX
  // depending on state (or props).

  return (
    <div className="d-flex justify-content-center">
      {/* ✅ Ternary operator is great when you have "either/or" UI */}
      {loggedIn ? (
        <div className="card text-center" style={{ width: 520 }}>
          <div className="card-body">
            <div className="display-6 mb-2" aria-hidden="true">
              🎉
            </div>

            <h5 className="card-title mb-2">You are signed in!</h5>
            <p className="text-muted mb-4">
              This section only renders when <code>loggedIn</code> is true.
            </p>

            <button
              className="btn btn-primary"
              type="button"
              onClick={onToggle}>
              Log out
            </button>
          </div>
        </div>
      ) : (
        <div className="card text-center" style={{ width: 520 }}>
          <div className="card-body">
            <div className="display-6 mb-2" aria-hidden="true">
              🛑
            </div>

            <h5 className="card-title mb-2">You are currently logged out</h5>
            <p className="text-muted mb-4">
              This section only renders when <code>loggedIn</code> is false.
            </p>

            <button
              className="btn btn-primary"
              type="button"
              onClick={onToggle}>
              Log in
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
