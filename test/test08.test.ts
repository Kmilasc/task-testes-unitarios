import { calcularMediaPonderada } from '../src/script08';

describe('Testes para a função calcularMediaPonderada', () => {
    test('Deve calcular corretamente a média ponderada', () => {
        expect(calcularMediaPonderada(7, 2, 8, 3, 6, 2)).toBe(7.33);
    });

    test('Deve calcular corretamente a média ponderada com pesos diferentes', () => {
        expect(calcularMediaPonderada(5, 1, 9, 4, 7, 2)).toBe(7.44);
    });
});
