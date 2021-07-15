import { PanelPlugin } from '@grafana/data';
import { History } from './History';
import { ChartValues } from './types/chart-values';
import { HistoryOptions } from './types/history-options';

export const plugin = new PanelPlugin<HistoryOptions>(History).setPanelOptions((builder) => {
  return builder
    .addRadio({
      path: 'chartType',
      category: ['Chart configuration'],
      name: 'Type',
      defaultValue: 'bar',
      settings: {
        options: [
          {
            value: 'bar',
            label: 'Bar',
          },
          {
            value: 'area',
            label: 'Area',
          },
        ],
      },
    })
    .addNumberInput({
      path: 'maxPoints',
      category: ['Chart configuration'],
      name: 'Maximum number of points',
      defaultValue: ChartValues.MAX_POINTS,
      settings: {
        min: 10,
        max: 30,
        step: 1,
        integer: true,
      },
    })
    .addSelect({
      path: 'status',
      name: 'Status',
      category: ['Chart configuration'],
      defaultValue: 'success',
      settings: {
        options: [
          {
            value: 'success',
            label: 'Success',
          },
          {
            value: 'warning',
            label: 'Warning',
          },
          {
            value: 'error',
            label: 'Error',
          },
          {
            value: 'timeout',
            label: 'Timeout',
          },
        ],
      },
    });
});
