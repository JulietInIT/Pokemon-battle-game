// IMPORTS
import { PokemonListItemType } from "./types";
import { typeColors } from "@/components/typeColors";

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
export function getPokemonImageUrl(id: number): string {
  // Fallback to the GitHub URL if env var is not set
  const baseUrl =
    process.env.IMAGE_BASE_URL ||
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
  return `${baseUrl}${id}.png`;
}

/**
 * Fetches a list of Pokémon from the PokéAPI.
 *
 * @param start - The offset (starting index) for the Pokémon list. Defaults to 0.
 * @param end - The number of Pokémon to fetch (limit). Defaults to 50.
 * @param random - Whether to fetch random Pokemon instead of sequential. Defaults to false.
 * @param withDetails - Whether to include full Pokemon details. Defaults to false.
 * @returns A promise that resolves to an array of Pokémon list items.
 */
export async function getPokemonListItems(
  start = 0,
  end = 50,
  random = false,
  withDetails = false
): Promise<any[]> {
  if (random) {
    // Generate unique random IDs
    const randomIds = new Set<number>();
    while (randomIds.size < end) {
      randomIds.add(Math.floor(Math.random() * 1010) + 1);
    }

    const promises = Array.from(randomIds).map(async (id) => {
      const data = await fetchPokemonDetails(id.toString());
      return withDetails
        ? data
        : {
            name: data.name,
            url: `${process.env.NEXT_PUBLIC_API_BASE_URL}pokemon/${data.id}/`,
          };
    });

    return Promise.all(promises);
  }

  // Original sequential fetching
  const fetchUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}pokemon?limit=${end}&offset=${start}`;
  const response = await fetch(fetchUrl);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const json = await response.json();

  if (withDetails) {
    const detailPromises = json.results.map((pokemon: PokemonListItemType) => {
      const id = pokemon.url.split("/").filter(Boolean).slice(-1)[0];
      return fetchPokemonDetails(id);
    });
    return Promise.all(detailPromises);
  }

  return json.results;
}

/**
 * Fetches detailed information for a single Pokémon by ID
 * @param id - The Pokémon ID
 * @returns A promise that resolves to the detailed Pokémon data
 */
export async function fetchPokemonDetails(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}pokemon/${id}`
  );
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  return await response.json();
}

/**
 * Generates background colors and gradient based on Pokemon types
 * @param types - Array of Pokemon types
 * @returns Object with colors array and gradient CSS string
 */
export function getPokemonColors(types: any[]) {
  const typeNames = types.map((t) => (typeof t === "string" ? t : t.type.name));
  const colors = typeNames.map(
    (type) => typeColors[type as keyof typeof typeColors] || "#68A090"
  );

  const gradient =
    colors.length === 1
      ? `linear-gradient(135deg, ${colors[0]} 0%, rgba(255, 255, 255, 1) 100%)`
      : `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`;

  return { colors, gradient };
}
