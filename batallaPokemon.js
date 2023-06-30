"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatallaPokemon = void 0;
function BatallaPokemon(pokemon) {
    do {
        for (let i = 0; i < pokemon.length; i++) {
            console.log(`pokemon siendo eliminado: ${pokemon[i].Nombre}`);
            pokemon.slice(i, i);
        }
    } while (pokemon.length > 1);
}
exports.BatallaPokemon = BatallaPokemon;
//# sourceMappingURL=batallaPokemon.js.map