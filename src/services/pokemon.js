import Pokedex from 'pokedex-promise-v2';

const P = new Pokedex();

export const allPokemon = () => P.getPokemonsList().then(({results}) => results.map(i => i.name).sort());

export const allItems = () => P.getItemsList().then(({ results }) => {
  return [...results.map(item => item.name)].sort();
});

