import inquirer, { ListQuestion } from 'inquirer';
import { nuevoNombre, numAleatorio, writeDelay } from '../AdditionalFunctions/Lib';
import { Pokemon, Charmander, Bulbasaur, Squirtle } from '../Clases/Pokemon';
import { CombatePokemon } from './CombatePokemon';
import { Entrenador } from '../Clases/Entrenador';

let pokemonSeleccionado = new Pokemon("");
const charmander = new Charmander(); const bulbasaur = new Bulbasaur(); const squirtle = new Squirtle();
let pokemonesDisponibles = [
  { name: charmander.Nombre, value: charmander },
  { name: bulbasaur.Nombre, value: bulbasaur },
  { name: squirtle.Nombre, value: squirtle }
];

const jugador = new Entrenador(); const entrenadorIA = new Entrenador();
entrenadorIA.Nombre = "AlexRmCreative"

export async function Juego(): Promise<void> {
  jugador.Nombre = await nuevoNombre("Ingresa tu nombre: ");
  //Jugador elige pokemon (y lo guarda en su array de pokemones)
  jugador.Pokemones.push(await ElegirPokemon(pokemonesDisponibles));
  //Entrenador(IA) elige (aleatoriamente) a un pokemon disponible
  entrenadorIA.Pokemones.push(pokemonesDisponibles[numAleatorio(pokemonesDisponibles.length)].value);
  jugador.Pokemon = jugador.Pokemones[0];
  entrenadorIA.Pokemon = entrenadorIA.Pokemones[0];
  CombatePokemon(jugador, entrenadorIA);
}

async function ElegirPokemon(lista: {}[]): Promise<Pokemon> {
  //Utilizando inquirer que creara un menu de seleccion de tipo lista. Más info en: https://www.npmjs.com/package/inquirer/v/8.2.4
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
    await writeDelay(`¡Has seleccionado a ${pokemonSeleccionado.Nombre}!\n`);

    //Nombrar al pokemon sin que el nombre sea vacio (Si el nombre es vacio, el nombre del pokemon no sera afectado)
    //(los nombres pueden de disponer de simbolos raros y espacios entre letras)
    let nombrarPokemon: string = (await nuevoNombre(`Dale un nombre a ${pokemonSeleccionado.Nombre}: `)).trim();
    if (nombrarPokemon != '') pokemonSeleccionado.SetNombre(nombrarPokemon);
    return pokemonSeleccionado;
  } catch (error) {
    console.error('Ocurrió un error:', error);
    throw error;
  }
}
