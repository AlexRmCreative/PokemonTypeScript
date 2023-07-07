import inquirer, { ListQuestion } from 'inquirer';
import { Pokemon, Charmander, Bulbasaur, Squirtle } from '../Clases/Pokemon';

export async function Juego(): Promise<void> {
    let miPokemon = await ElegirPokemon();
    console.log(`TENGO A ${miPokemon.Nombre}!`);
}

async function ElegirPokemon(): Promise<Pokemon> {
    let pokemonSeleccionado =  new Pokemon("", 0);
    const charmander = new Charmander();
  const bulbasaur = new Bulbasaur();
  const squirtle = new Squirtle();

  const pokemones = [
    { name: charmander.Nombre, value: charmander },
    { name: bulbasaur.Nombre, value: bulbasaur },
    { name: squirtle.Nombre, value: squirtle }
  ];
    const question: ListQuestion = {
        type: 'list',
        name: 'pokemon',
        message: 'Selecciona un Pokemon:',
        choices: pokemones
    };

    try {
        const respuesta = await inquirer.prompt([question]);
        pokemonSeleccionado = respuesta.pokemon;
        console.log(`Haz seleccionado a ${pokemonSeleccionado.Nombre}!`);
    } catch (error) {
        console.error('Ocurrio un error:', error);
    }
    return pokemonSeleccionado;
}
