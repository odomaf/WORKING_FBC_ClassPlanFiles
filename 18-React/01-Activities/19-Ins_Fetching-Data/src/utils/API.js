import axios from "axios";

const BASE_URL = "https://api.giphy.com/v1/gifs/search";

/**
 * Instructor note:
 * In real apps, API keys should live in environment variables.
 * For Vite, use: import.meta.env.VITE_GIPHY_API_KEY
 *
 * Create a .env file in the project root:
 * VITE_GIPHY_API_KEY=YOUR_KEY_HERE
 */
const API_KEY =
  import.meta.env.VITE_GIPHY_API_KEY || "REPLACE_ME_WITH_YOUR_KEY";

const searchGifs = (query) => {
  return axios.get(BASE_URL, {
    params: {
      q: query,
      api_key: API_KEY,
      limit: 12,
    },
  });
};

export default searchGifs;
