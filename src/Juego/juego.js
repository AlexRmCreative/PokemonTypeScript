"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juego = void 0;
const Pokemon_1 = require("../Clases/Pokemon");
const Jugador_1 = require("../Clases/Jugador");
const batallaPokemon_1 = require("./batallaPokemon");
function Juego() {
    const charmander = new Pokemon_1.Pokemon("Charmander", "Fuego", "Char-chaar!");
    const squirtle = new Pokemon_1.Pokemon("Squirtle", "Agua", "Squirtle, Squirtle!");
    const bulbasaur = new Pokemon_1.Pokemon("Bulbasaur", "Planta", "bulbasaur...");
    let pokemonsDisponibles = [charmander, squirtle, bulbasaur];
    const jugador = new Jugador_1.Jugador("KAKA");
    let selector = 0;
    console.log(`Hola ${jugador.Nombre}, Bienvenido a esta batalla Pokémon desarollada con TypeScript`);
    console.log(`Elige un pokémon`);
    pokemonsDisponibles.forEach((pokemon, index) => {
        if (index != selector)
            console.log(`♦ ${pokemon.Nombre}`);
        else
            console.log(`♦ ${pokemon.Nombre} ←`);
    });
    console.log();
    (0, batallaPokemon_1.BatallaPokemon)(pokemonsDisponibles);
}
exports.Juego = Juego;
//# sourceMappingURL=juego.js.map