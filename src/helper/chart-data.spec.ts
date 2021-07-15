import { ChartData } from './chart-data';

describe('ChartData', () => {
  it('empty array on empty input', () => {
    const expectedResult: number[] = [];

    const result = ChartData.sumData([]);

    expect(result).toEqual(expectedResult);
  });

  it('empty array when child array is empty', () => {
    const expectedResult: number[] = [];

    const result = ChartData.sumData([[]]);

    expect(result).toEqual(expectedResult);
  });

  it('all values of one child array', () => {
    const expectedResult: number[] = [1, 2, 3, 4, 5];

    const result = ChartData.sumData([[1, 2, 3, 4, 5]]);

    expect(result).toEqual(expectedResult);
  });

  it('sums up two arrays of same length', () => {
    const expectedResult: number[] = [2, 4, 6, 8, 10];

    const result = ChartData.sumData([
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
    ]);

    expect(result).toEqual(expectedResult);
  });

  it('sums up two arrays, where first array has a greater length', () => {
    const expectedResult: number[] = [2, 4, 6, 8, 10, 6, 7, 8, 9, 10];

    const result = ChartData.sumData([
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [1, 2, 3, 4, 5],
    ]);

    expect(result).toEqual(expectedResult);
  });

  it('sums up two arrays, where second array has a greater length', () => {
    const expectedResult: number[] = [2, 4, 6, 8, 10, 6, 7, 8, 9, 10];

    const result = ChartData.sumData([
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    ]);

    expect(result).toEqual(expectedResult);
  });
});
