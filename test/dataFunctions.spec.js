import { filterData,filterGeneration,computeStats } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';
//console.log(fakeData);
describe('filterData', () => {
  it('debería filtrar por tipo "ice" y devolver solo los Pokemón del tipo correspondiente', () => {
    const filterBy = 'type';
    const value = 'ice';
    const result = filterData(fakeData, filterBy, value);
    const allIceType = result.every(element => element.type.includes('ice'));
    expect(allIceType).toBe(true);
    expect(result.length).toEqual(0);
  });
});

describe('filterGeneration', () => {
  it('debería filtrar por generación "Kanto" y devolver la cantidad de pokemones generación kanto', () => {
    const filterBy = 'generation';
    const value = 'kanto';
    const result = filterGeneration(fakeData, filterBy, value);
    expect(result.length).toEqual(4);
  });
});

describe('computeStats', () => {
  it('debería calcular el peso promedio de los pokemones en la data', () => {
    const result = computeStats(fakeData);
    expect(result).toEqual(32.1);
  });
});
