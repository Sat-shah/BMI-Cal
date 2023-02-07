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
        document.getElementById("indicate").style.marginLeft = "100px";
    }
    else if (i<=25) {
        document.getElementById("out").innerHTML = "Normal BMI";
        document.getElementById("indicate").style.marginLeft = "500px";
    }
    else if (i<=30) {
        document.getElementById("out").innerHTML = "Overweight BMI";
        document.getElementById("indicate").style.marginLeft = "800px";
    }
    else {
        document.getElementById("out").innerHTML = "Obese BMI";
        document.getElementById("indicate").style.marginLeft = "1000px";
    }

}