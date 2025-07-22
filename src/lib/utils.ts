// IMPORTS
import { PokemonListItemType } from "./types"

// HELPER FUNCTIONS
/**
 * Generates the image URL for a Pokémon based on its ID.
 *
 * @param id - The unique identifier of the Pokémon.
 * @returns The URL string pointing to the Pokémon's image.
 *
 * @remarks
 * The base URL is retrieved from the `IMAGE_BASE_URL` environment variable.
 */
export function getPokemonImageUrl(id: number) : string {
    return `${process.env.IMAGE_BASE_URL}${id}.svg`
}

/**
 * Fetches a list of Pokémon from the PokéAPI.
 *
 * @param start - The offset (starting index) for the Pokémon list. Defaults to 0.
 * @param end - The number of Pokémon to fetch (limit). Defaults to 50.
 * @returns A promise that resolves to an array of Pokémon list items.
 *
 * @throws Will throw an error if the network request fails or the response is not OK.
 *
 * @example
 * const pokemons = await getPokemonListItems(0, 10);
 * // pokemons is an array of { name: string, url: string }
 */
export async function getPokemonListItems(start = 0, end = 50): Promise<PokemonListItemType[]> {
  const fetchUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}pokemon?limit=${end}&offset=${start}`;
  const response = await fetch(fetchUrl);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const json = await response.json();
  return json.results;
}