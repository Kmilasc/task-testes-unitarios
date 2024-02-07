import { verificarAnoBissexto } from '../src/script06';

describe('Testes para a função verificarAnoBissexto', () => {
    test('Deve retornar true para o ano 2000', () => {
        expect(verificarAnoBissexto(2000)).toBe(true);
    });

    test('Deve retornar true para o ano 2020', () => {
        expect(verificarAnoBissexto(2020)).toBe(true);
    });

    test('Deve retornar false para o ano 1900', () => {
        expect(verificarAnoBissexto(1900)).toBe(false);
    });

    test('Deve retornar false para o ano 2021', () => {
        expect(verificarAnoBissexto(2021)).toBe(false);
    });

    test('Deve retornar true para o ano 2008', () => {
        expect(verificarAnoBissexto(2008)).toBe(true);
    });
});
