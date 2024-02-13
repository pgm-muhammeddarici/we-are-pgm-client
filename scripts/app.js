const API_URL = "https://pgm.cmsdevelopment.be/api/";
const ENTITY = "superhero";

// full url
const API_URL_FULL = API_URL + ENTITY;

// get main wrapper
const mainWrapper = document.querySelector(".students");

// asynchronous function, so we can use await
const fetchSuperheroes = async () => {
  try {
    const response = await fetch(API_URL_FULL);
    const data = await response.json();

    // create a DOM element, and visualize
    createDOMSuperheroes(data.superheroes);
  } catch (error) {
    console.error(error);
  }
};

// create dom element
const createDOMSuperheroes = (superheroes) => {
  // log in console
  console.log(superheroes);

  const superHeroesDOM = superheroes.map((superhero) => {
    return `<article class="student" style="background-image: url('${superhero.avatar}')">
        <h2 class="student__name">${superhero.firstname} ${superhero.lastname}</h2>
        <div class="student__info">
            <h3>${superhero.firstname} ${superhero.lastname}</h3>
            <em class="caption">${superhero.nickname}</em>
            <p>Houdt van ${superhero.hobbies}</p>
            <p>${superhero.about}</p>
            <h4>Levensmotto</h4>
            <blockquote>${superhero.motto}</blockquote>
        </div>
    </article>`;
  });

  // set content of main wrapper to html article
  mainWrapper.innerHTML = superHeroesDOM.join("");
};

// fetch data
fetchSuperheroes();