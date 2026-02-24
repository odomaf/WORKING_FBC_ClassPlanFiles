import axios from "axios";

const search = async (query) =>
  axios.get(
    `https://www.omdbapi.com/?apikey=trilogy&t=${encodeURIComponent(
      query,
    )}&plot=short`,
  );

export default { search };
