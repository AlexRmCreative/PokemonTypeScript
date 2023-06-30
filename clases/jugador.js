"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugador = void 0;
function NumAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
class Jugador {
    constructor() {
        this.Nombre = "";
        this.Pokemons = [];
    }
}
exports.Jugador = Jugador;
//# sourceMappingURL=jugador.js.map