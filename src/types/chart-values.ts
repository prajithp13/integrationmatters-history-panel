export class ChartValues {
  static MAX_POINTS = 14;
  static BORDER_TOP = 5;
  static BORDER_BOTTOM = ChartValues.BORDER_TOP;
  static BORDER_LEFT = 3;
  static BORDER_RIGHT = ChartValues.BORDER_LEFT;
  static SPACE_BETWEEN = 2;

  static getNumberOfGaps(maxPoints: number = ChartValues.MAX_POINTS) {
    return maxPoints - 1;
  }
}
