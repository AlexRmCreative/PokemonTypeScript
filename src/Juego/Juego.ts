import inquirer, { ListQuestion } from 'inquirer';
import { numAleatorio, writeDelay } from '../AdditionalFunctions/Lib';
import { Pokemon, Charmander, Bulbasaur, Squirtle } from '../Clases/Pokemon';
import { BatallaPokemon } from './BatallaPokemon';
import { Entrenador } from '../Clases/Entrenador';

let pokemonSeleccionado = new Pokemon("", 0);
const charmander = new Charmander();
const bulbasaur = new Bulbasaur();
const squirtle = new Squirtle();
let pokemonesDisponibles = [
    { name: charmander.Nombre, value: charmander },
    { name: bulbasaur.Nombre, value: bulbasaur },
    { name: squirtle.Nombre, value: squirtle }
];

const jugador1 = new Entrenador();
const entrenadorIA = new Entrenador();

const textDelay = 35;

export async function Juego(): Promise<void> {
    //Jugador elige pokemon
    jugador1.Pokemones.push(await ElegirPokemon(pokemonesDisponibles));
    //Entrenador(IA) elige (aleatoriamente) a un pokemon disponible
    entrenadorIA.Pokemones.push(pokemonesDisponibles[numAleatorio(pokemonesDisponibles.length)].value);

    await BatallaPokemon(jugador1.Pokemones, entrenadorIA.Pokemones);
  }
  
  async function ElegirPokemon(lista: {}[]): Promise<Pokemon> {
    const question: ListQuestion = {
      type: 'list',
      name: 'pokemon',
      message: 'Selecciona un Pokémon:',
      choices: pokemonesDisponibles
    };
  
    try {
      const respuesta = await inquirer.prompt([question]);
      const pokemonSeleccionado = respuesta.pokemon;
      // Eliminar el pokemon seleccionado del array pokemonesDisponibles
      pokemonesDisponibles = pokemonesDisponibles.filter(pokemon => pokemon.value !== pokemonSeleccionado);
      await writeDelay(`¡Has seleccionado a ${pokemonSeleccionado.Nombre}!\n`, textDelay);
      return pokemonSeleccionado;
    } catch (error) {
      console.error('Ocurrió un error:', error);
      throw error; // Lanzar el error para propagarlo
    }
  }
  