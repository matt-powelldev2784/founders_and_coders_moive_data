import { cleanMovieData } from './movieData.js'
import { renderMovieNav } from './domManipulation/renderMovieNav.js'
import { addEventListeners } from './eventListeners.js'
import { getDataFromStorage } from './helpers/localStorage.js'
import { checkIsMobileOnStart } from './helpers/isMobile.js'
import { createMainNav } from './domManipulation/createElement/createMainNav/createMainNav.js'
import { renderHomePage } from './domManipulation/createElement/homePage/renderHomePage.js'

const loadPage = () => {
  createMainNav()
  renderHomePage()

  checkIsMobileOnStart()
  getDataFromStorage()
  renderMovieNav(cleanMovieData)
  addEventListeners()
}

loadPage()

// setInterval(() => {
//   console.log('window.innerWidth', window.innerWidth)
//   console.log('window.innerHeight', window.innerHeight)
// }, 3000)
