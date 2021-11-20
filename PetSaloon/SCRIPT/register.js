console.log("Register Page!");

let SaloonRegister = {
    name: "The Pet Saloon",
    address: {

        street: "Pet Drive",
        number: "55555",
        zip: "12345",
        state: "CA",
        city: "Los Angeles"
    },
    hours: {
        open: "9:00 am",
        close: "10:00 pm"
    },
    pets:[]
}

//Create a pet constuctor
function Pet(name, age, gender, breed, service, owner, phone){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.owner = owner;
    this.phone = phone;
}
//Create three pets using the constructor
let Scooby = new Pet("Scooby", 50, "Male", "Dane", "Grooming", "Shaggy", 555 + " - " + 555 + " - " + 5555);
let Scrappy = new Pet("Scrappy", 20, "Male", "Rottwieler", "Grooming", "Shaggy", 111 + " - " + 111 + " - " + 1111);
let Yoshi = new Pet("Yoshi", 2, "Male", "Husky", "Training", "David", 333 + " - " + 333 + " - " + 3333);
SaloonRegister.pets.push(Scrappy,Scooby, Yoshi);
console.log(SaloonRegister.pets);

//get the values from the input
let petName = document.getElementById("petName");
let petAge = document.getElementById("petAge");
let petGender = document.getElementById("petGender");
let petBreed = document.getElementById("petBreed");
let petService = document.getElementById("petService");
let petOwner = document.getElementById("petOwner");
let ownerPhone = document.getElementById("phone");
function register(){
    console.log(petName.value,petAge.value,petGender.value,petBreed.value,petService.value,petOwner.value,ownerPhone.value)
    //create a constructor using the values from the input
    let newDog = new Pet(petName.value,petAge.value,petGender.value,petBreed.value,petService.value,petOwner.value,ownerPhone.value)
    //push it into the array
    SaloonRegister.pets.push(newDog);
    //display the pet on the console
    console.log(SaloonRegister.pets);
    //clear inputs
    clear();
}

function clear(){
     petName.value = "";
     petAge.value = "";
     petGender.value = "";
     petBreed.value = "";
     petService.value = "";
     petOwner.value = "";
     ownerPhone.value = "";
}

function simpleDisplay(){
    for(i=0; i<SaloonRegister.pets.length;i++){
        //Display names of pets
    }
}


simpleDisplay();

// alert(`Number of pets: ${saloon.pets.length}`)

