import * as readlineSync from 'readline-sync';
import { Juego } from './juego';

//espacios
for (let i = 0; i < 3; i++) {
    console.log();
}
Juego();
readlineSync.question('Presiona Enter para salir...');