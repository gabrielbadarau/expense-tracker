import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

import { ExpenseCategory } from '../../../../shared/model/expense-category.model';

import { clickLabelPlugin } from '../../plugins/clickLabel.plugin';
import { customImagesToRenderPlugin } from '../../plugins/customImagesToRender.plugin';

@Component({
  selector: 'custom-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  chart: any;
  insideDoughnutText: any;

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
            data: [900, 800, 700, 600, 500, 400, 300, 200, 200, 200, 200, 170],
            backgroundColor: backgroundColors,
            hoverBackgroundColor: backgroundColors,
          },
        ],
        labels: Object.values(ExpenseCategory),
      },
      options: {
        events: ['click'],
        responsive: true,
        cutout: '51%',
        plugins: {
          tooltip: {
            enabled: false,
          },
          legend: {
            display: false,
          },
        },
      },
      plugins: [clickLabelPlugin, customImagesToRenderPlugin],
    });
  }
}
