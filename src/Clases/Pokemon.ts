import chalk from 'chalk';
import { writeDelay } from '../AdditionalFunctions/Lib';
                        //0,      1,       2,        3,       4,      5,     6,        7,       8,      9,     10,      11,       12,        13,        14,     15,      16,       17
//Tipo de pokemon = key, superEfectivo = 0, poco efectivo = 1, no es efectivo = 2
const Tipos: { [tipo: string]: string[][] } = {
    /*0*/"Normal": [[],["Roca", "Acero"], ["Fantasma"]],
    /*1*/Lucha: [["Normal", "Roca", "Acero", "Hielo", "Siniestro"], ["Volador", "Veneno", "Bicho", "Psiquico", "Hada"]],
    /*2*/Volador: [["Lucha", "Bicho", "Planta"], ["Roca", "Acero", "Electrico"]],
    /*3*/Veneno: [["Planta", "Hada"], ["Veneno", "Tierra", "Roca", "Fantasma"], ["Acero"]],
    /*4*/Tierra: [["Veneno", "Roca", "Acero", "Fuego", "Electrico"], ["Fantasma", "Planta"], ["Volador"]],
    /*5*/Roca: [["Volador", "Bicho", "Fuego", "Hielo"], ["Lucha", "Tierra", "Acero"]],
    /*6*/Bicho: [["Planta", "Electrico", "Siniestro"], ["Lucha", "Volador", "Veneno", "Fantasma", "Acero", "Fuego", "Hada"]],
    /*7*/Fantasma: [["Fantasma", "Psiquico"], ["Siniestro"], ["Normal"]],
    /*8*/Acero: [["Roca", "Hielo", "Hada"], ["Acero", "Fuego", "Agua", "Electrico"]],
    /*9*/Fuego: [["Bicho", "Acero", "Planta", "Hielo"], ["Roca", "Fuego", "Agua", "Dragon"]],
    /*10*/Agua: [["Tierra", "Roca", "Fuego"], ["Agua", "Planta", "Dragon"]],
    /*11*/Planta: [["Tierra", "Roca", "Agua"], ["Volador", "Veneno", "Bicho", "Acero", "Fuego", "Planta", "Dragon"]],
    /*12*/Electrico: [["Volador", "Agua"], ["Planta", "Electrico", "Dragon"], ["Tierra"]],
    /*13*/Psiquico: [["Lucha", "Veneno"], ["Psiquico", "Acero"], ["Siniestro"]],
    /*14*/Hielo: [["Volador", "Tierra", "Planta", "Dragon"], ["Acero", "Fuego", "Agua", "Hielo"]],
    /*15*/Dragon: [["Dragon"], ["Acero"], ["Hada"]],
    /*16*/Siniestro: [["Fantasma", "Psiquico"], ["Lucha", "Siniestro", "Hada"]],
    /*17*/Hada: [["Lucha", "Dragon", "Siniestro"], ["Veneno", "Acero", "Fuego"]]
}
export class Pokemon
{
    // #region Estadisticas
    Nombre: string;
    Tipo: string = Object.keys(Tipos)[0];
    Vida: number = 44;
    Ataque: number = 48;
    Defensa: number = 50;
    AtaqueEspecial: number = 58;
    DefensaEspecial: number = 59;
    Velocidad: number = 51;
    //#endregion

    constructor(nombre: string)
    {
        this.Nombre = nombre;
    }
    SetNombre(nombre: string)
    {
        this.Nombre = nombre;
    }
    //veneno: Si la ronda actual es menor a la ronda final, aplicar efecto de veneno al pokemon envenado
    async Placaje(): Promise<void> {
        const TipoHabilidad = Tipos[0];
        // Resto del código de la función Placaje
        await writeDelay(`${this.Nombre} utiliza ${chalk.grey("Placaje")}...`, 30);
        await writeDelay(`Daño realizado: ${this.Ataque}`, 30);
    }
}

export class Bulbasaur extends Pokemon
{
    constructor()
    {
        super(chalk.green("Bulbasaur"));
        this.Tipo = Object.keys(Tipos)[11];
        this.Vida = 45;
        this.Ataque = 49;
        this.Defensa = 49;
        this.AtaqueEspecial = 65;
        this.DefensaEspecial = 65;
        this.Velocidad = 45;
    }

    override SetNombre(nombre: string)
    {
        this.Nombre = chalk.green(nombre);
    }

    LatigoCepa()
    {

    }
}

export class Charmander extends Pokemon
{
    constructor()
    {
        super(chalk.red("Charmander"));
        this.Tipo = Object.keys(Tipos)[9];
        this.Vida = 39;
        this.Ataque = 52;
        this.Defensa = 43;
        this.AtaqueEspecial = 60;
        this.DefensaEspecial = 50;
        this.Velocidad = 65;
    }

    override SetNombre(nombre: string)
    {
        this.Nombre = chalk.red(nombre);
    }
}

export class Squirtle extends Pokemon
{
    constructor()
    {
        super(chalk.blue("Squirtle"));
        this.Tipo = Object.keys(Tipos)[10];
        this.Vida = 44;
        this.Ataque = 48;
        this.Defensa = 65;
        this.AtaqueEspecial = 50;
        this.DefensaEspecial = 64;
        this.Velocidad = 43;
    }

    override SetNombre(nombre: string)
    {
        this.Nombre = chalk.blue(nombre);
    }
}