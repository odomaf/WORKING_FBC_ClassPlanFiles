// This component receives data from its parent through props.
// Props allow components to be reusable and dynamic.
function ProfileCard(props) {
  return (
    <div className="card m-4 p-3">
      <h2>{props.name}</h2>
      <p>{props.role}</p>
    </div>
  );
}

export default ProfileCard;
