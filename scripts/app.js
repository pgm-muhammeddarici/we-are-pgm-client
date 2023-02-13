// declare API URL to fetch superheroes / students
const api_url = "https://pgm.cmsdevelopment.be/api/student";

// declare app object
const app = {
  init() {
    // cache DOM elements from HTML
    this.cacheDOMElements();
    // fetch data from API
    this.fetchData();

    // alert
    // alert("Hello from app.js");
  },
  cacheDOMElements() {
    // plate is the container where we will render the data
    this.$plate = document.querySelector(".students");
  },
  async fetchData() {
    // fetch data from API
    const response = await fetch(api_url);
    // convert response to JSON
    const data = await response.json();
    //console.log(data);

    // render data
    this.renderData(data);
  },
  renderData(data) {
    const superheroes = data.students;
    console.log(superheroes);
    const cards = superheroes.map((superhero) => {
      const card = `
        <article class="student" style="background-image: url('${superhero.avatar}')">
            <h2 class="student__name">${superhero.firstname} ${superhero.lastname}</h2>
            <div class="student__info">
                <h3>${superhero.nickname} (${superhero.age}j)</h3>
                <em class="caption">${superhero.email}</em>
                <p>${superhero.hobbies}</p>
                <p>${superhero.about}</p>
                <h4>Levensmotto</h4>
                <blockquote>${superhero.motto}</blockquote>
            </div>
        </article>
        `;
      return card;
    });
    this.$plate.innerHTML = cards.join("");
  },
};

// initialize app
app.init();
