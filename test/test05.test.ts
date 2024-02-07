import { converterSegundos } from '../src/script05';

describe('Testes para a função converterSegundos', () => {
    test('Deve retornar o tempo corretamente formatado para 200000 segundos', () => {
        expect(converterSegundos(200000)).toBe('2 dia(s), 7 hora(s), 33 minuto(s), 20 segundo(s)');
    });

    test('Deve retornar apenas segundos para 10 segundos', () => {
        expect(converterSegundos(10)).toBe('10 segundo(s)');
    });

    test('Deve retornar apenas minutos para 180 segundos', () => {
        expect(converterSegundos(180)).toBe('3 minuto(s)');
    });

    test('Deve retornar apenas horas para 7200 segundos', () => {
        expect(converterSegundos(7200)).toBe('2 hora(s)');
    });

    test('Deve retornar apenas dias para 86400 segundos', () => {
        expect(converterSegundos(86400)).toBe('1 dia(s)');
    });
});
