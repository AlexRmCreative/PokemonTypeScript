"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = exports.ListaTipos = void 0;
function NumAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.ListaTipos = ["Fuego", "Planta", "Agua"];
class Pokemon {
    constructor(nombre, tipo = "", ruido = "...") {
        this.Nombre = "";
        this.Tipo = "Normal";
        this.Vida = 20;
        this.Defensa = 2;
        this.Dano = 4;
        this.Velocidad = 1;
        this.Ruido = "";
        this.Nombre = nombre;
        this.Ruido = ruido;
        exports.ListaTipos.forEach((element) => {
            if (tipo == element) {
                this.Tipo = tipo;
            }
        });
    }
    HacerRuido() {
        console.log(this.Ruido);
    }
    Aranazo(objetivo) {
        let critico = NumAleatorio(0, 100);
        console.log(`${this.Nombre} utiliza Ara�azo...`);
        if (critico >= 80) {
            objetivo.Vida -= this.Dano * 2;
            console.log(`Da�o critico!`);
            console.log(`Da�o realizado: ${this.Dano * 2}`);
        }
        else {
            objetivo.Vida -= this.Dano;
            console.log(`Da�o realizado: ${this.Dano}`);
        }
    }
    Grunido(objetivo) {
        let debilitacion = NumAleatorio(1, 2);
        objetivo.Dano -= debilitacion;
        console.log(`${objetivo} ha sido debilitado...`);
    }
    Animo() {
        let aumento = NumAleatorio(1, 3);
        this.Dano += aumento;
        console.log(`El da�o de ${this.Nombre} ha aumentado...`);
    }
}
exports.Pokemon = Pokemon;
//# sourceMappingURL=pokemon.js.map