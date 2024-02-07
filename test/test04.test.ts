import { mensagemAtendimento } from '../src/script04';

describe('Testes para a função mensagemAtendimento', () => {
    test('Deve retornar a mensagem correta com os nomes fornecidos', () => {
        expect(mensagemAtendimento('João', 'Maria')).toBe('Olá João eu me chamo Maria, em que posso ajudar?');
        expect(mensagemAtendimento('Ana', 'Pedro')).toBe('Olá Ana eu me chamo Pedro, em que posso ajudar?');
    });
});
