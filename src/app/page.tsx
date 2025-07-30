// src/app/page.tsx
import PokemonList from "@/components/PokemonList";
import Hero from "@/components/Hero";

export default async function HomePage() {
  return (
    <>
      <Hero />
      <div className='p-6 space-y-4'>
        {/* Renders a list of Pokemon with catch and release buttons */}
        {/* showActions false removes the buttons */}
        <PokemonList showActions={true} />
      </div>
    </>
  );
}
