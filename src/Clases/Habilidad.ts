import { writeDelay } from "../AdditionalFunctions/Lib";

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