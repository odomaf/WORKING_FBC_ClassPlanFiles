import { useState } from "react";
import BucketForm from "./BucketForm";
import Bucket from "./Bucket";

export default function BucketList() {
  const [bucket, setBucket] = useState([]);

  const addBucketItem = (item) => {
    const text = item.text?.trim();
    if (!text) return;

    const normalized = { ...item, text };
    setBucket((prev) => [normalized, ...prev]);
  };

  const completeBucketItem = (id) => {
    const updatedBucket = bucket.map((item) =>
      item.id === id ? { ...item, isComplete: !item.isComplete } : item,
    );
    setBucket(updatedBucket);
  };

  const removeBucketItem = (id) => {
    const updatedBucket = bucket.filter((item) => item.id !== id);
    setBucket(updatedBucket);
  };

  const editBucketItem = (itemId, newValue) => {
    if (!newValue.text) return;

    setBucket((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item)),
    );
  };

  return (
    <section>
      <h2 className="section-title">Your Quest List</h2>
      <p className="hint">
        Add items, prioritize them, mark complete, and edit anytime.
      </p>

      <BucketForm onSubmit={addBucketItem} />

      <Bucket
        bucket={bucket}
        completeBucketItem={completeBucketItem}
        removeBucketItem={removeBucketItem}
        editBucketItem={editBucketItem}
      />
    </section>
  );
}
