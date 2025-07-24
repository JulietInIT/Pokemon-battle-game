import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className='bg-gradient-to-r h-[200px] from-[#EE5450] to-[#D04945] shadow-lg px-6 py-6 relative flex items-end'>
      <div className='max-w-screen-xl mx-auto flex items-end justify-between relative'>
        {/* Left nav */}
        <nav className='flex gap-6 text-[#112B54] font-bold text-base uppercase'>
          <Link href='/' className='underline hover:no-underline'>
            Home
          </Link>
          <Link href='/battle' className='underline hover:no-underline'>
            Battle
          </Link>
          <Link href='/leaderboard' className='underline hover:no-underline'>
            Leaderboard
          </Link>
        </nav>

        {/* Center logo */}
        <div className='flex items-end mx-6 -mb-3'>
          <Image
            src='/pokemon_battle_logo.png'
            alt='Pokémon Logo'
            width={250}
            height={80}
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        {/* Right nav */}
        <nav className='flex gap-6 text-[#112B54] font-bold text-base uppercase'>
          <Link href='/myroster' className='underline hover:no-underline'>
            My Roster
          </Link>
          <Link href='/signup' className='underline hover:no-underline'>
            Sign Up
          </Link>
          <Link href='/login' className='underline hover:no-underline'>
            Log In
          </Link>
        </nav>
      </div>
    </header>
  );
}
