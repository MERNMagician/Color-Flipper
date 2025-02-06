const body = document.body;

function changeBackground(r, g, b) {
  body.style.background = `rgb(${r},${g},${b})`;
}

function randomizeColor() {
  const red = Math.ceil(Math.random() * 255);
  const green = Math.ceil(Math.random() * 255);
  const blue = Math.ceil(Math.random() * 255);

  changeBackground(red, green, blue);
}
