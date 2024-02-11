/**
 * A simple web application that fetches data from an API and renders it to the DOM.
 *
 * Approach:
 * 0. Initialize the app by calling the init method
 * 1. Fetch superheroes form an API by fetchData
 * 2. Render the data to the DOM by renderData
 * 3. Add event listeners to the form by addFormEventListeners
 * 4. Post data to the API by postData
 *
 * Extra: Set the debug state to true to fetch superheroes instead of students
 */

// declare API URL to fetch superheroes / students
const api_url = "https://pgm.cmsdevelopment.be/api";

// if we are in debug state, we use the superheroes instead of the students
const debug = false;

/**
 * The app object represents the main application.
 * It contains methods for initializing the app, caching DOM elements, fetching data from an API, and rendering the data.
 */
const app = {
  /**
   * Initialize the app by calling the cacheDOMElements method and the fetchData method.
   */
  init() {
    // cache DOM elements from HTML
    this.cacheDOMElements();

    // add event listeners
    this.addFormEventListeners();

    // fetch data from API
    this.fetchData();
  },

  /**
   * Add event listeners to the form.
   */
  addFormEventListeners() {
    // get the form from the DOM
    const form = document.querySelector("form");

    // add event listener to the form
    form.addEventListener("submit", (event) => {
      // prevent the default form submission
      event.preventDefault();

      // get the form data
      const formData = new FormData(form);

      // convert form data to JSON
      const data = {};

      // loop over the form data and add it to the data object
      for (const [key, value] of formData.entries()) {
        data[key] = value;
      }

      // make some modifications to the data
      data.hobbies = data.hobbies.split(",");

      // validate the data
      if (
        !data.firstname ||
        !data.lastname ||
        !data.nickname ||
        !data.email ||
        !data.age ||
        !data.about ||
        !data.motto
      ) {
        alert("Gelieve alle velden in te vullen");
        return;
      }

      // validate email address
      const email = data.email;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Gelieve een geldig email adres in te vullen");
        return;
      }

      // post data to the API
      this.postData(data).then(() => {
        alert("Data posted to the API");
        window.location.reload();
      });
    });
  },

  /**
   * Cache DOM elements from HTML.
   */
  cacheDOMElements() {
    // plate is the container where we will render the data
    this.$plate = document.querySelector(".students");
  },

  /**
   * Fetch data from the API.
   */
  async fetchData() {
    // fetch data from API
    const response = await fetch(
      `${api_url}${debug ? "/superhero" : "/student"}`
    );

    // convert response to JSON
    const data = await response.json();

    // render data
    this.renderData(data);
  },

  /**
   * Post data to the API.
   * @param {*} data
   */
  async postData(data) {
    try {
      await fetch(`${api_url}/student`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    } catch (error) {
      console.error(error.message);
    }
  },

  /**
   * Render data to the DOM.
   * @param {*} data
   */
  renderData(data) {
    const dataItems = debug ? data.superheroes : data.students;
    const cards = dataItems.map((dataItem) => {
      const card = `
        <article class="student" style="background-image: url('${dataItem.avatar}')">
            <h2 class="student__name">${dataItem.firstname} ${dataItem.lastname}</h2>
            <div class="student__info">
                <h3>${dataItem.nickname} (${dataItem.age}j)</h3>
                <em class="caption">${dataItem.email}</em>
                <p>${dataItem.hobbies}</p>
                <p>${dataItem.about}</p>
                <h4>Levensmotto</h4>
                <blockquote>${dataItem.motto}</blockquote>
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
