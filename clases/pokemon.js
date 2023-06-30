"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = exports.ListaTipos = void 0;
function NumAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.ListaTipos = ["Fuego", "Planta", "Agua"];
class Pokemon {
    constructor(nombre, tipo = "") {
        this.Nombre = "";
        this.Tipo = "Normal";
        this.Vida = 20;
        this.Defensa = 2;
        this.Dano = 3;
        this.Velocidad = 1;
        this.Nombre = nombre;
        exports.ListaTipos.forEach((element) => {
            if (tipo == element) {
                this.Tipo = tipo;
            }
        });
    }
    Aranazo(objetivo) {
        let critico = NumAleatorio(0, 100);
        if (critico >= 70)
            objetivo.Vida -= this.Dano * 2;
        else
            objetivo.Vida -= this.Dano;
    }
    Grunido(objetivo) {
        objetivo.Dano -= NumAleatorio(1, 3);
    }
}
exports.Pokemon = Pokemon;
//# sourceMappingURL=pokemon.js.map