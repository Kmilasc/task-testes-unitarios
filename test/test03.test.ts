import { verificarResposta } from '../src/script03';

describe('Testes para a função verificarResposta', () => {
    test('Deve retornar "Parabéns" quando o texto for igual a "Sim"', () => {
        expect(verificarResposta('Sim')).toBe('Parabéns');
    });

    test('Deve retornar "Encerrando sua sessão..." quando o texto for igual a "Não"', () => {
        expect(verificarResposta('Não')).toBe('Encerrando sua sessão...');
    });

    test('Deve retornar "Você tem noções dos seus atos?" para qualquer outro texto', () => {
        expect(verificarResposta('Outro texto')).toBe('Você tem noções dos seus atos?');
    });
});
