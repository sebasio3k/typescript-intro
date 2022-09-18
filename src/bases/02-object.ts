export const pokemonIds = [1, 20, 35, 34, 66];

pokemonIds.push(+"1");

console.log("pokemonIds", pokemonIds);

interface Pokemon {
  id: number;
  name: string;
  age?: number | undefined;
}

export const bulbasaur: Pokemon = {
  id: 1,
  name: "Bulbasaur",
};

console.log("pokemon", bulbasaur);

export const charmander: Pokemon = {
  id: 2,
  name: "Charmander",
};

export const pokemons: Pokemon[] = [];

// pokemons.push(1, "string", charmander);
pokemons.push(bulbasaur, charmander);

console.log('pokemons', pokemons)
