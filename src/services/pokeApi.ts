import { IPokemonListApi, IPokemonResult } from '../types/pokemonList';
import { pokemonListPath } from '../constants/paths';
import api from './api';

export const getAllPokemon = async (url = pokemonListPath): Promise<IPokemonResult[]> => {
  const response = await getPokemonList(url);

  if (response.data.next) {
    const nextResponse = await getAllPokemon(response.data.next);

    return response.data.results.concat(nextResponse);
  }

  return response.data.results;
};

export const getPokemonList = async (url: string) => api.get<IPokemonListApi>(url);
