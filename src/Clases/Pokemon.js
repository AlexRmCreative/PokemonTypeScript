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
exports.Bulbasaur = exports.Squirtle = exports.Charmander = exports.Pokemon = void 0;
const chalk_1 = __importDefault(require("chalk"));
const Lib_1 = require("../AdditionalFunctions/Lib");
//Tipo de pokemon = key, superEfectivo = 0, poco efectivo = 1, no es efectivo = 2
const Tipos = {
    /*0*/ "Normal": [[], ["Roca", "Acero"], ["Fantasma"]],
    /*1*/ "Lucha": [["Normal", "Roca", "Acero", "Hielo", "Siniestro"], ["Volador", "Veneno", "Bicho", "Psiquico", "Hada"]],
    /*2*/ "Volador": [["Lucha", "Bicho", "Planta"], ["Roca", "Acero", "Electrico"]],
    /*3*/ "Veneno": [["Planta", "Hada"], ["Veneno", "Tierra", "Roca", "Fantasma"], ["Acero"]],
    /*4*/ "Tierra": [["Veneno", "Roca", "Acero", "Fuego", "Electrico"], ["Fantasma", "Planta"], ["Volador"]],
    /*5*/ "Roca": [["Volador", "Bicho", "Fuego", "Hielo"], ["Lucha", "Tierra", "Acero"]],
    /*6*/ "Bicho": [["Planta", "Electrico", "Siniestro"], ["Lucha", "Volador", "Veneno", "Fantasma", "Acero", "Fuego", "Hada"]],
    /*7*/ "Fantasma": [["Fantasma", "Psiquico"], ["Siniestro"], ["Normal"]],
    /*8*/ "Acero": [["Roca", "Hielo", "Hada"], ["Acero", "Fuego", "Agua", "Electrico"]],
    /*9*/ "Fuego": [["Bicho", "Acero", "Planta", "Hielo"], ["Roca", "Fuego", "Agua", "Dragon"]],
    /*10*/ "Agua": [["Tierra", "Roca", "Fuego"], ["Agua", "Planta", "Dragon"]],
    /*11*/ "Planta": [["Tierra", "Roca", "Agua"], ["Volador", "Veneno", "Bicho", "Acero", "Fuego", "Planta", "Dragon"]],
    /*12*/ "Electrico": [["Volador", "Agua"], ["Planta", "Electrico", "Dragon"], ["Tierra"]],
    /*13*/ "Psiquico": [["Lucha", "Veneno"], ["Psiquico", "Acero"], ["Siniestro"]],
    /*14*/ "Hielo": [["Volador", "Tierra", "Planta", "Dragon"], ["Acero", "Fuego", "Agua", "Hielo"]],
    /*15*/ "Dragon": [["Dragon"], ["Acero"], ["Hada"]],
    /*16*/ "Siniestro": [["Fantasma", "Psiquico"], ["Lucha", "Siniestro", "Hada"]],
    /*17*/ "Hada": [["Lucha", "Dragon", "Siniestro"], ["Veneno", "Acero", "Fuego"]]
};
class Pokemon {
    //#endregion
    constructor(nombre) {
        this.Tipo = Object.keys(Tipos)[0];
        this.Efectividad = Tipos["Normal"];
        this.Vida = 44;
        this.Ataque = 48;
        this.Defensa = 50;
        this.AtaqueEspecial = 58;
        this.DefensaEspecial = 59;
        this.Velocidad = 51;
        this.Nombre = nombre;
    }
    SetNombre(nombre) {
        this.Nombre = nombre;
    }
    //veneno: Si la ronda actual es menor a la ronda final, aplicar efecto de veneno al pokemon envenado
    Placaje() {
        return __awaiter(this, void 0, void 0, function* () {
            const TipoHabilidad = Tipos[0];
            // Resto del código de la función Placaje
            yield (0, Lib_1.writeDelay)(`${this.Nombre} utiliza ${chalk_1.default.grey("Placaje")}...`, 30);
            yield (0, Lib_1.writeDelay)(`Daño realizado: ${this.Ataque}`, 30);
        });
    }
}
exports.Pokemon = Pokemon;
class Charmander extends Pokemon {
    constructor() {
        super(chalk_1.default.red("Charmander"));
        this.Tipo = Object.keys(Tipos)[9];
        this.Efectividad = Tipos["Fuego"];
        this.Vida = 39;
        this.Ataque = 52;
        this.Defensa = 43;
        this.AtaqueEspecial = 60;
        this.DefensaEspecial = 50;
        this.Velocidad = 65;
    }
    SetNombre(nombre) {
        this.Nombre = chalk_1.default.red(nombre);
    }
}
exports.Charmander = Charmander;
class Squirtle extends Pokemon {
    constructor() {
        super(chalk_1.default.blue("Squirtle"));
        this.Tipo = Object.keys(Tipos)[10];
        this.Efectividad = Tipos["Agua"];
        this.Vida = 44;
        this.Ataque = 48;
        this.Defensa = 65;
        this.AtaqueEspecial = 50;
        this.DefensaEspecial = 64;
        this.Velocidad = 43;
    }
    SetNombre(nombre) {
        this.Nombre = chalk_1.default.blue(nombre);
    }
}
exports.Squirtle = Squirtle;
class Bulbasaur extends Pokemon {
    constructor() {
        super(chalk_1.default.green("Bulbasaur"));
        this.Tipo = Object.keys(Tipos)[11];
        this.Efectividad = Tipos["Planta"];
        this.Vida = 45;
        this.Ataque = 49;
        this.Defensa = 49;
        this.AtaqueEspecial = 65;
        this.DefensaEspecial = 65;
        this.Velocidad = 45;
    }
    SetNombre(nombre) {
        this.Nombre = chalk_1.default.green(nombre);
    }
    LatigoCepa() {
    }
}
exports.Bulbasaur = Bulbasaur;
//# sourceMappingURL=Pokemon.js.map