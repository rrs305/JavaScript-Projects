var x = 10; //Global variable since it is outside both functions

function Add_numbers_1() { //function 1 with x as global variable
    document.write(20 + x + "<br>"); //giving it an equation to run on HTML
}

function Add_numbers_2() { //function 2 with x as global variable
    document.write(x + 100 + "<br>"); //giving it an equation to run on HTML
}
Add_numbers_1(); //Calls the function
Add_numbers_2(); //Calls the function

function Add_numbers_3() { //Defining a variable plus it becomes a local variable since it is inside the function
    var y = 44; //defining the variable y
    document.write(20 + y); //giving the variable an equation to run on HTML
}

function Add_numbers_4() { //This statement creates an error since the variable is not defined
    document.write(10 + y); //giving it an equation to display on HTML, but the computer does not know what y is
    console.log(10 + y); //hit f12 to bring up console log to debug code
}
Add_numbers_3(); //Calls the function
Add_numbers_4(); //Calls the function "which will not work right now"

//If Statement
function get_Date() { //names the function
    if (new Date().getHours() < 23) { //giving the if statement a condition
        document.getElementById("Greeting").innerHTML = "How are you today?"; //display if condition is true and linking it back HTML element
    }
}

//If Statement on my own same as above
function get_Day() {
    if (new Date().getMinutes() < 20) {
        document.getElementById("dow").innerHTML = "You can leave pizza in oven";
    }
}

//If Else Statement
function Kids() { //names the function
    Kids = document.getElementById("Kids").value; //getting the input from HTML
    if (Kids > 0) { //Conditional statement
        Taxes = "You do qualify for child tax credit."; //Value if True
    } else { //Conditional statement "If Statement is false"
        Taxes = "You do not qualify for child tax credit"; //Value if False
    }
    document.getElementById("How_many_kids").innerHTML = Taxes //Sends value back to HTML document
}

//If Else If Statement
function Time_function() { //names the function
    var Time = new Date().getHours(); //defines Time variable as hours of current date
    var Reply; //defines variable Reply to return to HTML
    if (Time < 12 == Time > 0) { //conditional statement
        Reply = "It is morning time."; //value if true
    } else if (Time >= 12 == Time < 18) { //conditional statement
        Reply = "It is afternoon."; //value if above is true
    } else { //conditional statement
        Reply = "It is evening time."; //value if above is false
    }
    document.getElementById("Time_of_day").innerHTML = Reply //sends value back to the HTML document
}