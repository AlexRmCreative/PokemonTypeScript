import { Pokemon } from "./Pokemon";

export class Entrenador
{
    Pokemones: Pokemon[] = [];
    constructor(pokemones: Pokemon[] = [])
    {
        this.Pokemones = pokemones;
    }
}