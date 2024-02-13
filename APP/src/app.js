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

// declaration of the student, so we can update it later on
const uuid = "584f2a94-ac32-4be7-906c-57e86e57c1d8";

// code to update a student
const updateStudent = async () => {
  const updates = {
    age: 32,
    firstname: "Robin2",
  };
  const response = await fetch(API_URL + "/" + uuid, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(updates),
  });

  const updatedStudent = await response.json();
  return updatedStudent;
};

// async met delete function
// api aanspreken, fetch, met uuid
// method: delete
// headers waren niet nodig

const deleteStudent = async () => {
  const response = await fetch(API_URL + "/" + uuid, {
    method: "DELETE",
  });
  const deletedStudent = await response.json();
  return deletedStudent;
};

// initialisation
const init = async () => {
  // create a student
  // const student = await createStudent();
  // console.log(student);
  // update a student
  // const updated = await updateStudent();
  // console.log(updated);
  // delete a student
  const deleted = await deleteStudent();
  console.log(deleted);
};

// start the application
init();
