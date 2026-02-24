export default function AboutPage() {
  return (
    <div className="container pt-2">
      <h2 className="mb-3">About</h2>
      <p className="mb-0">
        This lab demonstrates client-side routing with React Router. Each URL
        maps to a page component, and <code>Outlet</code> swaps the content
        without a full refresh.
      </p>
    </div>
  );
}
