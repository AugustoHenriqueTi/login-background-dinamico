const body = document.getElementsByName("body");

const arrayBackgroundImage = [
  "foto1.avif",
  "foto2.avif",
  "foto3.avif",
  "foto4.avif",
  "foto5.avif",
  "foto6.avif",
];
let i = 0;

document.addEventListener("click", function (event) {
  i++;
  if (i >= arrayBackgroundImage.length) {
    i = 0;
  }
  const imageBackground = arrayBackgroundImage[i];
  document.body.style.backgroundImage = `url(${imageBackground})`;
});

