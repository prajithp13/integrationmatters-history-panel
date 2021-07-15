import { ChartType } from './chart-type';

export interface HistoryOptions {
  chartType: ChartType;
  maxPoints: number;
  status: string;
}
