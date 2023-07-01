function NumAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const ListaTipos: string[] = ["Fuego", "Planta", "Agua"];
export class Pokemon {
    Nombre: string = "";
    Tipo: string = "Normal";
    Vida: number = 20;
    Defensa: number = 2;
    Dano: number = 4;
    Velocidad: number = 1;
    Ruido: string = "";

    constructor(nombre: string, tipo: string = "", ruido: string = "...") {
        this.Nombre = nombre;
        this.Ruido = ruido;
        ListaTipos.forEach((element: string) => {
            if (tipo == element) {
                this.Tipo = tipo;
            }
        });
    }
    HacerRuido()
    {
        console.log(this.Ruido);
    }

    Aranazo(objetivo: Pokemon) {
        let critico: number = NumAleatorio(0, 100);
        console.log(`${this.Nombre} utiliza Arañazo...`);
        if (critico >= 80) {
            objetivo.Vida -= this.Dano * 2;
            console.log(`Daño critico!`);
            console.log(`Daño realizado: ${this.Dano * 2}`);
        }
        else
        {
            objetivo.Vida -= this.Dano;
            console.log(`Daño realizado: ${this.Dano}`);
        }
    }

    Grunido(objetivo: Pokemon) {
        let debilitacion = NumAleatorio(1, 2);
        objetivo.Dano -= debilitacion;
        console.log(`${objetivo} ha sido debilitado...`);
    }

    Animo() {
        let aumento = NumAleatorio(1, 3);
        this.Dano += aumento;
        console.log(`El daño de ${this.Nombre} ha aumentado...`);
    }
}