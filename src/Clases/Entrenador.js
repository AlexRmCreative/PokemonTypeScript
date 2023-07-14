"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entrenador = void 0;
const Pokemon_1 = require("./Pokemon");
class Entrenador {
    constructor(pokemones = []) {
        this.Nombre = "";
        this.Pokemones = [];
        this.Pokemon = new Pokemon_1.Pokemon("");
        this.Pokemones = pokemones;
        this.Pokemon = pokemones[0];
    }
    CambiarOrden() {
        if (this.Pokemones.length > 1) {
        }
        else {
            this.Pokemon = this.Pokemones[0];
        }
    }
}
exports.Entrenador = Entrenador;
//# sourceMappingURL=Entrenador.js.map