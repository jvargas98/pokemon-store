import React, { useState, useEffect } from "react";
import api from "../Api";

function Home() {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      setState({ loading: true, error: null });

      try {
        const pokemons = await api.pokemons.list();
        setState({ loading: false, data: pokemons.results });
      } catch (e) {
        setState({ loading: false, error: e });
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {state.data?.map((pokemon) => (
          <div className="col-3 my-3">
            <div className="card">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  pokemon.url.match(/\/pokemon\/(\d+)\//)[1]
                }.png`}
                className="card-img-top w-50 mx-auto d-block"
                alt="..."
              />
              <div className="card-body">{pokemon.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
