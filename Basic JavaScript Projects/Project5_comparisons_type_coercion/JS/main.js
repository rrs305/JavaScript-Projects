document.write(typeof "Word"); //returns string as value data type
document.write("<br>"); //line breaks
document.write(typeof 3); //returns number as value data type
document.write("<br>");
document.write(2E310); //this displays Infinity
document.write("<br>");
document.write(-3e310); //this displays -Infinity
document.write("<br>");
document.write(10 > 2); //Boolean Statement returns True
document.write("<br>");
document.write(10 < 2); //Boolean Statement returns False
console.log(2 + 2); //How to enter a value in your console log get there by hitting f12 click console
document.write("<br>");
document.write(5 + "10"); //This will return 510 Java sees this as 500+10 other programs would return with error message
console.log(6 > 9) //shows a Boolean in your console
document.write("<br>");
document.write(10 == 10); //==are the two statements equal (true)
document.write("<br>");
document.write(3 == 11); //==are the two statements equal (flase)
document.write("<br>");
x = 10;
y = 10;
document.write(x === y); //===comparing value and data type (true)
document.write("<br>");
x = 10;
y = "8";
document.write(x === y); //comparing value and data type (false)
document.write("<br>");
x = 10;
y = "10";
document.write(x === y); //comparing value and data type (false)
document.write("<br>");
x = 10;
y = 8;
document.write(x === y); //comparing value and data type (false)
document.write("<br>");
document.write(5 > 2 && 10 > 4); //"and" operator if only one is true answer is (false) both true then (true)
document.write("<br>");
document.write(5 > 10 && 10 > 4); //"and" operator if only one is true answer is (false) both true then (true)
document.write("<br>");
document.write(5 > 10 || 10 > 4); //"or" operator if only one is true answer is (true) both false then (false)
document.write("<br>");
document.write(5 > 10 || 10 > 20); //"or" operator if only one is true answer is (true) both true then (false)

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10); //"Not" operator returns (true) if statement is false. Returns (false) if statement is true
}

function not_Function2() {
    document.getElementById("Not2").innerHTML = !(5 > 10); //"Not" operator returns (true) if statement is false. Returns (false) if statement is true
}