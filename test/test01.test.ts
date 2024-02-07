import { formatarString } from '../src/script01';

describe('formatarString', () => {
  test('Deve retornar a string formatada corretamente', () => {
    const input = 'ELE REALMENTE FUNCIONA';
    const expectedOutput = `****************************************************************************************
BEM-VINDO AO MEU PROGRAMA
****************************************************************************************
ELE REALMENTE FUNCIONA
****************************************************************************************
EU USEI FUNÇÃO PARA FAZER ISSO
****************************************************************************************`;

    const result = formatarString(input);
    expect(result).toEqual(expectedOutput);
  });

  test('Deve retornar a string formatada corretamente para entrada vazia', () => {
    const input = '';
    const expectedOutput = `****************************************************************************************
BEM-VINDO AO MEU PROGRAMA
****************************************************************************************
****************************************************************************************
EU USEI FUNÇÃO PARA FAZER ISSO
****************************************************************************************`;

    const result = formatarString(input);
    expect(result).toEqual(expectedOutput);
  });
});
