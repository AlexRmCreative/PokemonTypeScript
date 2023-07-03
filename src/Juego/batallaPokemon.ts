import { Pokemon } from '../Clases/Pokemon';
import { Jugador } from '../Clases/Jugador';

export function BatallaPokemon(pokemon: Pokemon[]) {
    let turno = 0;
    //Primer turno para el pokemon mas veloz
    if (pokemon[0].Velocidad < pokemon[1].Velocidad)
        turno = 1;

    //Mientras hayan pokemons la batalla continuara
    do {
        //Comprueba si la vida de algun pokemon ha bajado a 0 para asi eliminarlo de la lista
        for (let i = 0; i < pokemon.length;) {
            pokemon[i].Vida < 0 ? pokemon.splice(i, 1) : i++;
        }

        //SeleccionarHabilidad();

        //Cambiar de turno
        turno == pokemon.length ? turno = 0 : turno++;
    }
    while (pokemon.length > 1)

    /*console.log(`${pokemon[0].Nombre} gana!`);
    pokemon[0].HacerRuido();*/
}

function SeleccionarHabilidad()
{

}