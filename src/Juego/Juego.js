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
const jugador = new Entrenador_1.Entrenador();
const entrenadorIA = new Entrenador_1.Entrenador();
entrenadorIA.Nombre = "AlexRmCreative";
const textDelay = 35;
function Juego() {
    return __awaiter(this, void 0, void 0, function* () {
        jugador.Nombre = yield (0, Lib_1.nuevoNombre)("Ingresa tu nombre: ");
        //Jugador elige pokemon
        jugador.Pokemones.push(yield ElegirPokemon(pokemonesDisponibles));
        //Entrenador(IA) elige (aleatoriamente) a un pokemon disponible
        entrenadorIA.Pokemones.push(pokemonesDisponibles[(0, Lib_1.numAleatorio)(pokemonesDisponibles.length)].value);
        //Comienza la batalla pokemon!
        yield (0, BatallaPokemon_1.BatallaPokemon)(jugador, entrenadorIA);
    });
}
exports.Juego = Juego;
function ElegirPokemon(lista) {
    return __awaiter(this, void 0, void 0, function* () {
        //Utilizando inquirer que creara un menu de seleccion de tipo lista. Más info en: https://www.npmjs.com/package/inquirer/v/8.2.4
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
            //Nombrar al pokemon sin que el nombre sea vacio
            //(los nombres pueden de disponer de simbolos raros y espacios entre letras)
            let nombrarPokemon = (yield (0, Lib_1.nuevoNombre)(`Dale un nombre a ${pokemonSeleccionado.Nombre}: `)).trim();
            if (nombrarPokemon != '')
                pokemonSeleccionado.SetNombre(nombrarPokemon);
            return pokemonSeleccionado;
        }
        catch (error) {
            console.error('Ocurrió un error:', error);
            throw error;
        }
    });
}
//# sourceMappingURL=Juego.js.map