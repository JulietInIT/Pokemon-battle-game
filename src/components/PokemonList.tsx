"use client";

import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import PokeballButton from "./ui/PokeBallButton";
import { PokemonListItemType, PokemonListProps } from "@/lib/types";
import { getPokemonListItems, fetchPokemonDetails } from "@/lib/utils";

export default function PokemonList({
  pokemon,
  showActions = true,
  onCatch,
  onRelease,
}: PokemonListProps) {
  const [pokemonList, setPokemonList] = useState<PokemonListItemType[]>([]);
  const [pokemonDetails, setPokemonDetails] = useState<Record<string, any>>({});
  const [caughtPokemon, setCaughtPokemon] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);

  // Load caught Pokemon from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("caughtPokemon");
    if (saved) {
      setCaughtPokemon(new Set(JSON.parse(saved)));
    }
  }, []);

  // Fetch Pokemon list if not provided
  useEffect(() => {
    if (!pokemon) {
      setLoading(true);
      getPokemonListItems(0, 50, true) // Enable random fetching
        .then(setPokemonList)
        .finally(() => setLoading(false));
    } else {
      setPokemonList(pokemon);
    }
  }, [pokemon]);

  // Fetch details for each Pokemon
  useEffect(() => {
    pokemonList.forEach(async (poke) => {
      const id = poke.url.split("/").filter(Boolean).slice(-1)[0];
      if (!pokemonDetails[id]) {
        try {
          const details = await fetchPokemonDetails(id);
          setPokemonDetails((prev) => ({ ...prev, [id]: details }));
        } catch (error) {
          console.error(`Failed to fetch details for ${poke.name}:`, error);
        }
      }
    });
  }, [pokemonList, pokemonDetails]);

  const handleCatch = (pokemon: PokemonListItemType) => {
    const id = pokemon.url.split("/").filter(Boolean).slice(-1)[0];
    const newCaught = new Set(caughtPokemon).add(id);
    setCaughtPokemon(newCaught);
    localStorage.setItem("caughtPokemon", JSON.stringify([...newCaught]));
    onCatch?.(pokemon);
  };

  const handleRelease = (pokemon: PokemonListItemType) => {
    const id = pokemon.url.split("/").filter(Boolean).slice(-1)[0];
    const newCaught = new Set(caughtPokemon);
    newCaught.delete(id);
    setCaughtPokemon(newCaught);
    localStorage.setItem("caughtPokemon", JSON.stringify([...newCaught]));
    onRelease?.(pokemon);
  };

  if (loading) {
    return <div className='text-center'>Loading Pokemon...</div>;
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
      {pokemonList.map((poke) => {
        const id = poke.url.split("/").filter(Boolean).slice(-1)[0];
        const details = pokemonDetails[id];
        const isCaught = caughtPokemon.has(id);

        return (
          <div key={`${poke.name}-${id}`} className='relative'>
            <PokemonCard pokemon={poke} types={details?.types || []} />
            {showActions && (
              <div className='absolute top-4 right-4'>
                <PokeballButton
                  label={isCaught ? "Release" : "Catch"}
                  variant={isCaught ? "release" : "catch"}
                  onClick={() =>
                    isCaught ? handleRelease(poke) : handleCatch(poke)
                  }
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
