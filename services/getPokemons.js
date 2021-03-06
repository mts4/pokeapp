import { BASE_URL, OFFSET, LIMIT } from "./config";

export const fetchPokemons = async (offset = OFFSET, limit = LIMIT) => {
  return fetch(`${BASE_URL}/pokemon/?offset=${offset}&limit=${limit}`)
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => response.results);
};

export const fetchPokemonByName = async (namePokemon) => {
  return fetch(`${BASE_URL}/pokemon/${namePokemon}`)
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => response);
};
