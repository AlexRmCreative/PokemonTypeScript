import { writeDelay } from "../AdditionalFunctions/Lib";

//Aquí almacenamos las habilidades que pueden tener los pokemons
//Se le pasa el nombre de la habilidad como parametro en el constructor, comprueba si existe una habilidad con ese nombre.

//IMPORTANTE: las habilidades se usan utilizando la llamada cast(); 
export class HabilidadPokemon {
    habilidadesPokemon: Record<string, () => void> = {
        Placaje: () => {
            writeDelay("Ejecutando Placaje...");
        },
    };

    Nombre: string;
    constructor(nombre: string) {
        this.Nombre = nombre;
    }

    cast() {
        if (this.habilidadesPokemon.hasOwnProperty(this.Nombre)) {
            this.habilidadesPokemon[this.Nombre]();
        } else {
            throw new Error("Habilidad no encontrada");
        }
    }
}