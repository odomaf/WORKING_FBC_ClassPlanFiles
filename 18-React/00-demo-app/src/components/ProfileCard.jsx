// TODO: Add a comment explaining what props are

function ProfileCard(props) {
  return (
    <div className="card m-4 p-3">
      {/* TODO: Render the name prop inside an h2 tag */}
      <h2>{props.name}</h2>

      {/* TODO: Render the role prop inside a paragraph tag */}
      <p>{props.role}</p>
    </div>
  );
}

export default ProfileCard;
