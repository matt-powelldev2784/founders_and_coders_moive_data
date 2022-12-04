import { cleanMovieData } from '../movieData.js'
import { renderMovieNav } from './renderMovieNav.js'
import { refreshMoviesNavEventListeners } from '../eventListeners.js'

export const sortMovies = (event) => {
  cleanMovieData.sort((a, b) => {
    const currentTarget = event.currentTarget.id
    const sortBy = currentTarget.substring(12)
    return parseInt(a[sortBy]) - parseInt(b[sortBy])
  })
  renderMovieNav(cleanMovieData)
  refreshMoviesNavEventListeners()
}
