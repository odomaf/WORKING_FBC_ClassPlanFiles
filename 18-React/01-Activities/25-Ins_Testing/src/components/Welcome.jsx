/**
 * Welcome component
 * - Demonstrates conditional rendering based on props
 * - Great for testing: given certain props, we expect certain text to appear
 *
 * Default behavior:
 * - If name or topic is missing, show a friendly fallback message
 * - If both are present, show a full welcome message
 */
export default function Welcome({ name, topic = "Web Development" }) {
  const hasAllInfo = Boolean(name) && Boolean(topic);

  return hasAllInfo ? (
    <h1>
      Welcome, {name}! We hope you learn a lot about {topic}.
    </h1>
  ) : (
    <h1>Hey there!</h1>
  );
}
