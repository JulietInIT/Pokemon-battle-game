import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#EE5450] to-[#D04945] text-[#112B54] px-6 py-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Pikachu */}
        <div className="flex flex-col items-start gap-0">
          <Image
            src="/pokemon_battle_logo.png"
            alt="Pokémon Logo"
            width={220}
            height={50}
            className="ml-4 block -mb-2"
          />
          <Image
            src="/pikachu_footer.png"
            alt="Pikachu"
            width={300}
            height={100}
            className="-ml-6"
          />
        </div>

        {/* Center Links */}
        <div className="flex flex-col gap-2 text-base mt-58">
          <p className="font-bold">FINAL FRONTEND PROJECT</p>
          <Link href="/wbscodingschool">WBS Coding School</Link>
          <Link href="/github">GitHub</Link>
          <Link href="/netlify">Netlify</Link>
          <p className="pt-2">
            My with love by{' '}
            <Link href="/linus" className="underline">Linus</Link>,{' '}
            <Link href="/yullia" className="underline">Yuliia</Link> and {' '}
            <Link href="/dennis" className="underline">Dennis</Link>{' '}
          </p>
        </div>

        {/* Right Links */}
        <div className="flex flex-col gap-2 text-base mt-58">
          <Link href="/">Home</Link>
          <Link href="/battle">Battle</Link>
          <Link href="/leaderboard">Leaderboard</Link>
          <Link href="/myroster">My Roster</Link>
          <Link href="/signup">Sign Up</Link>
          <Link href="/signin">Sign In</Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-sm text-[#112B54] space-x-4">
        <span>&copy; 2025 All rights reserved</span>
        <Link href="/privacypolicy" className="underline">Privacy Policy</Link>
        <Link href="/termsofservice" className="underline">Terms of Service</Link>
        <Link href="/support" className="underline">Support</Link>
      </div>
    </footer>
  );
}