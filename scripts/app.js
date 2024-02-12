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

  const superHeroesDOM = superheroes.map(superhero => {

  });

  const article = ` <article class="student" style="background-image: url('./images/avatars/avatar_2.jpeg')">
            <h2 class="student__name">Almost Breaktime</h2>
            <div class="student__info">
            <h3>Harley Davidson</h3>
            <em class="caption">Heaven's angel</em>
            <p>Houdt van motorijden, boeken lezen en timmeren</p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
                ullam hic maxime, optio tenetur dolorum, perferendis odio labore
                libero atque officiis commodi ad itaque exercitationem nam
                laudantium eum corporis placeat.
            </p>
            <h4>Levensmotto</h4>
            <blockquote>Mijn motto? Ah, nen harley natuurlijk</blockquote>
            </div>
        </article>`;

  // set content of main wrapper to html article
  mainWrapper.innerHTML = article;
};

// fetch data
fetchSuperheroes();
