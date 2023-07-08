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
exports.nuevoNombre = exports.numAleatorio = exports.writeDelay = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
//Escribe las letras de izquierda a derecha una por una cada cierto tiempo
function writeDelay(text, delay) {
    return __awaiter(this, void 0, void 0, function* () {
        let index = 0;
        return new Promise((resolve) => {
            const writeNextLetter = () => {
                if (index < text.length) {
                    const currentLetter = text.charAt(index);
                    process.stdout.write(currentLetter);
                    index++;
                    setTimeout(writeNextLetter, delay);
                }
                else {
                    resolve();
                }
            };
            writeNextLetter();
        });
    });
}
exports.writeDelay = writeDelay;
function numAleatorio(max) {
    return Math.floor(Math.random() * max);
}
exports.numAleatorio = numAleatorio;
function nuevoNombre(mensaje) {
    return __awaiter(this, void 0, void 0, function* () {
        const pregunta = [
            {
                type: 'input',
                name: 'nombre',
                message: mensaje,
            },
        ];
        const respuesta = yield inquirer_1.default.prompt(pregunta);
        return respuesta.nombre;
    });
}
exports.nuevoNombre = nuevoNombre;
//# sourceMappingURL=Lib.js.map