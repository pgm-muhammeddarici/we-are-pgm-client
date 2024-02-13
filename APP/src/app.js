import fetch from "node-fetch";
const API_URL = "https://pgm.cmsdevelopment.be/api/student";

const uuid = "c7bfcada-68bc-4d10-8be5-a0b75a90011e";
const myself = {
  firstname: "Muhammed",
  lastname: "Darici",
  nickname: "Darc",
  classname: "1PGM-a",
  email: "darici.muhammed@student.arteveldehs.be",
  age: 25,
  avatar:
    "https://st.depositphotos.com/3230977/4665/i/600/depositphotos_46651849-stock-photo-racer-wearing-red-racing-protective.jpg",
  motto: "there is a house in charming town",
  about: "Vroom",
  hobbies: ["Fietsen", "Gaming", "Travel"],
};

const createStudent = async () => {
  console.log("todo: post student");

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(myself),
  });
  const newStudent = await response.json();
  return newStudent;
};

const updateStudent = async () => {
  const updates = {
    avatar:
      "https://st.depositphotos.com/3230977/4665/i/600/depositphotos_46651849-stock-photo-racer-wearing-red-racing-protective.jpg",
    nickname: "drc",
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
  console.log(updatedStudent);
};

const deleteStudent = async () => {
  const toDelete = {
    nickname: "drc",
  };
  const response = await fetch(API_URL + "/" + uuid, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(toDelete),
  });

  const deletedStudent = await response.json();
  console.log(deletedStudent);
};
const init = async () => {
  // const student = await createStudent();
  // console.log(student);

  // updateStudent();
  deleteStudent();
};
init();
