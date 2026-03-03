export const getAllBattles = () => {
  return fetch('/api/battle', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const createBattle = (battleData) => {
  return fetch('/api/battle', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(battleData),
  });
};

export const getBattle = (battleId) => {
  return fetch(`/api/battle/${battleId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const createVote = (voteData) => {
  return fetch(`/api/battle/${voteData}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(voteData),
  });
};

export const getAllTool = () => {
  return fetch('/api/tool', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
