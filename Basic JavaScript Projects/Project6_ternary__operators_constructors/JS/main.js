//Ternary Operator Function
function Ride_Function() { //defines the function
    var Height, Can_ride; //defining two variables Height, and Can_ride
    Height = document.getElementById("Height").value; //getting the value from the html document entered from the user
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough"; //the ternary operator checking the input based on 52cm
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //"Ride" the HTML line to display it on. The "can ride" is the result of the ternary operator displaying on HTML page
}
//Another example of a ternary operator
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("age").value;
    Can_vote = (Age < 18) ? "You are not old enough " : "You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}
//Constructor Function
function Vehicle(Make, Model, Year, Color) { //defines the class i.e. Vehicle
    this.Vehicle_Make = Make; //this. operator defines the object within the class i.e make, model, year, color
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //assigning a varable "Jack" with the data inputs into above Vehicle class
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

//From HTML we assigned a button to the myFunction
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = //How to code and process the data
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year; //This is the data returned after clicking the button
}

function myFunction2() { //Another example from above
    document.getElementById("New_and_This").innerHTML =
        "Jack drives a " + Jack.Vehicle_Color + "-colored " + Jack.Vehicle_Model +
        " manufactured in " + Jack.Vehicle_Year;
}
//Another example of a Constructor
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
var
    toto = new Person("John", "Doe", 20, "blue");

function myFunction3() {
    document.getElementById("test").innerHTML =
        toto.firstName;
}
//Nested Function
function count_Function() { //Naming the Function
    document.getElementById("Nested_Function").innerHTML = Count(); //Sends the result of the function Count() to HTML page

    function Count() { //This is the Nested function or subprogram
        var Starting_point = 9; //Assigning a starting point with integer

        //Another Nested Function
        function Plus_one() { Starting_point += 1; } //Adding one to the starting integer
        Plus_one(); //calls the plus one function
        return Starting_point; //returns the value
    }
}