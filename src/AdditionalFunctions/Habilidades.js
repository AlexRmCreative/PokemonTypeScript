"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curar = exports.CalcularDano = exports.CalcularEfectividad = void 0;
function CalcularEfectividad(tipoA, tipoB) {
    //Tipo de pokemon = key, superEfectivo = 0, poco efectivo = 1, no es efectivo = 2
    const Tipos = {
        Normal: [[], ["Roca", "Acero"], ["Fantasma"]],
        Lucha: [["Normal", "Roca", "Acero", "Hielo", "Siniestro"], ["Volador", "Veneno", "Bicho", "Psiquico", "Hada"]],
        Volador: [["Lucha", "Bicho", "Planta"], ["Roca", "Acero", "Electrico"]],
        Veneno: [["Planta", "Hada"], ["Veneno", "Tierra", "Roca", "Fantasma"], ["Acero"]],
        Tierra: [["Veneno", "Roca", "Acero", "Fuego", "Electrico"], ["Fantasma", "Planta"], ["Volador"]],
        Roca: [["Volador", "Bicho", "Fuego", "Hielo"], ["Lucha", "Tierra", "Acero"]],
        Bicho: [["Planta", "Electrico", "Siniestro"], ["Lucha", "Volador", "Veneno", "Fantasma", "Acero", "Fuego", "Hada"]],
        Fantasma: [["Fantasma", "Psiquico"], ["Siniestro"], ["Normal"]],
        Acero: [["Roca", "Hielo", "Hada"], ["Acero", "Fuego", "Agua", "Electrico"]],
        Fuego: [["Bicho", "Acero", "Planta", "Hielo"], ["Roca", "Fuego", "Agua", "Dragon"]],
        Agua: [["Tierra", "Roca", "Fuego"], ["Agua", "Planta", "Dragon"]],
        Planta: [["Tierra", "Roca", "Agua"], ["Volador", "Veneno", "Bicho", "Acero", "Fuego", "Planta", "Dragon"]],
        Electrico: [["Volador", "Agua"], ["Planta", "Electrico", "Dragon"], ["Tierra"]],
        Psiquico: [["Lucha", "Veneno"], ["Psiquico", "Acero"], ["Siniestro"]],
        Hielo: [["Volador", "Tierra", "Planta", "Dragon"], ["Acero", "Fuego", "Agua", "Hielo"]],
        Dragon: [["Dragon"], ["Acero"], ["Hada"]],
        Siniestro: [["Fantasma", "Psiquico"], ["Lucha", "Siniestro", "Hada"]],
        Hada: [["Lucha", "Dragon", "Siniestro"], ["Veneno", "Acero", "Fuego"]]
    };
    let efectividad = 0;
    //Si "tipoA" es efectivo contra "tipoB: efectividad = 1.5, si es super efectivo: efectividad = 2, si es ultra efectivo: efectivdad = 4, si no es efectivo: efectividad = 0.5, si no es para nada efectivo: efectividad = 0.25" 
    return efectividad;
}
exports.CalcularEfectividad = CalcularEfectividad;
function CalcularDano(pokemon, habilidadTipo) {
    //STAB = Se aplicara 1.5 mas daño si el tipo de habilidad usada es igual al tipo del pokemon
    const STAB = (pokemon.Tipo === habilidadTipo) ? 1.5 : 1;
    return 0.01 * STAB;
}
exports.CalcularDano = CalcularDano;
function Curar(tipoDeCuracion, curacion, objetivo) {
    // Lógica para curar al objetivo
    console.log(`Se curó ${curacion} puntos de vida de tipo ${tipoDeCuracion} a ${objetivo}`);
}
exports.Curar = Curar;
//# sourceMappingURL=Habilidades.js.map