import { toggleClass } from "../toogleClass/toogleClass.js";
import { hideMovieNav, displayMovieNav, mainStretch, mainShrink } from "../toogleClass/classProps.js";
import { checkIsMobile } from "./isMobile.js";
import { removeAllChildNodes } from "./removeAllChildNodes.js";
import appState from "../state/appState.js";

export const toggleMovieNav = () => {
  const displayMovieBrowser = appState.displayMovieBrowser;
  const button = document.getElementById("nav__buttton_container__toggle_movie_browser");
  const icon = document.getElementById("nav__button_icon__movie_browser");
  const navButtonText = document.getElementById("nav__button_text__hide_movie_browser");

  const hideMovieNavigation = () => {
    navButtonText.firstChild.remove();
    const text = document.createTextNode("Show Movie Browser");
    navButtonText.appendChild(text);
    toggleClass(hideMovieNav);
    toggleClass(mainStretch);
    button.classList.remove("movie_browser_hide");
    button.classList.add("movie_browser_show");
    icon.src = "./img/show.svg";
    appState.displayMovieBrowser = false;
  };

  const showMovieNavigation = () => {
    console.log("bbbb");
    navButtonText.firstChild.remove();
    const text = document.createTextNode("Hide Movie Browser");
    navButtonText.appendChild(text);
    toggleClass(displayMovieNav);
    toggleClass(mainShrink);
    button.classList.remove("movie_browser_show");
    button.classList.add("movie_browser_hide");
    icon.src = "./img/hide.svg";
    appState.displayMovieBrowser = true;
  };

  const isMobile = checkIsMobile();
  if (isMobile) {
    removeAllChildNodes("main");
    removeMovieInfoNode();
  }

  displayMovieBrowser ? hideMovieNavigation() : showMovieNavigation();
};
