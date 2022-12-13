import { toggleClass } from '../toogleClass/toogleClass.js';
import { hideMovieNav, displayMovieNav, mainStretch, mainShrink } from '../toogleClass/classProps.js';
import { checkIsMobile } from './isMobile.js';
import { removeAllChildNodes } from './removeAllChildNodes.js';
import {
  addHideMovieBrowserButton,
  addShowMovieBrowserButton,
} from '../createElement/createMainNav/buttons/addMovieBrowserButton.js';
import { addEventListeners } from '../eventListeners.js';

export let movieBrowserIsDisplayed = true;

export const toggleMovieNav = () => {
  const icon = document.getElementById('nav__button_icon__movie_browser');
  const navButton = document.getElementById('nav__buttton_container__toggle_movie_browser');
  const addMovieButton = document.getElementById('nav__buttton_container__add_moive');

  const hideMovieNavigation = () => {
    navButton.remove();
    addMovieButton.after(addShowMovieBrowserButton);
    toggleClass(hideMovieNav);
    toggleClass(mainStretch);
    icon.src = './img/show.svg';
    movieBrowserIsDisplayed = false;
    addEventListeners();
  };

  const showMovieNavigation = () => {
    navButton.remove();
    addMovieButton.after(addHideMovieBrowserButton);
    toggleClass(displayMovieNav);
    toggleClass(mainShrink);
    icon.src = './img/hide.svg';
    movieBrowserIsDisplayed = true;
    addEventListeners();
  };

  const isMobile = checkIsMobile();
  if (isMobile) {
    removeAllChildNodes('main');
  }

  movieBrowserIsDisplayed ? hideMovieNavigation() : showMovieNavigation();
};
