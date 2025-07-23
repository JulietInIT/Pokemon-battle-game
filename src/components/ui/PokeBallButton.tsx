'use client';

type PokeballButtonProps = {
  label: string;
  onClick?: () => void;
  variant: 'catch' | 'release' | 'battle' | 'leave';
  className?: string;
};

const variantMap: Record<PokeballButtonProps['variant'], string> = {
  catch: '/pokeball_primary.svg',
  battle: '/pokeball_secondary.svg',
  release: '/pokeball_release.svg',
  leave: '/pokeball_leave.svg',
};

export default function PokeballButton({
  label,
  onClick,
  variant,
  className = '',
}: PokeballButtonProps) {
  const bgImage = variantMap[variant];

  return (
    <button
      onClick={onClick}
      className={`relative w-20 h-20 rounded-full transition-transform duration-350 flex items-center justify-center shadow ${className}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center rounded-full transform transition-transform duration-350"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <span
        className="px-2 py-1 rounded font-bold relative mt-14 z-10"
        style={{
          textShadow:
            '2px 2px 0 black, -2px 2px 0 black, 2px -2px 0 black, -2px -2px 0 black',
        }}
      >
        {label}
      </span>
      <style jsx>{`
        button:hover div {
          transform: scale(0.9) rotateZ(-13deg) rotateX(-10deg) rotateY(19deg);
        }
      `}</style>
    </button>
  );
}