function NumAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const ListaTipos: string[] = ["Fuego", "Planta", "Agua"];
export class Pokemon {
    Nombre: string = "";
    Tipo: string = "Normal";
    Vida: number = 20;
    Defensa: number = 2;
    Dano: number = 3;
    Velocidad: number = 1;

    constructor(nombre: string, tipo: string = "") {
        this.Nombre = nombre;
        ListaTipos.forEach((element: string) => {
            if (tipo == element) {
                this.Tipo = tipo;
            }
        });
    }
    Aranazo(objetivo: Pokemon) {
        let critico: number = NumAleatorio(0, 100);
        if (critico >= 70)
            objetivo.Vida -= this.Dano * 2;
        else
            objetivo.Vida -= this.Dano;
    }
    Grunido(objetivo: Pokemon) {
        objetivo.Dano -= NumAleatorio(1, 3);
    }
}