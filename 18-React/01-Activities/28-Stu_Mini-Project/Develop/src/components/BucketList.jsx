import { useState } from "react";
import BucketForm from "./BucketForm";
import Bucket from "./Bucket";

export default function BucketList() {
  const [bucket, setBucket] = useState([]);

  // ✅ Add a new quest item to the list
  const addBucketItem = (item) => {
    // TODO 1: Guard against empty items (trim the text)
    // TODO 2: Add the new item to the FRONT of the bucket array
    // Hint: setBucket((prev) => [item, ...prev]);
  };

  // ✅ Toggle completion on a quest item
  const completeBucketItem = (id) => {
    const updatedBucket = bucket.map((item) => {
      // TODO 3: If item.id matches `id`, toggle item.isComplete (true/false)
      // Return the updated item object
      return item;
    });

    setBucket(updatedBucket);
  };

  // ✅ Remove an item by id
  const removeBucketItem = (id) => {
    // TODO 4: Filter out the item with the matching id
    // const updatedBucket = ...
    // TODO 5: Update state with the filtered array
  };

  // ✅ Replace an item after editing
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
