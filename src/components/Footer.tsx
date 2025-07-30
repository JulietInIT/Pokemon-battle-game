import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className='bg-gradient-to-r from-[#EE5450] to-[#D04945] text-[#112B54] px-6 py-10'>
      <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Logo & Pikachu */}
        <div className='flex flex-col items-center gap-0'>
          <Image
            src='/pokemon_battle_logo.png'
            alt='Pokémon Logo'
            width={220}
            height={50}
            className='mt-12'
            style={{ width: "auto", height: "auto" }}
          />
          <Image
            src='/pikachu_footer.png'
            alt='Pikachu'
            width={300}
            height={100}
            className='-mt-6'
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        {/* Center Links */}
        <div className='flex flex-col gap-2 text-base mt-58'>
          <p className='font-bold'>FINAL FRONTEND PROJECT</p>
          <Link
            href='https://www.wbscodingschool.com/'
            className='underline hover:no-underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            WBS Coding School
          </Link>
          <Link
            href='https://github.com/JulietInIT/Pokemon-battle-game'
            className='underline hover:no-underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </Link>
          <Link
            href='/#'
            className='underline hover:no-underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            Netlify
          </Link>
          <br />
          <p className='pt-2'>
            My with love by{" "}
            <Link
              href='https://github.com/LinusClimbsCode'
              className='underline hover:no-underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              Linus
            </Link>
            ,{" "}
            <Link
              href='https://github.com/JulietInIT'
              className='underline hover:no-underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              Yuliia
            </Link>{" "}
            and{" "}
            <Link
              href='https://github.com/Vaeshkar'
              className='underline hover:no-underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              Dennis
            </Link>{" "}
          </p>
        </div>

        {/* Right Links */}
        <div className='flex flex-col gap-2 text-base mt-58 leading-6.5'>
          <Link href='/' className='underline hover:no-underline'>
            Home
          </Link>
          <Link href='/battle' className='underline hover:no-underline'>
            Battle
          </Link>
          <Link href='/leaderboard' className='underline hover:no-underline'>
            Leaderboard
          </Link>
          <Link href='/myroster' className='underline hover:no-underline'>
            My Roster
          </Link>
          <Link href='/signup' className='underline hover:no-underline'>
            Sign Up
          </Link>
          <Link href='/signin' className='underline hover:no-underline'>
            Sign In
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className='mt-10 text-center text-sm text-[#112B54] space-x-4'>
        <span>&copy; 2025 All rights reserved</span>
        <Link href='#' className='underline hover:no-underline'>
          Privacy Policy
        </Link>
        <Link href='#' className='underline hover:no-underline'>
          Terms of Service
        </Link>
        <Link href='#' className='underline hover:no-underline'>
          Support
        </Link>
      </div>
    </footer>
  );
}
