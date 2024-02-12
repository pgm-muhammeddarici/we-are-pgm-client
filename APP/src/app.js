// imports
import fetch from "node-fetch";

// declaration of the API URL
const API_URL = "https://pgm.cmsdevelopment.be/api/student";

const myself = {
  firstname: "Frederick",
  lastname: "Roegiers",
  nickname: "F-Rogers",
  classname: "1PGM-a",
  email: "frederick2.roegiers@arteveldehs.be",
  age: 33,
  avatar: "https://picsum.photos/536/354",
  motto: "I can be badass, sometimes I eject USB without removing safely",
  about: "Sometimes I dream in binary code.",
  hobbies: ["Tuinieren", "Programmeren", "Going out in the psytrance scene"],
};

// function to post student to the API
const createStudent = async () => {
  const response = await fetch(API_URL, {
    method: "POST", // soort request
    headers: {
      // headers
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(myself), // de gegevens
  });

  const newStudent = await response.json();
  return newStudent;
};

// initialisation
const init = async () => {
  // create a student
  const student = await createStudent();
  // log in console
  console.log(student);
};

// start the application
init();
