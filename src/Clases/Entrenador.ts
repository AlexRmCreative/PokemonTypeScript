import { Pokemon } from "./Pokemon";

//Estados en los que puede estar un entrenador
const Estados = ["Libre", "Batallando"];
export class Entrenador
{
    Nombre: string = "";
    Pokemones: Pokemon[] = [];
    Pokemon: Pokemon = new Pokemon("");
    Estado: string;
    constructor(pokemones: Pokemon[] = [])
    {
        this.Pokemones = pokemones;
        this.Pokemon = pokemones[0];
        this.Estado = Estados[0];
    }

    UsarHabilidad(funcion: Function, estado: string){
        if (!Estados.includes(estado)) {
            throw new Error(`Estado inválido. Los estados válidos son: ${Estados.join(", ")}`);
        }
    }
    OrdenarPokemones()
    {
        if(this.Pokemones.length > 1)
        {
            //
        }
        else{
            this.Pokemon = this.Pokemones[0];
        }
    }
}