import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { ExpenseCategory } from '../../../../shared/model/expense-category.model';

import { clickLabelPlugin } from '../../plugins/click-label.plugin';
import { customImagesToRenderPlugin } from '../../plugins/custom-images-to-render.plugin';

@Component({
  selector: 'custom-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  chart: any;

  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
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
            data: [900, 800, 700, 600, 500, 400, 300, 200, 200, 0, 0, 0],
            backgroundColor: backgroundColors,
            hoverBackgroundColor: backgroundColors,
          },
        ],
        labels: Object.values(ExpenseCategory),
      },
      options: {
        layout: {
          padding: 15,
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
              const value = context.dataset.data[context.dataIndex] as number;
              return value <= 100 ? false : true;
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
