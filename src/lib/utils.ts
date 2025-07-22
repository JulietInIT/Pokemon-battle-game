// Helper function to generate String for Image URL 
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

// Helper function to fetch Pokemon List Items
export async function getPokemonListItems(start: number = 0, end: number = 50) {
    const fetchUrl = `${process.env.API_BASE_URL}pokemon?limit=${end}&offset=${start}`

    try {
        const response = await fetch(fetchUrl)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const json = await response.json()
        // Testing 
        console.log(json)
        return json
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message)
        } else {
            console.error(error)
        }
    }
}