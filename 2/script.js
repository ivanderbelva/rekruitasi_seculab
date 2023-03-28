function GGWP() {
    var inputString = document.getElementById("inputString").value;
    var flags = ["klik 1 kali lagi", "seculab{U53r_49enT_5tR1n9}"]; 
    var randomFlag = flags[Math.floor(Math.random() * flags.length)]; 
    var resultElement = document.getElementById("result");
    var colors = ["#FF5733", "#FFC300", "#33FF57", "#33E0FF", "#7A33FF"]; 
    var randomColor = colors[Math.floor(Math.random() * colors.length)]; 

    document.body.style.backgroundColor = randomColor; 

    resultElement.innerHTML = "\"" + inputString + "\" flag is: " + randomFlag;
    resultElement.style.color = "black";

}