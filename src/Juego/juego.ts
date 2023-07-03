import { Pokemon } from '../Clases/Pokemon';
import { Jugador } from '../Clases/Jugador';
import { BatallaPokemon } from './batallaPokemon';


export function Juego() {
    const charmander: Pokemon = new Pokemon("Charmander", "Fuego", "Char-chaar!");
    const squirtle: Pokemon = new Pokemon("Squirtle", "Agua", "Squirtle, Squirtle!");
    const bulbasaur: Pokemon = new Pokemon("Bulbasaur", "Planta", "bulbasaur...");
    let pokemonsDisponibles: Pokemon[] = [charmander, squirtle, bulbasaur];
    const jugador: Jugador = new Jugador();

    console.log(`Hola ${jugador.Nombre}, Bienvenido a esta batalla Pokémon desarollada con TypeScript`);
    SeleccionarPokemon(jugador, pokemonsDisponibles);
    BatallaPokemon(pokemonsDisponibles);
}

function SeleccionarPokemon(jugador: Jugador, pokemonsDisponibles: Pokemon[]) {
    let selector: number = 0;

    console.log(`Selecciona un pokémon`);
    pokemonsDisponibles.forEach((pokemon: Pokemon, index: number) => {
        if (index != selector) console.log(`♦ ${pokemon.Nombre}`);
        else
            console.log(`♦ ${pokemon.Nombre} ←`);
    });
}