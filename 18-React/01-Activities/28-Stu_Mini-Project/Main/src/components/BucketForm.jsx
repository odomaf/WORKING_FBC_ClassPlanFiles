import { useState } from "react";

export default function BucketForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [priority, setPriority] = useState(
    props.edit ? props.edit.eagerness : "low",
  );

  const priorityOptions = [
    { value: "high", label: "Must do" },
    { value: "medium", label: "Want to do" },
    { value: "low", label: "Someday" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = input.trim();
    if (!text) return;

    props.onSubmit({
      id:
        props.edit?.id ??
        crypto?.randomUUID?.() ??
        Math.random().toString(16).slice(2),
      text,
      eagerness: priority,
      isComplete: props.edit?.isComplete ?? false,
    });

    setInput("");
    setPriority("low");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <input
          className="input"
          type="text"
          placeholder="Add a new quest…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="Quest text"
        />

        <select
          className="select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          aria-label="Priority">
          {priorityOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <button className="btn btn-primary" type="submit">
          {props.edit ? "Update Quest" : "Add Quest"}
        </button>
      </div>
    </form>
  );
}
