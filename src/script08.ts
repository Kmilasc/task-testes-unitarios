export function calcularMediaPonderada(nota1: number, peso1: number, nota2: number, peso2: number, nota3: number, peso3: number): number {
    const somaPesos = peso1 + peso2 + peso3;
    const mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / somaPesos;
    return parseFloat(mediaPonderada.toFixed(2));
}

