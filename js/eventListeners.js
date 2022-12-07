import { toggleMovieNav } from './domManipulation/toggleMoiveNav.js'
import { onFormSubmit } from './helpers/onFormSubmit.js'
import { renderMoiveInfo } from './domManipulation/renderMovieInfo.js'
import {
  navigationLeft,
  navigationRight,
} from './domManipulation/moiveNavButtons.js'
import { toggleSortMovieMenu } from './domManipulation/toogleSortMovieMenu.js'
import { sortField } from './helpers/sortMovies.js'
import { insertAddMovieForm } from './domManipulation/insertAddMoiveForm.js'
import { removeAllChildNodes } from './domManipulation/removeAllChildNodes.js'
import { toggleClass } from './toogleClass/toogleClass.js'
import { hideMovieNav, mainStretch } from './toogleClass/classProps.js'

export const addEventListeners = () => {
  const addMovie = document.getElementById('nav__buttton_container__add_moive')
  addMovie.addEventListener('click', async () => {
    removeAllChildNodes('main')
    await insertAddMovieForm()
    toggleClass(mainStretch)
    toggleClass(hideMovieNav)
    toggleMovieNav()

    const form = document.getElementById('form__container')
    form.addEventListener('submit', onFormSubmit)
  })

  const toggleMoiveBrowser = document.getElementById(
    'nav__buttton_container__toggle_movie_browser'
  )
  toggleMoiveBrowser.addEventListener('click', toggleMovieNav)

  const movieNavLeft = document.getElementById('moive_nav__left')
  movieNavLeft.addEventListener('click', navigationLeft)

  const movieNavRight = document.getElementById('moive_nav__right')
  movieNavRight.addEventListener('click', navigationRight)

  const sortMovieDropdown = document.getElementById(
    'nav__buttton_container__sort_movies_dropdown'
  )
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
