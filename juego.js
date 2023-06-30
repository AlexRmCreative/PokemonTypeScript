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
    let selector = 0;
    console.log(`Hola ${jugador.Nombre}, Bienvenido a esta batalla Pokémon desarollada con TypeScript`);
    console.log(`Elige un pokémon`);
    pokemonsDisponibles.forEach((pokemon, index) => {
        if (index != selector)
            console.log(`♦ ${pokemon.Nombre}`);
        else
            console.log(`♦ ${pokemon.Nombre} ←`);
    });
}
exports.Juego = Juego;
//# sourceMappingURL=juego.js.map