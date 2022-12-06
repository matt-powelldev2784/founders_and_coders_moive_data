import { cleanMovieData } from './movieData.js'
import { renderMovieNav } from './helpers/renderMovieNav.js'
import { addEventListeners } from './eventListeners.js'
import { getDataFromStorage } from './helpers/localStorage.js'
import { checkIsMobileOnStart } from './helpers/isMobile.js'

checkIsMobileOnStart()
getDataFromStorage()
renderMovieNav(cleanMovieData)
addEventListeners()

setInterval(() => {
  console.log('window.innerWidth', window.innerWidth)
  console.log('window.innerHeight', window.innerHeight)
}, 3000)
