import inquirer, { ListQuestion } from "inquirer";
import { writeDelay } from "../AdditionalFunctions/Lib";
import { Entrenador } from "../Clases/Entrenador";
import { Pokemon } from "../Clases/Pokemon";
import { error } from "console";
import { BlobOptions } from "buffer";

export async function CombatePokemon(P1: Entrenador, P2: Entrenador): Promise<void> {
    let entrenadores: Entrenador[] = [P1, P2];
    let turno = 0;
    await PresentacionCombate(entrenadores);
    //El primer turno lo tendra el entrenador con el pokemon mas veloz
    if (P1.Pokemon.Velocidad > P2.Pokemon.Velocidad) {
        turno = 1;
    }
    await MenuBatalla(entrenadores[0]);
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

async function MenuBatalla(entrenador: Entrenador): Promise<void> {
    let inMenu: boolean = false;
    const options: ListQuestion = {
        type: 'list',
        name: 'option',
        choices: ["Atacar", "Cambiar Pokemon", "Mochila", "Huir"]
    };

    try {
        const answer = await inquirer.prompt(options);
        if(answer.option == "Atacar")
        {
            inMenu = true;
        }
    } catch (error) {
        console.error('Ocurrió un error:', error);
        throw error;
    }
    while(inMenu != false)
    {
        
    }
}

async function MenuHabilidades(pokemonBatallando: Pokemon): Promise<boolean> {
    //Utilizando inquirer que creara un menu de seleccion de tipo lista. Más info en: https://www.npmjs.com/package/inquirer/v/8.2.4
    let habilidadesNombre: string[] = [];
    //Necesitaremos añadir los nombre de las habilidades para añadirlas en un menu
    pokemonBatallando.Habilidades.forEach(element => {
        habilidadesNombre.push(element.Nombre);
    });
    habilidadesNombre.push("Retroceder");

    const question: ListQuestion = {
        type: 'list',
        name: 'habilidad',
        message: `Que deberia de hacer ${pokemonBatallando.Nombre}?`,
        choices: habilidadesNombre
    };

    try {
        let respuesta = await inquirer.prompt(question);
        const habilidadSeleccionada = pokemonBatallando.Habilidades.find(hab => hab.Nombre === respuesta.habilidad);
        if (habilidadSeleccionada) {
            habilidadSeleccionada.cast();
            return true;
        } else if (habilidadSeleccionada == habilidadesNombre[habilidadesNombre.length]) {
            return true;
        } 
        else {
            throw error("Habilidad no encontrada");
        }
    } catch (error) {
        console.error('Ocurrió un error:', error);
        throw error;
    }
}