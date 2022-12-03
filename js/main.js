import { cleanMovieData } from './movieData.js'
import { renderMovieNav } from './helpers/renderMovieNav.js'
import { addEventListeners } from './eventListeners.js'
import { getDataFromStorage } from './helpers/storage.js'

getDataFromStorage()
renderMovieNav(cleanMovieData)
addEventListeners()
