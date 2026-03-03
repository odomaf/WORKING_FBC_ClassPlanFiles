import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllTools, createBattle } from "../utils/api";

const Battle = () => {
  const navigate = useNavigate();

  const [toolList, setToolList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({ tool1: "", tool2: "" });

  useEffect(() => {
    const loadTools = async () => {
      try {
        const res = await getAllTools();
        if (!res.ok) throw new Error("Failed to load tools");
        const tools = await res.json();

        setToolList(tools ?? []);

        // Default selects
        if (tools?.length >= 2) {
          setFormData({ tool1: tools[0]._id, tool2: tools[1]._id });
        }
      } catch (err) {
        console.error(err);
        setErrorMsg("Something went wrong loading tools.");
      } finally {
        setLoading(false);
      }
    };

    loadTools();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.tool1 || !formData.tool2) return;
    if (formData.tool1 === formData.tool2) {
      setErrorMsg("Pick two different tools.");
      return;
    }

    try {
      setErrorMsg("");
      const res = await createBattle(formData);
      if (!res.ok) throw new Error("Failed to create battle");
      const battle = await res.json();
      navigate(`/battle/${battle._id}`);
    } catch (err) {
      console.error(err);
      setErrorMsg("Error creating battle.");
    }
  };

  if (loading)
    return <h2 className="text-center page-title">Loading tools...</h2>;
  if (errorMsg && toolList.length === 0)
    return <h2 className="text-center page-title">{errorMsg}</h2>;

  return (
    <div className="container">
      <h1 className="text-center page-title">Create a Dev Tools Battle</h1>
      <p className="text-center subtitle">
        Choose two tools and start the showdown.
      </p>

      <form onSubmit={handleSubmit} className="card form-card">
        <div className="card-body">
          <label className="form-label" htmlFor="tool1">
            Tool A
          </label>
          <select
            className="form-select"
            name="tool1"
            value={formData.tool1}
            onChange={handleChange}>
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
            className="form-select"
            name="tool2"
            value={formData.tool2}
            onChange={handleChange}>
            {toolList.map((tool) => (
              <option key={tool._id} value={tool._id}>
                {tool.name}
              </option>
            ))}
          </select>

          {errorMsg && <p className="text-center text-error">{errorMsg}</p>}

          <div className="flex-row justify-center">
            <button className="btn btn-primary" type="submit">
              Create Battle
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Battle;
