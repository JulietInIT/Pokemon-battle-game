import Image from 'next/image';

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
          <a href="#">WBS Coding School</a>
          <a href="#">GitHub</a>
          <a href="#">Netlify</a>
          <p className="pt-2">
            My with love by{' '}
            <a href="#" className="underline">Linus</a>,{' '}
            <a href="#" className="underline">Yuliia</a> and{' '}
            <a href="#" className="underline">Dennis</a>
          </p>
        </div>

        {/* Right Links */}
        <div className="flex flex-col gap-2 text-base mt-58">
          <a href="#">Home</a>
          <a href="#">Battle</a>
          <a href="#">Leaderboard</a>
          <a href="#">My Roster</a>
          <a href="#">Sign Up</a>
          <a href="#">Sign In</a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-sm text-[#112B54] space-x-4">
        <span>&copy; 2025 All rights reserved</span>
        <a href="#" className="underline">Privacy Policy</a>
        <a href="#" className="underline">Terms of Service</a>
        <a href="#" className="underline">Support</a>
      </div>
    </footer>
  );
}