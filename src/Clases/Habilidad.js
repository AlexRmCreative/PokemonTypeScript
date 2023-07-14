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
exports.HabilidadPokemon = exports.HabilidadEntrenador = exports.Habilidad = void 0;
const chalk_1 = __importDefault(require("chalk"));
const Lib_1 = require("../AdditionalFunctions/Lib");
//Como funciona?
//Habilidad es una clase que se puede llamar como una funcion
//Cuando llamas a Habilidad, te pedira el nombre de la habilidad y esta ejecutara su función
//Sabremos cuando una Habilidad puede ser usada cuando esta existe en la lista de habilidades "ListHabilidades".
class Habilidad {
    constructor(nombreHabilidad = "") {
        this.ListHabilidades = {
            ""() {
                console.log("Esto es una habilidad...");
            },
        };
        const habilidadEncontrada = Object.keys(this.ListHabilidades).find(habilidad => habilidad.toLowerCase() === nombreHabilidad.toLowerCase());
        if (!habilidadEncontrada) {
            throw new Error("Habilidad no definida");
        }
        else {
            this.Nombre = habilidadEncontrada;
        }
    }
    call() {
        this.ListHabilidades[this.Nombre]();
    }
}
exports.Habilidad = Habilidad;
class HabilidadEntrenador extends Habilidad {
    constructor(entrenador) {
        super();
        this.ListHabilidades = {
            "OrdenarPokemones": () => {
                if (this.Entrenador.Pokemones.length > 1) {
                    //crear interfaz donde obtener el array de pokemones del entrenador y cambiar su orden en el array cambiando A(seleccionado a mover) por B (seleccionado a reemplazar).
                }
                else {
                    this.Entrenador.Pokemon = this.Entrenador.Pokemones[0];
                }
            },
        };
        this.Entrenador = entrenador;
    }
}
exports.HabilidadEntrenador = HabilidadEntrenador;
class HabilidadPokemon extends Habilidad {
    constructor(nombreHabilidad, pokemon, habilidadTipo) {
        super();
        this.ListHabilidades = {
            "Placaje": () => __awaiter(this, void 0, void 0, function* () {
                yield (0, Lib_1.writeDelay)(`${this.Nombre} utiliza ${chalk_1.default.grey("Placaje")}...`, 25);
                yield (0, Lib_1.writeDelay)(`Daño realizado: ${this.Pokemon.Ataque}`, 25);
            })
        };
        this.Nombre = nombreHabilidad;
        this.Pokemon = pokemon;
        this.HabilidadTipo = habilidadTipo;
    }
}
exports.HabilidadPokemon = HabilidadPokemon;
//# sourceMappingURL=Habilidad.js.map