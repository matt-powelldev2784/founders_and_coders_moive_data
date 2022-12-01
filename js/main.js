import { cleanMovieData } from './movieData.js'
import { renderMovieNav } from './helpers/renderMovieNav.js'
import { addEventListeners } from './eventListeners.js'

renderMovieNav(cleanMovieData)
addEventListeners()
