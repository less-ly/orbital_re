var rocky = require('rocky');

function drawOrbits(ctx, cx, cy) {
  var step = 1;
  ctx.strokeStyle = 'black';
  while (step < 4) {
    ctx.beginPath();
    ctx.arc(cx, cy, 20 * step, 0, 2 * Math.PI, false);
    ctx.stroke();
    step++;
}};

rocky.on('draw', function(event) {
  // Get the CanvasRenderingContext2D object
  var ctx = event.context;

  // Draw white background
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);

  // Determine the width and height of the display
  var w = ctx.canvas.unobstructedWidth;
  var h = ctx.canvas.unobstructedHeight;

  // Current date/time
  var d = new Date();

  // Set the text color
  ctx.fillStyle = 'black';

  // Center align the text
  ctx.textAlign = 'center';

  // Set the font
  ctx.font = '14px Gothic'

  // Get the current day of the month in 2-digit format
  var day = d.toLocaleTimeString(undefined, {day: '2-digit'});
  day = day.substring(0, 2);

  // Display the current date, in the middle of the screen
  // adjust the heigt with the font's size
  ctx.fillText(day, w / 2, h / 2 - 14 / 2, w);

  // Determine the center point of the display
  var cx = w / 2;
  var cy = h / 2;

  // Draw orbits
  drawOrbits(ctx, cx, cy);
 
  // ctx.fillText(d.getDate().toString(), w / 2, h / 2, w);
  // getDate() doesn't put a preceding zero into 1-digit dates 
});

rocky.on('secondchange', function(event) {
  // Request the screen to be redrawn on next pass
  rocky.requestDraw();
});
