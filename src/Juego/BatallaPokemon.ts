import { writeDelay } from "../AdditionalFunctions/Lib";
import { Entrenador } from "../Clases/Entrenador";

export async function CombatePokemon(P1: Entrenador, P2: Entrenador): Promise<void> {
    let entrenadores: Entrenador[] = [P1, P2];
    let turno = 0;
    await PresentacionCombate(entrenadores);
    //El primer turno lo tendra el entrenador con el pokemon mas veloz
    if(entrenadores[1].Pokemon.Velocidad > entrenadores[0].Pokemon.Velocidad){
        turno = 1;
    }
    P1.UsarHabilidad(P1.Pokemon.Placaje, "Batallando");
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