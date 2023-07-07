"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juego = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const Lib_1 = require("../AdditionalFunctions/Lib");
const Pokemon_1 = require("../Clases/Pokemon");
const BatallaPokemon_1 = require("./BatallaPokemon");
const Entrenador_1 = require("../Clases/Entrenador");
let pokemonSeleccionado = new Pokemon_1.Pokemon("", 0);
const charmander = new Pokemon_1.Charmander();
const bulbasaur = new Pokemon_1.Bulbasaur();
const squirtle = new Pokemon_1.Squirtle();
let pokemonesDisponibles = [
    { name: charmander.Nombre, value: charmander },
    { name: bulbasaur.Nombre, value: bulbasaur },
    { name: squirtle.Nombre, value: squirtle }
];
const jugador1 = new Entrenador_1.Entrenador();
const entrenadorIA = new Entrenador_1.Entrenador();
const textDelay = 35;
function Juego() {
    return __awaiter(this, void 0, void 0, function* () {
        //Jugador elige pokemon
        jugador1.Pokemones.push(yield ElegirPokemon(pokemonesDisponibles));
        //Entrenador(IA) elige (aleatoriamente) a un pokemon disponible
        entrenadorIA.Pokemones.push(pokemonesDisponibles[(0, Lib_1.numAleatorio)(pokemonesDisponibles.length)].value);
        yield (0, BatallaPokemon_1.BatallaPokemon)(jugador1.Pokemones, entrenadorIA.Pokemones);
    });
}
exports.Juego = Juego;
function ElegirPokemon(lista) {
    return __awaiter(this, void 0, void 0, function* () {
        const question = {
            type: 'list',
            name: 'pokemon',
            message: 'Selecciona un Pokémon:',
            choices: pokemonesDisponibles
        };
        try {
            const respuesta = yield inquirer_1.default.prompt([question]);
            const pokemonSeleccionado = respuesta.pokemon;
            // Eliminar el pokemon seleccionado del array pokemonesDisponibles
            pokemonesDisponibles = pokemonesDisponibles.filter(pokemon => pokemon.value !== pokemonSeleccionado);
            yield (0, Lib_1.writeDelay)(`¡Has seleccionado a ${pokemonSeleccionado.Nombre}!\n`, textDelay);
            return pokemonSeleccionado;
        }
        catch (error) {
            console.error('Ocurrió un error:', error);
            throw error; // Lanzar el error para propagarlo
        }
    });
}
//# sourceMappingURL=Juego.js.map