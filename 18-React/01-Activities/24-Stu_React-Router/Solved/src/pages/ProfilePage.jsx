import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Profile from "../components/UI/ProfileSections/ProfileDetailed";
import API from "../utils/API";

export default function ProfilePage() {
  const [user, setUser] = useState({});

  // ✅ URL params come from the route definition: "profile/:id"
  const { id } = useParams();

  const fetchData = async () => {
    const { data } = await API.getSingleUser(id);
    setUser(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container pt-2">
      <h2 className="mb-3">Profile</h2>

      {/* Conditional render while data loads */}
      {user.name ? <Profile user={user} /> : <p>Loading...</p>}

      <footer className="mt-4">
        <Link to="/">← Go Back</Link>
      </footer>
    </div>
  );
}
