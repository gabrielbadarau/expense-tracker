export const clickLabelPlugin = {
  id: 'clickLabel',
  afterDraw(chart: any) {
    const selectedIndex = chart._active[0]?.index >= 0 ? chart._active[0].index : -1;

    const {
      ctx,
      chartArea: { top, width, height },
    } = chart;

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    if (selectedIndex >= 0) {
      const color = chart.data.datasets[0].backgroundColor[selectedIndex];
      const value = chart._metasets[0]._parsed[selectedIndex].toFixed(2);
      const labelName = chart.data.labels[selectedIndex];
      ctx.save();

      ctx.font = `normal ${height / 18}px sans-serif`;
      ctx.fillStyle = color;

      // draw circle
      ctx.beginPath();
      ctx.arc(width / 2 + 15, height / 2 + 15, height / 4.1, 0, 2 * Math.PI);
      ctx.fill();

      // draw text inside circle
      ctx.fillStyle = 'white';
      ctx.fillText(labelName, width / 2 + 15, height / 2 + top - height / 13);
      ctx.fillText(value, width / 2 + 15, height / 2 + top);
      ctx.fillText('RON', width / 2 + 15, height / 2 + top + height / 13);

      ctx.restore();
    } else {
      const sum = chart._metasets[0].total.toFixed(2);

      ctx.font = `normal ${height / 14}px sans-serif`;
      ctx.save();

      ctx.fillStyle = 'black';

      // draw text inside circle
      ctx.fillText(sum, width / 2 + 15, height / 2 + top - height / 32);
      ctx.fillText('RON', width / 2 + 15, height / 2 + top + height / 18);
      ctx.restore();
    }
  },
};
