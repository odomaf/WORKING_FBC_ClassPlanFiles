import { useState } from "react";
import BucketForm from "./BucketForm";

export default function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    eagerness: "low",
    isComplete: false,
  });

  const submitUpdate = (value) => {
    props.editBucketItem(edit.id, value);
    setEdit({ id: null, value: "", eagerness: "low", isComplete: false });
  };

  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  if (!props.bucket.length) {
    return (
      <p className="hint" style={{ marginTop: 16 }}>
        No quests yet. Add your first one above.
      </p>
    );
  }

  return (
    <ul className="list">
      {props.bucket.map((item) => {
        const priorityClass = `pill-${item.eagerness}`;
        const rowClass = item.isComplete ? "item complete" : "item";

        return (
          <li key={item.id} className={rowClass}>
            <div className="item-left">
              <button
                className="icon-btn"
                type="button"
                aria-label="Toggle complete"
                onClick={() => props.completeBucketItem(item.id)}
                title="Complete">
                ✓
              </button>

              <div style={{ minWidth: 0 }}>
                <p className="item-text">{item.text}</p>

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
                onClick={() =>
                  setEdit({
                    id: item.id,
                    value: item.text,
                    eagerness: item.eagerness,
                    isComplete: item.isComplete,
                  })
                }>
                ✏️
              </button>

              <button
                className="icon-btn"
                type="button"
                title="Delete"
                aria-label="Delete"
                onClick={() => props.removeBucketItem(item.id)}>
                🗑️
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
