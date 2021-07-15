import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PanelProps } from '@grafana/data';
import { useTheme } from '@grafana/ui';
import React from 'react';
import { ChartTemplate } from './chart-template';
import { AbsoluteNumbers } from './helper/absolute-numbers';
import { Changes } from './helper/changes';
import { ChartData } from './helper/chart-data';
import { DataFilter } from './helper/data-filter';
import './History.scss';
import { DataInspector } from './helper/data-inspector';
import { Styles } from './helper/styles';
import { HistoryOptions } from './types/history-options';

export const History: React.FC<PanelProps<HistoryOptions>> = ({ width, height, data, options }) => {
  const wrapperStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  const theme = useTheme();

  const { chartType, maxPoints, status } = options;

  const trendDirection = DataInspector.getTrendDirection(status);

  const totalFiltered = AbsoluteNumbers.getTotal(data.series, 'total-filtered');
  const previousFiltered = AbsoluteNumbers.getTotal(data.series, 'previous-filtered');

  const change = Changes.getChange(previousFiltered, totalFiltered);
  const changeOperator = Changes.getChangeOperator(previousFiltered, totalFiltered);

  const wrapperClassNames = Styles.getWrapperClassNames('im-history', height);
  const changeClassNames = Styles.getChangeValueClassNames(changeOperator, trendDirection);
  const chartClassNames = Styles.getChartClassNames(changeOperator, trendDirection);
  const trendClassNames = Styles.getTrendClassNames(changeOperator, trendDirection);
  const trendIcon = Styles.getTrendIcon(changeOperator);

  const completeChartData = DataFilter.getCompleteData(data.series, 'total-filtered');
  const limitedChartData: number[][] = [];
  for (const data of completeChartData) {
    limitedChartData.push(DataFilter.limitElements(data, maxPoints));
  }
  const chartData = ChartData.sumData(limitedChartData);
  const maxValue = Math.max.apply(null, chartData);
  let pointTemplate: any;
  if (chartType === 'bar') {
    pointTemplate = ChartTemplate.getBarTemplate(chartData, maxValue, maxPoints);
  } else if (chartType === 'area') {
    pointTemplate = ChartTemplate.getAreaTemplate(chartData, maxValue, maxPoints);
  }

  return (
    <div style={wrapperStyle} className={wrapperClassNames}>
      <div className="diagram-container" style={{ backgroundColor: theme.colors.panelBorder }}>
        <svg className={chartClassNames} key={height} viewBox="0 0 100 100" preserveAspectRatio="none">
          <g>{pointTemplate}</g>
        </svg>
      </div>

      <div className="main-text">
        <span className="percentage">{totalFiltered}</span>

        <span className={trendClassNames}>
          <FontAwesomeIcon icon={trendIcon} />
        </span>
      </div>

      <div className="comparison">
        <div className="compare-text">
          <span className="value">Previous</span>

          <span className="spacer" />

          <span className="value">Change</span>
        </div>

        <div className="compare-values">
          <span className="value">{previousFiltered}</span>

          <span className="spacer" />

          <span className={changeClassNames}>
            {changeOperator} {change} %
          </span>
        </div>
      </div>
    </div>
  );
};
