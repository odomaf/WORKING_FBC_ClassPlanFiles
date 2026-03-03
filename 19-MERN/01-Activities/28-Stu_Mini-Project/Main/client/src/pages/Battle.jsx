// client/src/pages/Battle.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_TOOLS, QUERY_BATTLES } from "../utils/queries";
import { CREATE_BATTLE } from "../utils/mutations";

const Battle = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ tool1: "", tool2: "" });

  const { loading, data } = useQuery(QUERY_TOOLS);
  const toolList = data?.tools || [];

  const [createBattle, { error, loading: creating }] = useMutation(
    CREATE_BATTLE,
    {
      refetchQueries: [{ query: QUERY_BATTLES }],
    },
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.tool1 || !formData.tool2) return;
    if (formData.tool1 === formData.tool2) return;

    const { data } = await createBattle({ variables: { ...formData } });
    navigate(`/battle/${data.createBattle._id}`);
  };

  if (loading) return <h2>Loading tools...</h2>;

  return (
    <div className="container vote-page">
      <header className="vote-header text-center">
        <h1 className="page-title">Create a Battle</h1>
        <p className="subtitle">Pick two dev tools and start the showdown.</p>
      </header>

      <div className="vote-card card">
        <div className="card-header text-center vote-matchup">
          New Dev Tools Battle
        </div>

        <div className="card-body vote-body">
          <form onSubmit={handleSubmit}>
            <label className="form-label" htmlFor="tool1">
              Tool A
            </label>
            <select
              className="form-select mb-3"
              name="tool1"
              value={formData.tool1}
              onChange={handleChange}>
              <option value="">-- Select Tool A --</option>
              {toolList.map((tool) => (
                <option key={tool._id} value={tool._id}>
                  {tool.name}
                </option>
              ))}
            </select>

            <label className="form-label" htmlFor="tool2">
              Tool B
            </label>
            <select
              className="form-select mb-3"
              name="tool2"
              value={formData.tool2}
              onChange={handleChange}>
              <option value="">-- Select Tool B --</option>
              {toolList.map((tool) => (
                <option key={tool._id} value={tool._id}>
                  {tool.name}
                </option>
              ))}
            </select>

            {error && (
              <p className="text-danger text-center">Error creating battle.</p>
            )}

            <div className="flex-row justify-center">
              <button
                className="btn btn-primary vote-btn"
                type="submit"
                disabled={creating}>
                {creating ? "Creating..." : "Create Battle"}
              </button>
            </div>

            <div className="flex-row justify-center mt-3">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate("/")}>
                Back to Home
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Battle;
