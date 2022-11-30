import { cleanMovieData } from './movieData.js'
import { renderMovieNav } from './renderMovieNav.js'
import { addFormEventListener } from './eventListeners/addFormEventListener.js'
import { addNavEventListeners } from './eventListeners/navEventListeners.js'

renderMovieNav(cleanMovieData)
addNavEventListeners()
addFormEventListener()
