import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

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
    this.chart = new Chart('MyChart', {
      type: 'doughnut',

      data: {
        labels: [
          'Beauty',
          'Clothing',
          'Entertainment',
          'Food',
          'Gift',
          'Health',
          'Household',
          'Ordered Food',
          'Self Development',
          'Social Life',
          'Transportation',
          'Other',
        ],
        datasets: [
          {
            data: [900, 800, 700, 600, 500, 400, 300, 200, 100, 80, 70, 60],
            backgroundColor: [
              '#8b9f76',
              '#97a665',
              '#a9aa50',
              '#c1ac39',
              '#deab20',
              '#ffa600',
              '#ff8b45',
              '#ff786c',
              '#f4718b',
              '#d3729f',
              '#ad75a6',
              '#89769f',
            ],
          },
        ],
      },
      options: {
        responsive: true,

        plugins: {

          tooltip: {
            enabled: false,
          },
          legend: {
            display: false,
          },
        },
        elements: {
          arc: {
            hoverBorderColor: '#1F2937',
            hoverBorderWidth: 2,
          },
        },
      },
    });
  }
}
