//Concatenate Method joins together two or more strings
function full_Sentence() { //naming the function
    var part_1 = "What are you "; //defining the variable 1
    var part_2 = "doing tonight?"; //defining the variable 2
    var whole_sentence = part_1.concat(part_2); //joining the two variables
    document.getElementById("Concatenate").innerHTML = whole_sentence //linking to the HTML
}
//Slice Method takes out a specified section of a string
function slice_method() { //naming the function
    var colors = "Red, Green, Blue"; //defining the variable
    var paint = colors.slice(5, 10); //telling what to slice from what positions, to what positions; it starts at 0
    document.getElementById("Slice").innerHTML = paint; //linking to HTML
}
//Uppercase Method changes the string to all UPPERCASE
function Uppers() { //Naming the function
    var colors = "Red, Green, Blue"; //Defining the variable
    var paint = colors.toUpperCase(); //toUppercase() is the method 
    document.getElementById("Uppercase").innerHTML = paint; //Linking back to HTML
}
//Search Method looks for the item by placement inside the string
function Search() { //Naming the function
    var colors = "Red, Green, Blue"; //Defining the variable
    var paint = colors.search("Blue"); //Defining what we are searching for it will return a number value based on its placement
    document.getElementById("Search").innerHTML = paint; //Linking back to HTML 
}
//toString Method turns a number into a string
function String_num() { //Naming the function
    var x = 4443; //Defining the variable
    document.getElementById("Numbers_string").innerHTML = x.toString(); //Linking back to HTML and converting to a string
}
//Precision Method takes an extended number and shortens it the desired length
function precision_Method() { //Naming the function
    var x = 5421.1258412587455747825; //defining the variable
    document.getElementById("Precision").innerHTML = x.toPrecision(10); //Linking back to HTML and returning the specified length 
}
//toFixed Method converts a number into a string at the specified length along with rounding 
function toFixed() { //defining the function
    var x = 4443.124578; //Defining the variable
    document.getElementById("toFixed").innerHTML = x.toFixed(3); //linking back to the HTML along with our fixed postion to be rounded
}
//Valueof Method returns primitive value type to a string
function Valueof() { //defining the function
    var x = "Greenday started in the 90's"; //defining the variable
    document.getElementById("Valueof").innerHTML = x.valueOf(); //linking back to the HTML along with defining our method
}