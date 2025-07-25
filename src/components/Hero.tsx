"use client";

import { useEffect, useState } from "react";
import { getPokemonColors } from "@/lib/utils";
import { PokemonType } from "@/lib/types";

export default function Hero() {
  const [gradient, setGradient] = useState("");

  useEffect(() => {
    // Get random Pokemon types for gradient
    const typeValues = Object.values(PokemonType);
    const randomTypes = [
      typeValues[Math.floor(Math.random() * typeValues.length)],
      typeValues[Math.floor(Math.random() * typeValues.length)],
    ];

    const { gradient: newGradient } = getPokemonColors(randomTypes);
    setGradient(newGradient);
  }, []);

  return (
    <section
      className='relative mt-6 h-96 flex items-center justify-center text-center text-[#142a5e] overflow-hidden mb-8'
      style={{
        background:
          gradient || "linear-gradient(135deg, #EC534F 0%, #122B5D 100%)",
      }}
    >
      {/* Holo overlay */}
      <div
        className='absolute inset-0 opacity-20 mix-blend-overlay'
        style={{
          backgroundImage: "url(/holo-dank2.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* color overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-[#EE5450] to-[#D04945] opacity-70' />

      <div className='relative z-10'>
        <h1 className='text-7xl uppercase font-black mb-4 drop-shadow-lg'>
          Pokémon Battle Arena
        </h1>
        <p className='text-4xl upper case font-black mb-6 drop-shadow-md'>
          Catch, Train, and Battle with your favorite Pokémon!
        </p>
        <div className='text-lg font-bold opacity-90'>
          Discover new Pokémon • Build your roster • Become a champion
        </div>
        <div className='text-lg font-bold opacity-90'>
          Select your Pokémon • Challenge your friends • Win the tournament
        </div>
      </div>
    </section>
  );
}
