export const getAllBattles = () => {
  return fetch("/api/battle", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
};

export const getBattle = (battleId) => {
  return fetch(`/api/battle/${battleId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
};

export const getAllTools = () => {
  return fetch("/api/tool", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
};

// battleData: { tool1: "<toolId>", tool2: "<toolId>" }
export const createBattle = (battleData) => {
  return fetch("/api/battle", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(battleData),
  });
};

// vote: PUT /api/battle/:id  body: { toolNum: 1|2 }
export const voteOnBattle = ({ battleId, toolNum }) => {
  return fetch(`/api/battle/${battleId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ toolNum }),
  });
};
