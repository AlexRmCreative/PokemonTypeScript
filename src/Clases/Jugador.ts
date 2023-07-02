import * as readlineSync from 'readline-sync';
import { Pokemon } from "./Pokemon";

function NumAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export class Jugador {
    Nombre: string = "";
    Pokemons: Pokemon[] = [];

    constructor(nombre: string = "") {
        if (!nombre)
            nombre = readlineSync.question('Ingresa tu nombre: ');
        this.Nombre = nombre;
    }
}