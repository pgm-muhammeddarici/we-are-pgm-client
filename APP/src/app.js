// imports
import fetch from "node-fetch";

// declaration of the API URL
const API_URL = "https://pgm.cmsdevelopment.be/api/student";

const myself = {
  firstname: "Frederick",
  lastname: "Roegiers",
  nickname: "F-Rogers",
  classname: "1PGM-a",
  email: "frederick.roegiers@arteveldehs.be",
  age: 33,
  avatar:
    "https://scontent-bru2-1.xx.fbcdn.net/v/t39.30808-6/386604607_10229212391667899_2097486288866084778_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=tftoh3i6KMoAX_y2pKR&_nc_ht=scontent-bru2-1.xx&oh=00_AfCcY4SFNgw11kxEF3mU9nRAdiC0jAQz1GTqtLq3OmmAgw&oe=65CF585D",
  motto: "I can be badass, sometimes I eject USB without removing safely",
  about: "Sometimes I dream in binary code.",
  hobbies: ["Tuinieren", "Programmeren", "Going out in the psytrance scene"],
};

// function to post student to the API
const createStudent = async () => {
  console.log("todo: post student");
};

// initialisation
const init = async () => {
  // create a student
  createStudent();
};

// start the application
init();
