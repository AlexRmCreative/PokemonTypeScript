import { writeDelay } from "../AdditionalFunctions/Lib";
import { Entrenador } from "../Clases/Entrenador";

export async function BatallaPokemon(P1: Entrenador, P2: Entrenador): Promise<void> {
    let entrenadores = [P1, P2];
    const nombresP1 = P1.Pokemones.map((pokemon) => pokemon.Nombre).join(', ');
    const nombresP2 = P2.Pokemones.map((pokemon) => pokemon.Nombre).join(', ');
    console.clear();
    console.log(`${P1.Nombre} vs ${P2.Nombre}\n`);

    for (const element of entrenadores) {
        await writeDelay(`${element.Nombre}: "${element.Pokemones[0].Nombre}, ¡Yo te elijo!"\n`, 35);
    }
}