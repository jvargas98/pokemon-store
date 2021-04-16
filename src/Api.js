const BASE_URL = "https://pokeapi.co/api/v2/";

async function callApi(endpoint) {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, headers);
  const data = await response.json();

  return data;
}

const api = {
  pokemons: {
    list() {
      return callApi("pokemon");
    },
    read(pokemonId) {
      return callApi(`pokemon/${pokemonId}`);
    },
  },
};

export default api;
