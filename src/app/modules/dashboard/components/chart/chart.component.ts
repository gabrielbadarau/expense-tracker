import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { ChartService } from '../../../../shared/services/chart.service';

import { clickLabelPlugin } from '../../plugins/click-label.plugin';
import { customImagesToRenderPlugin } from '../../plugins/custom-images-to-render.plugin';

@Component({
  selector: 'custom-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  @Input() set sortedExpenses(
    value: {
      [key: string]: string | number;
    }[]
  ) {
    this._sortedExpenses = value;

    if (this.chart) {
      this.chart.data.datasets[0].data = this.chartService.getSortedAmounts(value);
      this.chart.data.datasets[0].labels = this.chartService.getSortedCategories(value);
      this.chart.update();
    } else {
      this.createChart(value);
    }
  }

  get sortedExpenses(): {
    [key: string]: string | number;
  }[] {
    return this._sortedExpenses;
  }

  chart: any;

  constructor(private chartService: ChartService) {}

  private _sortedExpenses!: {
    [key: string]: string | number;
  }[];

  createChart(
    expenses: {
      [key: string]: string | number;
    }[]
  ) {
    const backgroundColors = [
      '#6F8659',
      '#6D5986',
      '#de6060',
      '#9daf89',
      '#528FC8',
      '#B9A2D3',
      '#DFBC71',
      '#00C7EA',
      '#C47C85',
      '#D4CFBD',
      '#1D85A4',
      '#DAC0C2',
    ];

    this.chart = new Chart('MyChart', {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: this.chartService.getSortedAmounts(expenses),
            backgroundColor: backgroundColors,
            hoverBackgroundColor: backgroundColors,
          },
        ],
        labels: this.chartService.getSortedCategories(expenses),
      },
      options: {
        layout: {
          padding: 20,
        },
        events: ['click'],
        responsive: true,
        plugins: {
          datalabels: {
            anchor: 'end',
            borderColor: 'white',
            borderRadius: 25,
            borderWidth: 2,
            color: 'white',
            backgroundColor: function (context) {
              return context.dataset.backgroundColor as string;
            },
            font: {
              weight: 'bold',
              family: 'sans-serif',
            },
            padding: 6,
            display: function (context) {
              const dataSet = context.dataset.data as Number[];
              const sum = dataSet.reduce((accumulator, currentValue) => {
                const acc = accumulator as number;
                const cur = currentValue as number;
                return acc + cur;
              }, 0);

              const percentage = ((context.dataset.data[context.dataIndex] as number) * 100) / (sum as number);

              return percentage <= 3 ? false : true;
            },
            formatter: function (value, context) {
              const dataSet = context.dataset.data as Number[];
              const sum = dataSet.reduce((accumulator, currentValue) => {
                const acc = accumulator as number;
                const cur = currentValue as number;
                return acc + cur;
              }, 0);
              const percentage = (value * 100) / (sum as number);

              return percentage.toFixed(2) + '%';
            },
          },
          tooltip: {
            enabled: false,
          },
          legend: {
            display: false,
          },
        },
      },
      plugins: [clickLabelPlugin, customImagesToRenderPlugin, ChartDataLabels],
    });
  }
}
