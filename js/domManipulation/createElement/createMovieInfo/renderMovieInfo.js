import { cleanMovieData } from "../../../movieData.js";
import { toggleClass } from "../../../toogleClass/toogleClass.js";
import { mainStretch } from "../../../toogleClass/classProps.js";
import { checkIsMobile } from "../../../helpers/isMobile.js";
import { toggleMovieNav } from "../../toggleMoiveNav.js";
import { removeAllChildNodes } from "../../removeAllChildNodes.js";
import { createElement } from "../createElement.js";

export const renderMoiveInfo = (event) => {
  removeAllChildNodes("main");
  const isMobile = checkIsMobile();
  if (isMobile) {
    toggleMovieNav();
    toggleClass(mainStretch);
  }

  const targetId = event.currentTarget.id;
  const regEx = /\d+/;
  const movieKey = parseInt(targetId.match(regEx)[0]);

  const findMoive = cleanMovieData.filter((movie) => {
    if (movie.key === movieKey) {
      return movie;
    }
  });
  const movie = findMoive[0];
  const { key, plot, runtime, year, image } = movie;
  const title = movie.title.toUpperCase();
  const rating = parseInt(Math.round(movie.rating / 2));
  const cast = movie.cast.join(", ");

  //create image elementes
  const imageGradient = createElement("div", {
    class: "large_card__img_gradient",
  });
  const imageNode = createElement("div", {
    class: "large_card__img",
    style: `background-image: url(${image})`,
  });

  //create text elements
  const h1 = createElement("h1", { class: "large_card__h1" }, title);

  const starContainer = createElement("div", { class: "large_card__star_container" });
  const numberOfStars = Array(rating).fill("star");
  numberOfStars.forEach(() => {
    const star = document.createElement("div");
    star.classList.add("large_card__star");
    starContainer.appendChild(star);
  });

  const yearNode = createElement("p", { class: "large_card__year" }, `YEAR : ${year}`);
  const runtimeNode = createElement("p", { class: "large_card__year" }, `RUNTIME : ${runtime} MINS`);
  const detailsFlexbox = createElement("div", { class: "large_card__details_flexbox" }, yearNode, runtimeNode);

  const plotNode = createElement("p", { class: "large_card__plot" }, plot);
  const castNode = createElement("p", { class: "large_card__cast" }, cast);

  //append elements to containers
  const textBox = createElement(
    "div",
    { class: "large_card__text_flexbox" },
    h1,
    starContainer,
    detailsFlexbox,
    plotNode,
    castNode
  );
  const flexConatiner = createElement("div", { class: "large_card__text_flex_container" }, textBox);
  const textContainer = createElement("div", { class: "large_card__text_container" }, flexConatiner);

  const articleNode = createElement(
    "article",
    {
      class: "  large_card",
      id: `movie_nav__card__${key}`,
    },
    imageGradient,
    imageNode,
    textContainer
  );

  //render card
  const mainContainer = document.getElementById("main");
  mainContainer.appendChild(articleNode);
};
