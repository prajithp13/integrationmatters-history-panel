import React from 'react';
import { ChartCoordinates } from './helper/chart-coordinates';

export class ChartTemplate {
  static getBarTemplate(chartData: number[], maxValue: number, maxPoints: number) {
    const pointTemplate: any = [];

    chartData.forEach((data, index) => {
      const height = ChartCoordinates.calculateHeight(maxValue, data);
      const width = ChartCoordinates.calculateWidth(maxPoints);
      const y = ChartCoordinates.calculateY(height);
      const x = ChartCoordinates.calculateX(index, width);

      // @ts-ignore
      const barStyles = {
        x: `${x}%`,
        y: `${y}%`,
        height: `${height}%`,
        width: `${width}%`,
      };

      pointTemplate.push(<rect className="bar" style={barStyles} />);
    });

    return pointTemplate;
  }

  static getAreaTemplate(chartData: number[], maxValue: number, maxPoints: number) {
    const points: string[] = [];

    chartData.forEach((data, index) => {
      const height = ChartCoordinates.calculateHeight(maxValue, data);
      const width = ChartCoordinates.calculateWidth(maxPoints);
      const y = ChartCoordinates.calculateY(height);
      const x = ChartCoordinates.calculateX(index, width);
      const movedX = x + width / 2;

      if (index === 0) {
        points.push(`-3 95`);
        points.push(`-3 ${y}`);
      }

      points.push(`${movedX} ${y}`);

      if (index === chartData.length - 1) {
        points.push(`103 ${y}`);
        points.push(`103 95`);
      }
    });

    return <polyline className="polyline" points={points.join(',')} />;
  }
}
