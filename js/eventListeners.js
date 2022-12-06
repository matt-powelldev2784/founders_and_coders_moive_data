import { toggleClass } from './toogleNodes/toogleClass.js'
import {
  displayForm,
  hideMovieNav,
  hidehomeImage,
  displayHomeFlexbox,
  hideMoiveBrowserBtn,
  mainStretch,
} from './toogleNodes/classProps.js'
import { toggleMovieNav } from './helpers/toggleMoiveNav.js'
import { onFormSubmit } from './helpers/onFormSubmit.js'
import { renderMoiveInfo } from './helpers/renderMovieInfo.js'
import { removeMovieInfoNode } from './helpers/renderMovieInfo.js'
import { navigationLeft, navigationRight } from './helpers/moiveNavButtons.js'
import { toggleSortMovieMenu } from './helpers/toogleSortMovieMenu.js'
import { sortField } from './helpers/sortMovies.js'

export const addEventListeners = () => {
  const addMovie = document.getElementById('add_moive')
  addMovie.addEventListener('click', () => {
    removeMovieInfoNode()
    toggleClass(displayHomeFlexbox)
    toggleClass(hideMovieNav)
    toggleClass(mainStretch)
    toggleClass(displayForm)
    toggleClass(hidehomeImage)
    toggleClass(hideMoiveBrowserBtn)
    toggleMovieNav()
  })

  const toggleMoiveBrowser = document.getElementById('toggle_movie_browser')
  toggleMoiveBrowser.addEventListener('click', toggleMovieNav)

  const form = document.getElementById('form__container')
  form.addEventListener('submit', onFormSubmit)

  const movieNavLeft = document.getElementById('moive_nav__left')
  movieNavLeft.addEventListener('click', navigationLeft)

  const movieNavRight = document.getElementById('moive_nav__right')
  movieNavRight.addEventListener('click', navigationRight)

  const sortMovieDropdown = document.getElementById('sort_movies_dropdown')
  sortMovieDropdown.addEventListener('click', toggleSortMovieMenu)

  const findMovieSortMenuItems = document.getElementsByClassName(
    'nav__button_text__dropdown'
  )
  const movieSortMenuItems = [...findMovieSortMenuItems]
  movieSortMenuItems.forEach((element) => {
    element.addEventListener('click', sortField)
  })

  refreshMoviesNavEventListeners()
}

export const refreshMoviesNavEventListeners = () => {
  const movies = document.getElementsByClassName('movie_nav__card')
  const moiveElements = [...movies]
  moiveElements.forEach((element) => {
    element.addEventListener('click', renderMoiveInfo)
  })
}
