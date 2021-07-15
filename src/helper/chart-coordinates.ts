import { ChartValues } from '../types/chart-values';

export class ChartCoordinates {
  static calculateHeight(maxValue: number, value: number) {
    const chartHeight = 100 - (ChartValues.BORDER_TOP + ChartValues.BORDER_BOTTOM);

    return (chartHeight / maxValue) * value;
  }

  static calculateWidth(maxPoints: number) {
    const sumOfGaps = ChartValues.getNumberOfGaps(maxPoints) * ChartValues.SPACE_BETWEEN;
    const gapsAndBorders = ChartValues.BORDER_LEFT + ChartValues.BORDER_RIGHT + sumOfGaps;

    return (100 - gapsAndBorders) / maxPoints;
  }

  static calculateY(barHeight: number) {
    return 100 - barHeight - ChartValues.BORDER_BOTTOM;
  }

  static calculateX(index: number, barWidth: number) {
    if (!index) {
      return ChartValues.BORDER_LEFT;
    }

    return ChartValues.BORDER_LEFT + ChartValues.SPACE_BETWEEN * index + barWidth * index;
  }
}
