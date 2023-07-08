import chalk from 'chalk';

export class Pokemon
{
    Nombre: string;
    Vida: number;

    constructor(nombre: string, vida: number = 100)
    {
        this.Nombre = nombre;
        this.Vida = vida;
    }
    SetNombre(nombre: string)
    {
        this.Nombre = nombre;
    }
}

export class Bulbasaur extends Pokemon
{
    constructor()
    {
        super(chalk.green("Bulbasaur"), 100);
    }

    override SetNombre(nombre: string)
    {
        this.Nombre = chalk.green(nombre);
    }
}

export class Charmander extends Pokemon
{
    constructor()
    {
        super(chalk.red("Charmander"), 100);
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
        super(chalk.blue("Squirtle"), 100);
    }

    override SetNombre(nombre: string)
    {
        this.Nombre = chalk.blue(nombre);
    }
}