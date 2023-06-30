import * as readlineSync from 'readline-sync';
import { Pokemon } from './clases/pokemon';
import { Jugador } from './clases/jugador';

export function Juego() {
    const charmander: Pokemon = new Pokemon("Charmander", "Fuego");
    const squirtle: Pokemon = new Pokemon("Squirtle", "Agua");
    const bulbasaur: Pokemon = new Pokemon("Bulbasaur", "Planta");
    let pokemonsDisponibles: Pokemon[] = [charmander, squirtle, bulbasaur];
    const jugador: Jugador = new Jugador();

    console.log(jugador.Nombre);
/*    pokemonsDisponibles.forEach((pokemon: Pokemon) => {
        console.log(pokemon.Nombre);
    });*/
}