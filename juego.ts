import { Pokemon } from './clases/pokemon';
import { Jugador } from './clases/jugador';
import { BatallaPokemon } from './batallaPokemon';

export function Juego() {
    const charmander: Pokemon = new Pokemon("Charmander", "Fuego");
    const squirtle: Pokemon = new Pokemon("Squirtle", "Agua");
    const bulbasaur: Pokemon = new Pokemon("Bulbasaur", "Planta");
    let pokemonsDisponibles: Pokemon[] = [charmander, squirtle, bulbasaur];
    const jugador: Jugador = new Jugador();
    let selector: number = 0;

    console.log(`Hola ${jugador.Nombre}, Bienvenido a esta batalla Pokémon desarollada con TypeScript`);
    console.log(`Elige un pokémon`);

    pokemonsDisponibles.forEach((pokemon: Pokemon, index: number) => {
        if (index != selector) console.log(`♦ ${pokemon.Nombre}`);
        else
            console.log(`♦ ${pokemon.Nombre} ←`);
    });


    console.log();
    BatallaPokemon(pokemonsDisponibles);
}