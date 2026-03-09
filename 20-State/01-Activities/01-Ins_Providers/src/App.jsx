import UserProvider from "./utils/UserContext";
import ProfilePanel from "./components/ProfilePanel";
import "./App.css";

export default function App() {
  return (
    <div>
      <UserProvider>
        <ProfilePanel />
      </UserProvider>
    </div>
  );
}
