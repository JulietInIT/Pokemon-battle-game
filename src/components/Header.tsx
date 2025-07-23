import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-gradient-to-r h-[150px] from-[#EE5450] to-[#D04945] shadow-lg px-6 py-6 relative ">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between relative">
        {/* Left nav */}
        <nav className="flex gap-6 text-[#112B54] font-bold text-base uppercase mt-20">
          <a href="#">Home</a>
          <a href="#">Battle</a>
          <a href="#">Leaderboard</a>
        </nav>

        {/* Center logo */}
        <div className="absolute left-1/2 top-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <Image
            src="/pokemon_battle_logo.png"
            alt="Pokémon Logo"
            width={250}
            height={80}
          />
          <h1 className="text-4xl font-extrabold text-[#112B54] -mt-2"></h1>
        </div>

        {/* Right nav */}
        <nav className="flex gap-6 text-[#112B54] font-bold text-base uppercase mt-20">
          <a href="#">My Roster</a>
          <a href="#">Sign Up</a>
          <a href="#">Log In</a>
        </nav>
      </div>
    </header>
  );
}