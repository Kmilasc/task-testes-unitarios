import soma from '../src/script02';

describe('Testes para a função de soma', () => {
  test('Deve retornar a soma de dois números positivos', () => {
    expect(soma(1, 2)).toBe(3);
  });

  test('Deve retornar a soma de um número positivo e um número negativo', () => {
    expect(soma(5, -3)).toBe(2);
  });

  test('Deve retornar a soma de dois números negativos', () => {
    expect(soma(-10, -5)).toBe(-15);
  });

  test('Deve retornar a soma de zero com um número positivo', () => {
    expect(soma(0, 7)).toBe(7);
  });

  test('Deve retornar a soma de zero com um número negativo', () => {
    expect(soma(0, -3)).toBe(-3);
  });
});