import { TrendDirection } from '../types/trend-direction';

export class DataInspector {
  static getTrendDirection(status?: string): TrendDirection {
    if (!status || status === 'success') {
      return 'positive';
    }

    return 'negative';
  }
}
