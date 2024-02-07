export function calcular(numero1: number, numero2: number, operacao: string): number | string {
    if (isNaN(numero1) || isNaN(numero2)) {
        return 'Um ou ambos os números são inválidos';
    }
    if (!['+', '-', '*', '/'].includes(operacao)) {
        return 'Operação inválida';
    }
    if (operacao === '/' && numero2 === 0) {
        return 'Não é possível dividir por zero';
    }
    switch (operacao) {
        case '+':
            return numero1 + numero2;
        case '-':
            return numero1 - numero2;
        case '*':
            return numero1 * numero2;
        case '/':
            return numero1 / numero2;
        default:
            return 'Operação inválida';
    }
}
