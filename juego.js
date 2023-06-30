"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juego = void 0;
const pokemon_1 = require("./clases/pokemon");
const jugador_1 = require("./clases/jugador");
function Juego() {
    const charmander = new pokemon_1.Pokemon("Charmander", "Fuego");
    const squirtle = new pokemon_1.Pokemon("Squirtle", "Agua");
    const bulbasaur = new pokemon_1.Pokemon("Bulbasaur", "Planta");
    let pokemonsDisponibles = [charmander, squirtle, bulbasaur];
    const jugador = new jugador_1.Jugador();
    console.log(jugador.Nombre);
    /*    pokemonsDisponibles.forEach((pokemon: Pokemon) => {
            console.log(pokemon.Nombre);
        });*/
}
exports.Juego = Juego;
//# sourceMappingURL=juego.js.map