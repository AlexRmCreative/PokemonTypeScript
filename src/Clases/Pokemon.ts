import chalk from 'chalk';
import { writeDelay } from '../AdditionalFunctions/Lib';
import { Habilidad, HabilidadPokemon } from './Habilidad';

//Tipo de pokemon = key, superEfectivo = 0, poco efectivo = 1, no es efectivo = 2
const Tipos: { [tipo: string]: string[][] } = {
    /*0*/"Normal": [[], ["Roca", "Acero"], ["Fantasma"]],
    /*1*/"Lucha": [["Normal", "Roca", "Acero", "Hielo", "Siniestro"], ["Volador", "Veneno", "Bicho", "Psiquico", "Hada"]],
    /*2*/"Volador": [["Lucha", "Bicho", "Planta"], ["Roca", "Acero", "Electrico"]],
    /*3*/"Veneno": [["Planta", "Hada"], ["Veneno", "Tierra", "Roca", "Fantasma"], ["Acero"]],
    /*4*/"Tierra": [["Veneno", "Roca", "Acero", "Fuego", "Electrico"], ["Fantasma", "Planta"], ["Volador"]],
    /*5*/"Roca": [["Volador", "Bicho", "Fuego", "Hielo"], ["Lucha", "Tierra", "Acero"]],
    /*6*/"Bicho": [["Planta", "Electrico", "Siniestro"], ["Lucha", "Volador", "Veneno", "Fantasma", "Acero", "Fuego", "Hada"]],
    /*7*/"Fantasma": [["Fantasma", "Psiquico"], ["Siniestro"], ["Normal"]],
    /*8*/"Acero": [["Roca", "Hielo", "Hada"], ["Acero", "Fuego", "Agua", "Electrico"]],
    /*9*/"Fuego": [["Bicho", "Acero", "Planta", "Hielo"], ["Roca", "Fuego", "Agua", "Dragon"]],
    /*10*/"Agua": [["Tierra", "Roca", "Fuego"], ["Agua", "Planta", "Dragon"]],
    /*11*/"Planta": [["Tierra", "Roca", "Agua"], ["Volador", "Veneno", "Bicho", "Acero", "Fuego", "Planta", "Dragon"]],
    /*12*/"Electrico": [["Volador", "Agua"], ["Planta", "Electrico", "Dragon"], ["Tierra"]],
    /*13*/"Psiquico": [["Lucha", "Veneno"], ["Psiquico", "Acero"], ["Siniestro"]],
    /*14*/"Hielo": [["Volador", "Tierra", "Planta", "Dragon"], ["Acero", "Fuego", "Agua", "Hielo"]],
    /*15*/"Dragon": [["Dragon"], ["Acero"], ["Hada"]],
    /*16*/"Siniestro": [["Fantasma", "Psiquico"], ["Lucha", "Siniestro", "Hada"]],
    /*17*/"Hada": [["Lucha", "Dragon", "Siniestro"], ["Veneno", "Acero", "Fuego"]]
}
export class Pokemon {
    // #region Estadisticas
    Nombre: string;
    Tipo: string = Object.keys(Tipos)[0];
    Efectividad: string[][] = Tipos["Normal"];
    Vida: number = 44;
    Ataque: number = 48;
    Defensa: number = 50;
    AtaqueEspecial: number = 58;
    DefensaEspecial: number = 59;
    Velocidad: number = 51;
    //#endregion
    
    Placaje = new HabilidadPokemon("Placaje",this,this.Tipo);
    Habilidades: HabilidadPokemon[] = [this.Placaje];

    constructor(nombre: string = "") {
        this.Nombre = nombre;
    }
    SetNombre(nombre: string) {
        this.Nombre = nombre;
    }
    //veneno: Si la ronda actual es menor a la ronda final, aplicar efecto de veneno al pokemon envenado
}

export class Charmander extends Pokemon {
    Tipo: string = Object.keys(Tipos)[9];
    Efectividad: string[][] = Tipos["Fuego"];
    Vida = 39;
    Ataque = 52;
    Defensa = 43;
    AtaqueEspecial = 60;
    DefensaEspecial = 50;
    Velocidad = 65;
    constructor() {
        super(chalk.red("Charmander"));
    }

    override SetNombre(nombre: string) {
        this.Nombre = chalk.red(nombre);
    }
}

export class Squirtle extends Pokemon {
    Tipo: string = Object.keys(Tipos)[10];
    Efectividad: string[][] = Tipos["Agua"];
    Vida = 44;
    Ataque = 48;
    Defensa = 65;
    AtaqueEspecial = 50;
    DefensaEspecial = 64;
    Velocidad = 43;
    constructor() {
        super(chalk.blue("Squirtle"));
    }

    override SetNombre(nombre: string) {
        this.Nombre = chalk.blue(nombre);
    }
}

export class Bulbasaur extends Pokemon {
    Tipo: string = Object.keys(Tipos)[11];
    Efectividad: string[][] = Tipos["Planta"];
    Vida = 45;
    Ataque = 49; Defensa = 49; AtaqueEspecial = 65; DefensaEspecial = 65; Velocidad = 45;
    constructor() {
        super(chalk.green("Bulbasaur"));
    }

    override SetNombre(nombre: string) {
        this.Nombre = chalk.green(nombre);
    }

    LatigoCepa() {

    }
}