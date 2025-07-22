// Helper function to generate String for Image URL 
export function getPokemonImageUrl(id: number) : string {
    return `${process.env.IMAGE_BASE_URL}${id}.svg`
}
