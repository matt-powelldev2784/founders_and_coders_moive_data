import { cleanMovieData } from '../movieData.js'
import { renderMovieNav } from './renderMovieNav.js'
import { refreshMoviesNavEventListeners } from '../eventListeners.js'

export const navigationLeft = () => {
  const firstMovie = cleanMovieData.shift()
  cleanMovieData.push(firstMovie)
  renderMovieNav(cleanMovieData)
  refreshMoviesNavEventListeners()
}

export const navigationRight = () => {
  const lastMovie = cleanMovieData.pop()
  cleanMovieData.unshift(lastMovie)
  renderMovieNav(cleanMovieData)
  refreshMoviesNavEventListeners()
}
