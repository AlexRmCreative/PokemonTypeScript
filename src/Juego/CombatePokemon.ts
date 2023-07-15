import inquirer, { ListQuestion } from "inquirer";
import { writeDelay } from "../AdditionalFunctions/Lib";
import { Entrenador } from "../Clases/Entrenador";
import { Pokemon } from "../Clases/Pokemon";

export async function CombatePokemon(P1: Entrenador, P2: Entrenador): Promise<void> {
    let entrenadores: Entrenador[] = [P1, P2];
    let turno = 0;
    await PresentacionCombate(entrenadores);
    //El primer turno lo tendra el entrenador con el pokemon mas veloz
    if (P1.Pokemon.Velocidad > P2.Pokemon.Velocidad) {
        turno = 1;
    }
    await MenuBatalla(entrenadores[0].Pokemon);
}

async function PresentacionCombate(entrenadores: Entrenador[]) {
    let P1 = entrenadores[0];
    let P2 = entrenadores[1];
    console.clear();
    console.log(`${P1.Nombre} vs ${P2.Nombre}\n`);

    for (const element of entrenadores) {
        await writeDelay(`${element.Nombre}: "${element.Pokemones[0].Nombre}, ¡Yo te elijo!"\n`, 35);
    }
}

async function MenuBatalla(pokemonBatallando: Pokemon): Promise<void> {
    //Utilizando inquirer que creara un menu de seleccion de tipo lista. Más info en: https://www.npmjs.com/package/inquirer/v/8.2.4
    let habilidadesNombre: string[] = [];
    //Necesitaremos añadir los nombre de las habilidades para añadirlas en un menu
    pokemonBatallando.Habilidades.forEach(element => {
        habilidadesNombre.push(element.Nombre);
    });

    const question: ListQuestion = {
        type: 'list',
        name: 'habilidad',
        message: `Que deberia de hacer ${pokemonBatallando.Nombre}?`,
        choices: habilidadesNombre
    };

    try {
        const respuesta = await inquirer.prompt([question]);
    } catch (error) {
        console.error('Ocurrió un error:', error);
        throw error;
    }
}