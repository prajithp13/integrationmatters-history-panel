import { DataFilter } from './data-filter';

describe('DataFilter', () => {
  it('empty array if empty array is given', () => {
    const result = DataFilter.limitElements([]);

    expect(result).toEqual([]);
  });

  it('all elements when size is 13', () => {
    const input = new Array(13).fill(1).map((v, i) => i + 1);
    const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    const result = DataFilter.limitElements(input);

    expect(result).toEqual(expectedResult);
  });

  it('all elements when size is 14', () => {
    const input = new Array(14).fill(1).map((v, i) => i + 1);
    const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    const result = DataFilter.limitElements(input);

    expect(result).toEqual(expectedResult);
  });

  it('every second element when size is 28', () => {
    const input = new Array(28).fill(1).map((v, i) => i + 1);
    const expectedResult = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28];

    const result = DataFilter.limitElements(input);

    expect(result).toEqual(expectedResult);
  });

  it('every third element when size is 42', () => {
    const input = new Array(42).fill(1).map((v, i) => i + 1);
    const expectedResult = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42];

    const result = DataFilter.limitElements(input);

    expect(result).toEqual(expectedResult);
  });

  it('all elements except first on size 15', () => {
    const input = new Array(15).fill(1).map((v, i) => i + 1);
    const expectedResult = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    const result = DataFilter.limitElements(input);

    expect(result).toEqual(expectedResult);
  });

  it('14 elements when size is 1000', () => {
    const input = new Array(1000).fill(1).map((v, i) => i + 1);
    const expectedResult = [72, 143, 215, 286, 358, 429, 500, 572, 643, 715, 786, 858, 929, 1000];

    const result = DataFilter.limitElements(input);

    expect(result).toEqual(expectedResult);
  });

  it('14 elements when size is 1440', () => {
    const input = new Array(1440).fill(1).map((v, i) => i + 1);
    const expectedResult = [103, 206, 309, 412, 515, 618, 721, 823, 926, 1029, 1132, 1235, 1338, 1440];

    const result = DataFilter.limitElements(input);

    expect(result).toEqual(expectedResult);
  });
});
