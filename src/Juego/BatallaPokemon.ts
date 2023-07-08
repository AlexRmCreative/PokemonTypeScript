import { writeDelay } from "../AdditionalFunctions/Lib";
import { Entrenador } from "../Clases/Entrenador";

export async function CombatePokemon(P1: Entrenador, P2: Entrenador): Promise<void> {
    let entrenadores: Entrenador[] = [P1, P2];
    const nombresP1 = P1.Pokemones.map((pokemon) => pokemon.Nombre).join(', ');
    const nombresP2 = P2.Pokemones.map((pokemon) => pokemon.Nombre).join(', ');
    await PresentacionCombate(entrenadores);
    for (const element of entrenadores)
}

async function PresentacionCombate(entrenadores: Entrenador[])
{
    let P1 = entrenadores[0];
    let P2 = entrenadores[1];
    console.clear();
    console.log(`${P1.Nombre} vs ${P2.Nombre}\n`);

    for (const element of entrenadores) {
        await writeDelay(`${element.Nombre}: "${element.Pokemones[0].Nombre}, ¡Yo te elijo!"\n`, 35);
    }
}