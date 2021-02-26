function addition_Function() { //adds to two numbers to display on HTML
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() { //subjects to two numbers to display on HTML
    var subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication_Function() { //multiplies to two numbers to display on HTML
    var multiplication = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 * 8 = " + multiplication;
}

function division_Function() { //divides to two numbers to display on HTML
    var division = 48 / 6;
    document.getElementById("Math4").innerHTML = "48 / 6 = " + division;
}

function more_Math() { //performs more than one math operation
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() { //returns the remainder
    var simple_Math2 = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math2;
}

function negation_Operator() { //makes the number negative
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}

function increment() { //increases number by 1
    var x = 5;
    x++;
    document.getElementById("Math8").innerHTML = x;
}


function decrement() { //decreases number by 1
    var x = 5.25;
    x--;
    document.getElementById("Math9").innerHTML = x;
}

function random() { //returns a random number
    var x = Math.random() * 100;
    document.getElementById("Math10").innerHTML = x;
}

function round() { //returns a round number
    var x = Math.round(6.75);
    document.getElementById("Math11").innerHTML = x;
}