"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curar = exports.CalcularDano = exports.CalcularEfectividad = void 0;
function CalcularEfectividad(pokemonAtacante, pokemonObjetivo) {
    let efectividad = 0;
    //Si "tipoA" es efectivo contra "tipoB: efectividad = 1.5, si es super efectivo: efectividad = 2, si es ultra efectivo: efectivdad = 4, si no es efectivo: efectividad = 0.5, si no es para nada efectivo: efectividad = 0.25" 
    return efectividad;
}
exports.CalcularEfectividad = CalcularEfectividad;
function CalcularDano(pokemon, habilidadTipo) {
    //STAB = Se aplicara 1.5 mas daño si el tipo de habilidad usada es igual al tipo del pokemon
    const STAB = (habilidadTipo === Object.keys(pokemon.Tipo)[0]) ? 1.5 : 1;
    return 0.01 * STAB;
}
exports.CalcularDano = CalcularDano;
function Curar(tipoDeCuracion, curacion, objetivo) {
    // Lógica para curar al objetivo
    console.log(`Se curó ${curacion} puntos de vida de tipo ${tipoDeCuracion} a ${objetivo}`);
}
exports.Curar = Curar;
//# sourceMappingURL=Habilidades.js.map