export const customImagesToRenderPlugin = {
  id: 'customImages',
  afterDatasetsDraw: (chart: any) => {
    let ctx = chart.ctx;
    let chartArea = chart.chartArea;
    ctx.save();

    const src = chartArea.width <= 420 ? 'assets/images/small/' : 'assets/images/big/';

    let xCenter = chartArea.width / 2;
    let yCenter = chartArea.height / 2 + chartArea.width / 40.6;

    let data = chart.config.data.datasets[0].data.filter((data: any) => data);
    let vTotal = data.reduce((a: any, b: any) => a + b, 0);

    data.forEach((v: any, i: any) => {
      let percentage = (v * 100) / vTotal;
      let vAngle = data.slice(0, i).reduce((a: any, b: any) => a + b, 0) + v / 2;
      let angle = (360 / vTotal) * vAngle - 90;
      let radians = angle * (Math.PI / 180);
      let r = yCenter + yCenter / 2 - chartArea.width / 14;
      let x = xCenter + (Math.cos(radians) * r) / 2 + chartArea.width / 23;
      let y = yCenter + (Math.sin(radians) * r) / 2 + chartArea.width / 40.6;

      ctx.translate(x, y);

      const imageName = chart.data.labels[i].toLowerCase().replace(' ', '-');
      let image = new Image();
      image.src = `${src}/${imageName}.png`;

      if (percentage > 3) {
        ctx.drawImage(image, -image.width / 2, -image.height / 2);
      }
      ctx.translate(-x, -y);
    });
  },
};
