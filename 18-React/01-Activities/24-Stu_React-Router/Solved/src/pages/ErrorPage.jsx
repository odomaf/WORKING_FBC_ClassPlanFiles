import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="container pt-4 text-center">
      <h2 className="mb-2">Oops — page not found</h2>
      <p className="text-muted">
        {error?.statusText || error?.message || "Unknown error"}
      </p>

      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
    </div>
  );
}
