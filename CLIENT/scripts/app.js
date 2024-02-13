const API_URL = "https://pgm.cmsdevelopment.be/api/";
const ENTITY = "student";

// full url
const API_URL_FULL = API_URL + ENTITY;

// get main wrapper
const mainWrapper = document.querySelector(".students");

// asynchronous function, so we can use await
const fetchStudents = async () => {
  try {
    const response = await fetch(API_URL_FULL);
    const data = await response.json();

    // create a DOM element, and visualize
    createDOMStudents(data.students);
  } catch (error) {
    console.error(error);
  }
};

// create dom element
const createDOMStudents = (students) => {
  // log in console
  console.log(students);

  const superHeroesDOM = students.map((student) => {
    return `<article class="student" style="background-image: url('${student.avatar}')">
        <h2 class="student__name">${student.firstname} ${student.lastname}</h2>
        <div class="student__info">
            <h3>${student.firstname} ${student.lastname}</h3>
            <em class="caption">${student.nickname}</em>
            <p>Houdt van ${student.hobbies}</p>
            <p>${student.about}</p>
            <h4>Levensmotto</h4>
            <blockquote>${student.motto}</blockquote>
        </div>
    </article>`;
  });

  // set content of main wrapper to html article
  mainWrapper.innerHTML = superHeroesDOM.join("");
};

// fetch data
fetchStudents();
