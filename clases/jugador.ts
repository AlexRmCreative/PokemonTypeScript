import * as readlineSync from 'readline-sync';
import { Pokemon } from "./pokemon";

function NumAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export class Jugador {
    Nombre: string = "";
    Pokemons: Pokemon[] = [];

    constructor() {
        this.Nombre = readlineSync.question('Ingresa tu nombre: ');
    }
}