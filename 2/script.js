function GGWP() {
    var inputString = document.getElementById("inputString").value;
    var randomBoolean = Math.random() < 0.5; 
    var resultElement = document.getElementById("result");
    var colors = ["#FF5733", "#FFC300", "#33FF57", "#33E0FF", "#7A33FF"]; 
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    document.body.style.backgroundColor = randomColor; 
  
    if (randomBoolean) {
      resultElement.innerHTML = "\"" + inputString + "\" is true!";
      resultElement.style.color = "green"; 
    } else {
      resultElement.innerHTML = "\"" + inputString + "\" is false!";
      resultElement.style.color = "red"; 
    }
  }
  