//Escribe las letras de izquierda a derecha una por una cada cierto tiempo
export async function writeDelay(text: string, delay: number): Promise<void> {
    let index = 0;
    
    return new Promise<void>((resolve) => {
        const writeNextLetter = () => {
            if (index < text.length) {
                const currentLetter = text.charAt(index);
                process.stdout.write(currentLetter);
                index++;
                setTimeout(writeNextLetter, delay);
            } else {
                resolve();
            }
        };

        writeNextLetter();
    });
}

export function numAleatorio(max: number) {
    return Math.floor(Math.random() * max);
}