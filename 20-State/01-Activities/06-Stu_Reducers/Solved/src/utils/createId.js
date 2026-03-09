// Generate the next numeric id based on the largest id in the array.
const createId = (arr) => {
  if (!arr.length) {
    return 1;
  }

  const sortedIds = arr.map((item) => item.id).sort((a, b) => a - b);
  return sortedIds[sortedIds.length - 1] + 1;
};

export default createId;
