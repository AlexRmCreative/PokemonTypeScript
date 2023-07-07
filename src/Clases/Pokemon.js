"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Squirtle = exports.Charmander = exports.Bulbasaur = exports.Pokemon = void 0;
const chalk_1 = __importDefault(require("chalk"));
class Pokemon {
    constructor(nombre, vida = 100) {
        this.Nombre = nombre;
        this.Vida = vida;
    }
}
exports.Pokemon = Pokemon;
class Bulbasaur extends Pokemon {
    constructor() {
        super(chalk_1.default.green("Bulbasaur"), 100);
    }
}
exports.Bulbasaur = Bulbasaur;
class Charmander extends Pokemon {
    constructor() {
        super(chalk_1.default.red("Charmander"), 100);
    }
}
exports.Charmander = Charmander;
class Squirtle extends Pokemon {
    constructor() {
        super(chalk_1.default.blue("Squirtle"), 100);
    }
}
exports.Squirtle = Squirtle;
//# sourceMappingURL=Pokemon.js.map