import { Pokemon } from './clases/pokemon';
import { Jugador } from './clases/jugador';

export function BatallaPokemon(pokemon: Pokemon[]) {
    do {
        for (let i = 0; i < pokemon.length; i++)
        {
            console.log(`pokemon siendo eliminado: ${pokemon[i].Nombre}`);
            pokemon.splice(i, 1);
        }
    }
    while (pokemon.length > 1)
}