import { writeDelay } from "../AdditionalFunctions/Lib";
import { Entrenador } from "../Clases/Entrenador";
import { Pokemon } from "../Clases/Pokemon";

export async function BatallaPokemon(P1Pokemones: Pokemon[], P2Pokemones: Pokemon[]): Promise<void> {
    const nombresP1 = P1Pokemones.map((pokemon) => pokemon.Nombre).join(', ');
    const nombresP2 = P2Pokemones.map((pokemon) => pokemon.Nombre).join(', ');
  
    await writeDelay(`${nombresP1} VS ${nombresP2}`, 35);
}