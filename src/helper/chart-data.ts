export class ChartData {
  static sumData(dataArrays: number[][]) {
    const result: number[] = [];

    for (const data of dataArrays) {
      for (const index in data) {
        if (typeof result[index] !== 'number') {
          result[index] = data[index] || 0;
        } else {
          result[index] += data[index] || 0;
        }
      }
    }

    return result;
  }
}
