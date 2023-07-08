import { Readline } from "readline/promises";
import { Pokemon } from "./Pokemon";

export class Entrenador
{
    Nombre: string = "";
    Pokemones: Pokemon[] = [];
    Pokemon: Pokemon = new Pokemon("");
    constructor(pokemones: Pokemon[] = [])
    {
        this.Pokemones = pokemones;
    }
}