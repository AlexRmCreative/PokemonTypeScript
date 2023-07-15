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
exports.CombatePokemon = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const Lib_1 = require("../AdditionalFunctions/Lib");
function CombatePokemon(P1, P2) {
    return __awaiter(this, void 0, void 0, function* () {
        let entrenadores = [P1, P2];
        let turno = 0;
        yield PresentacionCombate(entrenadores);
        //El primer turno lo tendra el entrenador con el pokemon mas veloz
        if (P1.Pokemon.Velocidad > P2.Pokemon.Velocidad) {
            turno = 1;
        }
        MenuBatalla(entrenadores[turno].Pokemon);
    });
}
exports.CombatePokemon = CombatePokemon;
function PresentacionCombate(entrenadores) {
    return __awaiter(this, void 0, void 0, function* () {
        let P1 = entrenadores[0];
        let P2 = entrenadores[1];
        console.clear();
        console.log(`${P1.Nombre} vs ${P2.Nombre}\n`);
        for (const element of entrenadores) {
            yield (0, Lib_1.writeDelay)(`${element.Nombre}: "${element.Pokemones[0].Nombre}, ¡Yo te elijo!"\n`, 35);
        }
    });
}
function MenuBatalla(pokemonBatallando) {
    return __awaiter(this, void 0, void 0, function* () {
        //Utilizando inquirer que creara un menu de seleccion de tipo lista. Más info en: https://www.npmjs.com/package/inquirer/v/8.2.4
        let habilidadesNombre = [];
        //Necesitaremos añadir los nombre de las habilidades para añadirlas en un menu
        pokemonBatallando.Habilidades.forEach(element => {
            habilidadesNombre.push(element.Nombre);
        });
        const question = {
            type: 'list',
            name: 'habilidad',
            message: `Que deberia de hacer ${pokemonBatallando.Nombre}?`,
            choices: habilidadesNombre
        };
        try {
            const respuesta = yield inquirer_1.default.prompt([question]);
            console.log("ELIGIO: " + respuesta);
        }
        catch (error) {
            console.error('Ocurrió un error:', error);
            throw error;
        }
    });
}
//# sourceMappingURL=CombatePokemon.js.map