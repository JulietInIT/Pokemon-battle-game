// src/components/PokemonCard.tsx
/*
Need to create a PokémonCard that only desplays the name and image of the Pokémon.
*/

import Image from "next/image";
import { PokemonListItemType, PokemonCardProps } from "../lib/types";
import { getPokemonImageUrl, getPokemonColors } from "../lib/utils";

export default function PokemonCard({ pokemon, types = [] }: PokemonCardProps) {
  console.log("Pokemon URL:", pokemon.url);

  const pokemonId = pokemon.url.split("/").filter(Boolean).slice(-1)[0];
  console.log("Extracted ID:", pokemonId);

  const { gradient } =
    types.length > 0 ? getPokemonColors(types) : { gradient: "" };

  return (
    <div
      className='relative flex flex-col items-center justify-between p-6 w-[285px] h-[400px] shadow-xl border-14 border-yellow-500 rounded-2xl overflow-hidden'
      style={{
        borderRadius: "30px",
        ...(gradient ? { background: gradient } : { backgroundColor: "white" }),
      }}
    >
      {/* 1px border overlay */}
      <div className='absolute inset-0 border border-black/20 rounded-2xl pointer-events-none' />

      {/* Holo overlay */}
      <div
        className='absolute inset-0 opacity-30 rounded-2xl mix-blend-overlay'
        style={{
          backgroundImage: "url(/holo-dank2.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content with higher z-index */}
      <figure className='relative z-10'>
        <Image
          src={getPokemonImageUrl(parseInt(pokemonId))}
          alt={pokemon.name}
          width={180}
          height={180}
          priority
          style={{ width: "auto", height: "auto", borderRadius: "16px" }}
        />
      </figure>
      <div className='card-body flex justify-end items-center w-full relative z-10'>
        <h2 className='card-title font-bold text-2xl text-black'>
          {pokemon.name}
        </h2>
      </div>
    </div>
  );
}
