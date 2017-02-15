import Pokedex from 'pokedex-promise-v2';

const P = new Pokedex();

export const allPokemon = () => P.getPokemonsList();

export const allPokemonTypes = () => P.getTypesList();

export const allPokemonColors = () => P.getPokemonColorsList();

export const allBerries = () => P.getBerriesList();

export const allSpecies = () => P.getPokemonSpeciesList();

export const allItems = () => P.getItemsList();

export const allEvolutions = () => P.getEvolutionChainsList();

export const allEvolutionTriggers = () => P.getEvolutionTriggersList();

