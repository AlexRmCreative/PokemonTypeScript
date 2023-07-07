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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatallaPokemon = void 0;
const Lib_1 = require("../AdditionalFunctions/Lib");
function BatallaPokemon(P1Pokemones, P2Pokemones) {
    return __awaiter(this, void 0, void 0, function* () {
        const nombresP1 = P1Pokemones.map((pokemon) => pokemon.Nombre).join(', ');
        const nombresP2 = P2Pokemones.map((pokemon) => pokemon.Nombre).join(', ');
        yield (0, Lib_1.writeDelay)(`${nombresP1} VS ${nombresP2}`, 35);
    });
}
exports.BatallaPokemon = BatallaPokemon;
//# sourceMappingURL=BatallaPokemon.js.map