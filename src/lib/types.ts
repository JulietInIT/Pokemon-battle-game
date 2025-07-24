export enum PokemonType {
  NORMAL = "normal",
  FIRE = "fire",
  WATER = "water",
  ELECTRIC = "electric",
  GRASS = "grass",
  ICE = "ice",
  FIGHTING = "fighting",
  POISON = "poison",
  GROUND = "ground",
  FLYING = "flying",
  PSYCHIC = "psychic",
  BUG = "bug",
  ROCK = "rock",
  GHOST = "ghost",
  DRAGON = "dragon",
  DARK = "dark",
  STEEL = "steel",
  FAIRY = "fairy",
}

export type PokemonListItemType = {
  name: string;
  url: string;
};

export type PokemonCardProps = {
  pokemon: PokemonListItemType;
  types?: { type: { name: PokemonType } }[];
};

export type PokemonListProps = {
  pokemon?: PokemonListItemType[];
  showActions?: boolean;
  onCatch?: (pokemon: PokemonListItemType) => void;
  onRelease?: (pokemon: PokemonListItemType) => void;
};

export type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?:
    | "primary"
    | "success"
    | "warning"
    | "error"
    | "secondary"
    | "outline";
  className?: string;
};

export type PokeballButtonProps = {
  label: string;
  onClick?: () => void;
  variant: "catch" | "release" | "battle" | "leave";
  className?: string;
};
