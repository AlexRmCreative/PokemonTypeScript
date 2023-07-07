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
}

export class Bulbasaur extends Pokemon
{
    constructor()
    {
        super(chalk.green("Bulbasaur"), 100);
    }
}

export class Charmander extends Pokemon
{
    constructor()
    {
        super(chalk.red("Charmander"), 100);
    }
}

export class Squirtle extends Pokemon
{
    constructor()
    {
        super(chalk.blue("Squirtle"), 100);
    }
}