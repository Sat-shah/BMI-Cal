function CalculateClick() {
    document.getElementById("output").style.display = "block";

    var w = parseInt(document.getElementById("weight").value);
    var h = parseFloat(document.getElementById("height").value)/100;

    var i = "";
    var BMI = (w/(h*h));
    i = BMI;
    document.getElementById("result").innerHTML = Math.round(BMI);

    if(i<=18) {
        document.getElementById("out").innerHTML = "Underweight BMI";
    }
    else if (i<=25) {
        document.getElementById("out").innerHTML = "Normal BMI";
    }
    else if (i<=30) {
        document.getElementById("out").innerHTML = "Overweight BMI";
    }
    else {
        document.getElementById("out").innerHTML = "Obese BMI";
    }

}