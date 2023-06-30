import { Pokemon } from "./pokemon";
import readline, { Interface } from 'readline';

function NumAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export class Jugador {
    Nombre: string = "";
    Pokemons: Pokemon[] = [];

    constructor() {/*
        this.Nombre = require('readline');*/
    }
}