import { cleanMovieData } from "./movieData.js";
import { renderMovieNav } from "./domManipulation/createElement/renderMovieNav/renderMovieNav.js";
import { addEventListeners } from "./eventListeners.js";
import { getDataFromStorage } from "./helpers/localStorage.js";
import { renderMainNav } from "./domManipulation/createElement/createMainNav/renderMainNav.js";
import { renderHomePage } from "./domManipulation/createElement/createHomePage/renderHomePage.js";
import { checkIsMobile } from "./helpers/isMobile.js";

const loadDesktopPage = () => {
  renderMainNav();
  renderHomePage();
  getDataFromStorage();
  renderMovieNav(cleanMovieData);
  addEventListeners();
};

const isMobile = checkIsMobile();
isMobile ? loadMobilePage() : loadDesktopPage();

setInterval(() => {
  console.log("window.innerWidth", window.innerWidth);
  console.log("window.innerHeight", window.innerHeight);
}, 3000);
