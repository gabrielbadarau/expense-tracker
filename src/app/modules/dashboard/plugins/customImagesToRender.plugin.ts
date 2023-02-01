const smallImageURLs = [
  'assets/images/small/clothing.png',
  'assets/images/small/clothing.png',
  'https://i.stack.imgur.com/3KRtW.png',
  'https://i.stack.imgur.com/iLyVi.png',
  'https://i.stack.imgur.com/2RAv2.png',
  'https://i.stack.imgur.com/Tq5DA.png',
  'assets/images/small/clothing.png',
  'assets/images/small/clothing.png',
  'assets/images/small/clothing.png',
  'assets/images/small/clothing.png',
  'assets/images/small/clothing.png',
  'assets/images/small/clothing.png',
];

const bigImageURLs = [
  'assets/images/big/clothing.png',
  'assets/images/big/clothing.png',
  'https://i.stack.imgur.com/3KRtW.png',
  'https://i.stack.imgur.com/iLyVi.png',
  'https://i.stack.imgur.com/2RAv2.png',
  'https://i.stack.imgur.com/Tq5DA.png',
  'assets/images/big/clothing.png',
  'assets/images/big/clothing.png',
  'assets/images/big/clothing.png',
  'assets/images/big/clothing.png',
  'assets/images/big/clothing.png',
  'assets/images/big/clothing.png',
];

export const customImagesToRenderPlugin = {
  id: 'customImages',
  afterDatasetsDraw: (chart: any) => {
    let images: any = [];
    let ctx = chart.ctx;
    ctx.save();

    images = (chart.canvas.width <= 530 ? smallImageURLs : bigImageURLs).map((v) => {
      let image = new Image();
      image.src = v;
      return image;
    });

    let xCenter = chart.canvas.width / 2;
    let yCenter = chart.canvas.height / 2;
    let data = chart.config.data.datasets[0].data;
    let vTotal = data.reduce((a: any, b: any) => a + b, 0);
    data.forEach((v: any, i: any) => {
      let vAngle = data.slice(0, i).reduce((a: any, b: any) => a + b, 0) + v / 2;
      let angle = (360 / vTotal) * vAngle - 90;
      let radians = angle * (Math.PI / 180);
      let r = yCenter + yCenter / 2;
      let x = xCenter + (Math.cos(radians) * r) / 2;
      let y = yCenter + (Math.sin(radians) * r) / 2;
      ctx.translate(x, y);
      let image = images[i];

      if (vTotal - vAngle > 80) {
        ctx.drawImage(image, -image.width / 2, -image.height / 2);
        ctx.translate(-x, -y);
      }
    });
    ctx.restore();
  },
};
