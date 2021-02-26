function my_Dictionary() { //creating a dictionary  
    var Animal = { //this is the class
        Species: "Dog", //KVP
        Color: "Black", //KVP
        Breed: "Labrador", //KVP
        Age: 5, //KVP no quotes because it is a number
        Sound: "Bark!" //KVP
    };
    delete Animal.Sound; //deletes the key you define and displays "undefined"
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //How to display the result
}