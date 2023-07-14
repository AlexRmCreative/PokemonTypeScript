"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entrenador = void 0;
const Pokemon_1 = require("./Pokemon");
//Estados en los que puede estar un entrenador
const Estados = ["Libre", "Batallando"];
class Entrenador {
    constructor(pokemones = []) {
        this.Nombre = "";
        this.Pokemones = [];
        this.Pokemon = new Pokemon_1.Pokemon("");
        this.Pokemones = pokemones;
        this.Pokemon = pokemones[0];
        this.Estado = Estados[0];
    }
    UsarHabilidad(habilidad, estado) {
        if (!Estados.includes(estado)) {
            throw new Error(`Estado inválido. Los estados válidos son: ${Estados.join(", ")}`);
        }
    }
}
exports.Entrenador = Entrenador;
//# sourceMappingURL=Entrenador.js.map