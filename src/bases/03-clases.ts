import axios from "axios";
import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon {
  // DEFINICIÓN DE PROPIEDADES:
  //   public id: number;
  //   public name: string;

  // GETTERS:
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    readonly id: number,
    public name: string // public imageUrl: string
  ) {
    // console.log("Constructor llamado");
    // this.id = id;
    // this.name = name;
  }

  // MÉTODOS:
  public scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
    this.speak;
  }

  private speak() {
    console.log(`${this.name}, ${this.name} `);
  }

  // asíncronos
  async getMoves(): Promise<Move[]> {
    // const moves = 0;
    const { data } = await axios.get<PokeapiResponse>(
      "https://pokeapi.co/api/v2/pokemon/144"
    );
    console.log(data.moves);
    return data.moves;
  }
  async getImg() {
    const { data } = await axios.get<PokeapiResponse>(
      "https://pokeapi.co/api/v2/pokemon/144"
    );
    console.log(data.sprites.front_shiny);
    return data.sprites.front_shiny;
  }
}

export const articuno = new Pokemon(144, "Articuno");
// articuno.speak();
// articuno.scream();
// console.log("articuno", articuno);

// console.log("articuno.getMoves()", articuno.getMoves());
articuno.getMoves();
