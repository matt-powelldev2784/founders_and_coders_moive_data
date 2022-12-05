import { toggleClass } from '../toogleNodes/toogleClass.js'
import {
  displaySortMoviesMenu,
  hideSortMoviesMenu,
  displaySortMoviesArrow,
  hideSortMoviesArrow,
} from '../toogleNodes/classProps.js'

let menuOpen = false

export const toggleSortMovieMenu = (event) => {
  const showMenu = () => {
    toggleClass(hideSortMoviesArrow)
    toggleClass(displaySortMoviesMenu)
  }

  const hideMenu = () => {
    toggleClass(displaySortMoviesArrow)
    toggleClass(hideSortMoviesMenu)
  }

  menuOpen ? hideMenu() : showMenu()

  menuOpen = !menuOpen
}
