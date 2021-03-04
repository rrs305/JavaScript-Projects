function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function myFunction() {
    var str = "Whatcha doin over there?";
    var n = str.length;
    document.getElementById("demo").innerHTML = n;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;

function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>"
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Dog_Picture = [];
    Dog_Picture[0] = "barking";
    Dog_Picture[1] = "getting a bath";
    Dog_Picture[2] = "chasing tail";
    Dog_Picture[3] = "jumping";
    document.getElementById("Array").innerHTML = "In this picture, the dog is " +
        Dog_Picture[2] + "."
}

function constant_function() {
    const Musical_Instrument = { type: "guitar", brand: "Fender", color: "black" };
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.color + " " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var X = 44;
document.write(X); {
    let X = 43;
    document.write("<br>" + X);
}
document.write("<br>" + X);

var x = myFunction(4, 3);

function myFunction(a, b) {
    return a + b;
}
document.write("<br>" + x);

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021",
    color: "red",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
}
document.getElementById("Car_Object").innerHTML = car.description();