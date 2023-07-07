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
const Pokemon_1 = require("../Clases/Pokemon");
function Juego() {
    return __awaiter(this, void 0, void 0, function* () {
        let miPokemon = yield ElegirPokemon();
        console.log(`TENGO A ${miPokemon.Nombre}!`);
    });
}
exports.Juego = Juego;
function ElegirPokemon() {
    return __awaiter(this, void 0, void 0, function* () {
        let pokemonSeleccionado = new Pokemon_1.Pokemon("", 0);
        const charmander = new Pokemon_1.Charmander();
        const bulbasaur = new Pokemon_1.Bulbasaur();
        const squirtle = new Pokemon_1.Squirtle();
        const pokemones = [
            { name: charmander.Nombre, value: charmander },
            { name: bulbasaur.Nombre, value: bulbasaur },
            { name: squirtle.Nombre, value: squirtle }
        ];
        const question = {
            type: 'list',
            name: 'pokemon',
            message: 'Selecciona un Pokemon:',
            choices: pokemones
        };
        try {
            const respuesta = yield inquirer_1.default.prompt([question]);
            pokemonSeleccionado = respuesta.pokemon;
            console.log(`Haz seleccionado a ${pokemonSeleccionado.Nombre}!`);
        }
        catch (error) {
            console.error('Ocurrio un error:', error);
        }
        return pokemonSeleccionado;
    });
}
//# sourceMappingURL=Juego.js.map