import { Pokemon } from '../Clases/Pokemon';
import { Jugador } from '../Clases/Jugador';

export function BatallaPokemon(pokemon: Pokemon[]) {
    let turno = 0;
    console.log(pokemon[1].Nombre);
    pokemon[1].Aranazo(pokemon[0]);
    if (pokemon[0].Velocidad < pokemon[1].Velocidad)
        turno = 1;

    /*//Mientras hayan pokemons la batalla continuara
    do {
        //Comprueba si la vida de algun pokemon ha bajado a 0
        for (let i = 0; i < pokemon.length;) {
            pokemon[i].Vida < 0 ? pokemon.splice(i, 1) : i++;
        }
        //Cambiar de turno
        turno == pokemon.length ? turno = 0 : turno++;
    }
    while (pokemon.length > 1)*/
    console.log(`${pokemon[0].Nombre} gana!`);
    pokemon[0].HacerRuido();
}