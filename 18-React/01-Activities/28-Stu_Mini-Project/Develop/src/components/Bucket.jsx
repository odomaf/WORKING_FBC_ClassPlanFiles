import { useState } from "react";
import BucketForm from "./BucketForm";

export default function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    eagerness: "low",
  });

  const submitUpdate = (value) => {
    // TODO 6: Call props.editBucketItem(edit.id, value)
    // TODO 7: Reset edit back to "not editing"
    // setEdit({ id: null, value: "", eagerness: "low" });
  };

  // Edit mode: show the form pre-filled
  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  // Empty state looks nicer than a blank screen
  if (!props.bucket.length) {
    return (
      <p className="hint" style={{ marginTop: 16 }}>
        No quests yet. Add your first one above.
      </p>
    );
  }

  return (
    <ul className="list">
      {props.bucket.map((item, index) => {
        const priorityClass = `pill-${item.eagerness}`;
        const rowClass = item.isComplete ? "item complete" : "item";

        return (
          <li
            // TODO 8: Use a stable key (prefer item.id)
            // key={item.id}
            key={index}
            className={rowClass}>
            <div className="item-left">
              {/* TODO 9: Clicking the text should toggle complete */}
              <button
                className="icon-btn"
                type="button"
                aria-label="Toggle complete"
                onClick={() => {
                  // TODO: invoke props.completeBucketItem(item.id)
                }}
                title="Complete">
                ✓
              </button>

              <div style={{ minWidth: 0 }}>
                <p className="item-text">
                  {/* TODO 10: Render the item text */}
                </p>
                <div className="item-meta">
                  <span className={`pill ${priorityClass}`}>
                    {item.eagerness.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>

            <div className="actions">
              <button
                className="icon-btn"
                type="button"
                title="Edit"
                aria-label="Edit"
                onClick={() => {
                  // TODO 11: Set edit to { id: item.id, value: item.text, eagerness: item.eagerness }
                }}>
                ✏️
              </button>

              <button
                className="icon-btn"
                type="button"
                title="Delete"
                aria-label="Delete"
                onClick={() => {
                  // TODO 12: invoke props.removeBucketItem(item.id)
                }}>
                🗑️
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
