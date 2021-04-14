const BASE_URL = "https://pokeapi.co/api/v2/";

async function callApi(endpoint, options = {}) {
  const opts = options;
  opts.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  pokemons: {
    list() {
      return callApi("pokemon");
    },
  },
};

export default api;
