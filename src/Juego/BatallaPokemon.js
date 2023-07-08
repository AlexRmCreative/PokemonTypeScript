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
function BatallaPokemon(P1, P2) {
    return __awaiter(this, void 0, void 0, function* () {
        let entrenadores = [P1, P2];
        const nombresP1 = P1.Pokemones.map((pokemon) => pokemon.Nombre).join(', ');
        const nombresP2 = P2.Pokemones.map((pokemon) => pokemon.Nombre).join(', ');
        console.clear();
        console.log(`${P1.Nombre} vs ${P2.Nombre}\n`);
        for (const element of entrenadores) {
            yield (0, Lib_1.writeDelay)(`${element.Nombre}: "${element.Pokemones[0].Nombre}, ¡Yo te elijo!"\n`, 35);
        }
    });
}
exports.BatallaPokemon = BatallaPokemon;
//# sourceMappingURL=BatallaPokemon.js.map