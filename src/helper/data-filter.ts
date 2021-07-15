import { DataFrame, Field, Vector } from '@grafana/data';
import { ChartValues } from '../types/chart-values';
import { RefId } from '../types/ref-id';
import { SeriesFilter } from './series-filter';

export class DataFilter {
  static getCompleteData(series: DataFrame[], refId: RefId) {
    return series
      .filter((series) => SeriesFilter.filterByRefId(series, refId))
      .map((series) => SeriesFilter.findByType(series, 'number'))
      .map((field) => this.getValues(field));
  }

  //
  // |---|---|---|
  // X   /   /   /
  //
  static limitElements(data: number[], numberOfPoints: number = ChartValues.MAX_POINTS) {
    const ratio = numberOfPoints / data.length;
    let currentRatio = ratio;

    // increasing i by one to skip first value
    // and keep last value
    const result = data.filter(() => {
      let result = false;

      if (currentRatio >= 1) {
        currentRatio -= 1;

        result = true;
      }

      currentRatio += ratio;

      return result;
    });

    if (data.length > numberOfPoints && result.length < numberOfPoints) {
      result.push(data[data.length - 1]);
    }

    return result;
  }

  private static getValues(field?: Field<any, Vector<number>>) {
    if (!field) {
      return [];
    }

    return field.values.toArray();
  }
}
