import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

import { ExpenseCategory } from '../../../../shared/model/expense-category.model';

var selectedIndex: number;
var labelName: string;

const imageURLs = [
  'https://i.stack.imgur.com/2RAv2.png',
  'https://i.stack.imgur.com/Tq5DA.png',
  'https://i.stack.imgur.com/3KRtW.png',
  'https://i.stack.imgur.com/iLyVi.png',
  'https://i.stack.imgur.com/2RAv2.png',
  'https://i.stack.imgur.com/Tq5DA.png',
  'https://i.stack.imgur.com/3KRtW.png',
  'https://i.stack.imgur.com/iLyVi.png',
  'https://i.stack.imgur.com/2RAv2.png',
  'https://i.stack.imgur.com/Tq5DA.png',
  'https://i.stack.imgur.com/3KRtW.png',
  'https://i.stack.imgur.com/iLyVi.png',
];

const images = imageURLs.map((v) => {
  var image = new Image();
  image.src = v;
  return image;
});
const customImagesOnArc = {
  id: 'customImage',
  afterDatasetsDraw: (chart: any) => {
    var ctx = chart.ctx;
    ctx.save();
    var xCenter = chart.canvas.width / 2;
    var yCenter = chart.canvas.height / 2;
    var data = chart.config.data.datasets[0].data;
    var vTotal = data.reduce((a: any, b: any) => a + b, 0);
    data.forEach((v: any, i: any) => {
      var vAngle = data.slice(0, i).reduce((a: any, b: any) => a + b, 0) + v / 2;
      var angle = (360 / vTotal) * vAngle - 90;
      var radians = angle * (Math.PI / 180);
      var r = yCenter + yCenter / 2;
      var x = xCenter + (Math.cos(radians) * r) / 2;
      var y = yCenter + (Math.sin(radians) * r) / 2;
      ctx.translate(x, y);
      var image = images[i];
      ctx.drawImage(image, -image.width / 2, -image.height / 2);
      ctx.translate(-x, -y);
    });
    ctx.restore();
  },
};

const clickLabel = {
  id: 'clickLabel',
  afterDraw(chart: any) {
    const {
      ctx,
      chartArea: { top, width, height },
    } = chart;

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    if (selectedIndex !== undefined && selectedIndex !== -1) {
      const color = chart.data.datasets[0].backgroundColor[selectedIndex];
      const value = chart._metasets[0]._parsed[selectedIndex].toFixed(2);

      ctx.save();

      ctx.font = `normal ${height / 18}px sans-serif`;
      ctx.fillStyle = color;

      // draw circle
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, height / 4 + 1, 0, 2 * Math.PI);
      ctx.fill();

      // draw text inside circle
      ctx.fillStyle = 'white';
      ctx.fillText(labelName, width / 2, height / 2 + top - height / 13);
      ctx.fillText(value, width / 2, height / 2 + top);
      ctx.fillText('RON', width / 2, height / 2 + top + height / 13);

      ctx.restore();
    } else {
      const sum = chart._metasets[0].total.toFixed(2);

      ctx.font = `normal ${height / 14}px sans-serif`;
      ctx.save();

      ctx.fillStyle = 'black';

      // draw text inside circle
      ctx.fillText(sum, width / 2, height / 2 + top - height / 32);
      ctx.fillText('RON', width / 2, height / 2 + top + height / 18);
      ctx.restore();
    }
  },
};

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
            data: [900, 800, 700, 600, 500, 400, 300, 200, 100, 80, 70, 60],
            backgroundColor: backgroundColors,
            hoverBackgroundColor: backgroundColors,
            // hoverBorderColor: backgroundColors,
            // hoverBorderWidth: 2,
          },
        ],
        labels: Object.values(ExpenseCategory),
      },
      options: {
        events: ['click'],
        responsive: true,
        cutout: '51%',
        onClick(event, element, chart) {
          console.log(element[0]);
          if (element[0]) {
            labelName = chart.config.data.labels?.[element[0].index] as string;
            selectedIndex = element[0].index;
          } else {
            labelName = '';
            selectedIndex = -1;
          }
        },
        plugins: {
          tooltip: {
            enabled: false,
          },
          legend: {
            display: false,
          },
        },
      },
      plugins: [clickLabel, customImagesOnArc],
    });
  }
}
