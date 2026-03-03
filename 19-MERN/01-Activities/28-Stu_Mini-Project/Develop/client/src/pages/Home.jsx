import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBattles } from "../utils/api";

const Home = () => {
  const [battleList, setBattleList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const loadBattles = async () => {
      try {
        const res = await getAllBattles();
        if (!res.ok) throw new Error("Failed to load battles");
        const battles = await res.json();
        setBattleList(battles ?? []);
      } catch (err) {
        console.error(err);
        setErrorMsg("Something went wrong loading battles.");
      } finally {
        setLoading(false);
      }
    };

    loadBattles();
  }, []);

  if (loading)
    return <h2 className="text-center page-title">Loading battles...</h2>;
  if (errorMsg) return <h2 className="text-center page-title">{errorMsg}</h2>;

  return (
    <div className="container">
      <h1 className="text-center page-title">Dev Tools Battle</h1>
      <p className="text-center subtitle">Pick your stack. Cast your vote.</p>

      <div className="flex-row justify-center">
        <Link className="btn btn-primary cta-btn" to="/battle">
          Create a Battle
        </Link>
      </div>

      {battleList.length === 0 ? (
        <div className="card mt-3">
          <div className="card-body text-center">
            <h2>No battles yet</h2>
            <p>Create the first battle to get things started.</p>
          </div>
        </div>
      ) : (
        <div className="battle-grid mt-3">
          {battleList.map((battle) => (
            <div key={battle._id} className="card">
              <div className="card-header text-center">
                {battle.tool1?.name} vs {battle.tool2?.name}
              </div>

              <div className="card-body text-center">
                <p>
                  {battle.tool1?.name}: <strong>{battle.tool1Votes}</strong>{" "}
                  votes
                </p>
                <p>
                  {battle.tool2?.name}: <strong>{battle.tool2Votes}</strong>{" "}
                  votes
                </p>

                <Link
                  className="btn btn-secondary"
                  to={`/battle/${battle._id}`}>
                  Vote
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
