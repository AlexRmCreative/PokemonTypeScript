"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HabilidadPokemon = void 0;
const Lib_1 = require("../AdditionalFunctions/Lib");
class HabilidadPokemon {
    constructor(nombre) {
        this.habilidadesPokemon = {
            Placaje: () => {
                (0, Lib_1.writeDelay)("Ejecutando Placaje...");
            },
        };
        this.Nombre = nombre;
    }
    cast() {
        if (this.habilidadesPokemon.hasOwnProperty(this.Nombre)) {
            this.habilidadesPokemon[this.Nombre]();
        }
        else {
            throw new Error("Habilidad no encontrada");
        }
    }
}
exports.HabilidadPokemon = HabilidadPokemon;
//# sourceMappingURL=Habilidad.js.map