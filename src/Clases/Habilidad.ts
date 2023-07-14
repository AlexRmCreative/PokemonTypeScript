import chalk from 'chalk';
import { writeDelay } from "../AdditionalFunctions/Lib";
import { Entrenador } from "./Entrenador";
import { Pokemon } from "./Pokemon";

//Como funciona?
//Habilidad es una clase que se puede llamar como una funcion
//Cuando llamas a Habilidad, te pedira el nombre de la habilidad y esta ejecutara su función
//Sabremos cuando una Habilidad puede ser usada cuando esta existe en la lista de habilidades "ListHabilidades".

export class Habilidad {
    ListHabilidades: { [key: string]: () => void } = {
        ""() {
            console.log("Esto es una habilidad...");
        },
    };
    Nombre: string;
    constructor(nombreHabilidad: string = "") {
        const habilidadEncontrada = Object.keys(this.ListHabilidades).find(
            habilidad => habilidad.toLowerCase() === nombreHabilidad.toLowerCase()
        );

        if (!habilidadEncontrada) {
            throw new Error("Habilidad no definida");
        } else {
            this.Nombre = habilidadEncontrada;
        }
    }

    call() {
        this.ListHabilidades[this.Nombre]();
    }
}


export class HabilidadEntrenador extends Habilidad {

    ListHabilidades = {
        "OrdenarPokemones": () => {
            if (this.Entrenador.Pokemones.length > 1) {
                //crear interfaz donde obtener el array de pokemones del entrenador y cambiar su orden en el array cambiando A(seleccionado a mover) por B (seleccionado a reemplazar).
            }
            else {
                this.Entrenador.Pokemon = this.Entrenador.Pokemones[0];
            }
        },
    };
    Entrenador: Entrenador;
    constructor(entrenador: Entrenador) {
        super();
        this.Entrenador = entrenador;
    }
}

export class HabilidadPokemon extends Habilidad {
    Pokemon: Pokemon;
    HabilidadTipo: string;
    ListHabilidades = {
        "Placaje": async () => {
            await writeDelay(`${this.Nombre} utiliza ${chalk.grey("Placaje")}...`, 25);
            await writeDelay(`Daño realizado: ${this.Pokemon.Ataque}`, 25);
        }
    };
    constructor(nombreHabilidad: string, pokemon: Pokemon, habilidadTipo: string) {
        super();
        this.Nombre = nombreHabilidad;
        this.Pokemon = pokemon;
        this.HabilidadTipo = habilidadTipo;
    }
}