import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBattle, voteOnBattle } from "../utils/api";

const Vote = () => {
  const { id } = useParams();

  const [battle, setBattle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const loadBattle = async () => {
    try {
      const res = await getBattle(id);
      if (!res.ok) throw new Error("Battle not found");
      const data = await res.json();
      setBattle(data);
    } catch (err) {
      console.error(err);
      setErrorMsg("Battle not found.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBattle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleVote = async (toolNum) => {
    try {
      const res = await voteOnBattle({ battleId: id, toolNum });
      if (!res.ok) throw new Error("Vote failed");
      const updated = await res.json();
      setBattle(updated);
    } catch (err) {
      console.error(err);
      setErrorMsg("Could not submit vote.");
    }
  };

  if (loading)
    return <h2 className="text-center page-title">Loading battle...</h2>;
  if (errorMsg || !battle)
    return (
      <h2 className="text-center page-title">
        {errorMsg || "Battle not found."}
      </h2>
    );

  return (
    <div className="container vote-page">
      <header className="vote-header text-center">
        <h1 className="page-title">Vote</h1>
        <p className="subtitle">Choose your winner.</p>
      </header>

      <div className="vote-card card">
        <div className="card-header text-center vote-matchup">
          {battle.tool1?.name} vs {battle.tool2?.name}
        </div>

        <div className="card-body vote-body text-center">
          <div className="vote-actions">
            <button
              className="btn btn-primary vote-btn"
              onClick={() => handleVote(1)}>
              Vote {battle.tool1?.name}
            </button>

            <button
              className="btn btn-primary vote-btn"
              onClick={() => handleVote(2)}>
              Vote {battle.tool2?.name}
            </button>
          </div>

          <div className="vote-scoreboard">
            <div className="score">
              <div className="score-name">{battle.tool1?.name}</div>
              <div className="score-value">{battle.tool1Votes}</div>
              <div className="score-label">votes</div>
            </div>

            <div className="score">
              <div className="score-name">{battle.tool2?.name}</div>
              <div className="score-value">{battle.tool2Votes}</div>
              <div className="score-label">votes</div>
            </div>
          </div>

          <Link className="btn btn-secondary mt-3" to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Vote;
