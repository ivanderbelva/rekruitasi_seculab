function changeColor() {
    var body = document.querySelector("body");
    var part3 = "Nsp3ct1on}"
    var colors = ["#FF5733", "#C70039", "#900C3F", "#581845", "#0074D9", "#FF4136", "#2ECC40", "#FFDC00", "#B10DC9", "#FF851B"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
  }
  