import { calcular } from '../src/script07';

describe('Testes para a função calcular', () => {
    test('Deve retornar a soma correta de dois números', () => {
        expect(calcular(5, 3, '+')).toBe(8);
    });

    test('Deve retornar a subtração correta de dois números', () => {
        expect(calcular(5, 3, '-')).toBe(2);
    });

    test('Deve retornar a multiplicação correta de dois números', () => {
        expect(calcular(5, 3, '*')).toBe(15);
    });

    test('Deve retornar a divisão correta de dois números', () => {
        expect(calcular(6, 2, '/')).toBe(3);
    });

    test('Deve retornar "Operação inválida" para operação inválida', () => {
        expect(calcular(5, 3, '%')).toBe('Operação inválida');
    });

    test('Deve retornar "Um ou ambos os números são inválidos" para números inválidos', () => {
        expect(calcular(NaN, 3, '+')).toBe('Um ou ambos os números são inválidos');
        expect(calcular(5, NaN, '+')).toBe('Um ou ambos os números são inválidos');
    });

    test('Deve retornar "Não é possível dividir por zero" para divisão por zero', () => {
        expect(calcular(5, 0, '/')).toBe('Não é possível dividir por zero');
    });
});
