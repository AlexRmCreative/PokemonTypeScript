import chalk from 'chalk';
import { writeDelay } from '../AdditionalFunctions/Lib';
                        //0,      1,       2,        3,       4,      5,     6,        7,       8,      9,     10,      11,       12,        13,        14,     15,      16,       17
const pokemonTipos = ["Normal","Lucha","Volador","Veneno","Tierra","Roca","Bicho","Fantasma","Acero","Fuego","Agua","Planta","Eléctrico","Psíquico","Hielo","Dragón","Siniestro","Hada"];  
export class Pokemon
{
    Nombre: string;
    Tipo: string = pokemonTipos[0];
    Vida: number = 44;
    Ataque: number = 48;
    Defensa: number = 50;
    AtaqueEspecial: number = 58;
    DefensaEspecial: number = 59;
    Velocidad: number = 51;

    constructor(nombre: string)
    {
        this.Nombre = nombre;
    }
    SetNombre(nombre: string)
    {
        this.Nombre = nombre;
    }
    //veneno: Si la ronda actual es menor a la ronda final, aplicar efecto de veneno al pokemon envenado
    async Placaje(target: Pokemon)
    {
        await writeDelay(`${this.Nombre} utiliza ${chalk.grey("Placaje")}...`, 30);
        await writeDelay(`Daño realizado: ${this.Ataque}`, 30);
        target.Vida -= this.Ataque;
    }
}

export class Bulbasaur extends Pokemon
{
    constructor()
    {
        super(chalk.green("Bulbasaur"));
        this.Tipo = pokemonTipos[11];
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
        this.Tipo = pokemonTipos[9];
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
        this.Tipo = pokemonTipos[10];
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