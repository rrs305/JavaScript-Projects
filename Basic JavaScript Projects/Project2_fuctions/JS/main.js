function My_First_Function() { //Naming function
    var str = "this text is green!"; //Creating a string variable
    var result = str.fontcolor("green"); //Assigning varable result
    document.getElementById("Green_Text").innerHTML = result; //displaying the result
}

function MyFunction() { //Naming function
    var sentence = "I am learning"; //combining two var with the +=operator
    sentence += "a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence; //display the result
}