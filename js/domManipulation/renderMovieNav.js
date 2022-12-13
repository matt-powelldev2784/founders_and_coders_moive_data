import { removeAllChildNodes } from "./removeAllChildNodes.js";

export const renderMovieNav = (movies) => {
  removeAllChildNodes("movie_nav__card_container");

  movies.forEach((movie) => {
    const { key, title, year, image } = movie;

    //create card node
    const card = document.createElement("article");
    card.classList.add("movie_nav__card");
    card.setAttribute("id", `movie_nav__card__${key}`);

    //creat anchor node
    const anchor = document.createElement("a");
    anchor.setAttribute("href", "#");

    //create image node
    const img = document.createElement("img");
    img.classList.add("moive_nav__img");
    img.setAttribute("id", `moive_nav__img_${key}`);
    img.setAttribute("src", image);
    img.setAttribute("alt", `Moive Image ${title}`);

    //create movie info node
    const moiveInfo = document.createElement("div");
    moiveInfo.classList.add("moive_nav_info");

    //create movie title node
    const movieTitle = document.createElement("p");
    movieTitle.classList.add("moive_nav__title");
    const titleTextNode = document.createTextNode(title);
    movieTitle.appendChild(titleTextNode);

    //create movie year node
    const movieYear = document.createElement("p");
    movieYear.classList.add("moive_nav__film_year");
    const movieYearTextNode = document.createTextNode(year);
    movieYear.appendChild(movieYearTextNode);

    //add nodes to card
    card.appendChild(anchor);
    anchor.appendChild(img);
    moiveInfo.appendChild(movieTitle);
    moiveInfo.appendChild(movieYear);
    anchor.appendChild(moiveInfo);

    //add nodes to dom
    const movieNavContainer = document.getElementById("movie_nav__card_container");
    movieNavContainer.appendChild(card);
  });
};
