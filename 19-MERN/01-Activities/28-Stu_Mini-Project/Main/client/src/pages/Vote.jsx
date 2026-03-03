import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_BATTLE } from "../utils/queries";
import { VOTE } from "../utils/mutations";

const Vote = () => {
  const { id } = useParams();

  const { loading, data, error } = useQuery(QUERY_BATTLE, {
    variables: { id },
  });

  const [vote] = useMutation(VOTE, {
    refetchQueries: [{ query: QUERY_BATTLE, variables: { id } }],
  });

  const battle = data?.battle;

  if (loading) return <h2>Loading battle...</h2>;
  if (error || !battle) return <h2>Battle not found.</h2>;

  const handleVote = async (toolNum) => {
    try {
      await vote({ variables: { battleId: id, toolNum } });
    } catch (e) {
      console.error(e);
    }
  };

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
