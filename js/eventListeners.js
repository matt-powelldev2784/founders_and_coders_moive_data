import { toggleClass } from './toogleNodes/toogleClass.js'
import {
  displayForm,
  mainFullScreen,
  hideMovieNav,
  hidehomeImage,
  displayHomeFlexbox,
  hideMoiveBrowserBtn,
} from './toogleNodes/classProps.js'
import { toggleMovieNav } from './helpers/toggleMoiveNav.js'
import { onFormSubmit } from './helpers/onFormSubmit.js'
import { renderMoiveInfo } from './helpers/renderMovieInfo.js'
import { removeMovieInfoNode } from './helpers/renderMovieInfo.js'
import { navigationLeft, navigationRight } from './helpers/navigation.js'

export const addEventListeners = () => {
  const addMovie = document.getElementById('add_moive')
  addMovie.addEventListener('click', () => {
    removeMovieInfoNode()
    toggleClass(displayHomeFlexbox)
    toggleClass(hideMovieNav)
    toggleClass(mainFullScreen)
    toggleClass(displayForm)
    toggleClass(hidehomeImage)
    toggleClass(hideMoiveBrowserBtn)
  })

  const toggleMoiveBrowser = document.getElementById('toggle_movie_browser')
  toggleMoiveBrowser.addEventListener('click', toggleMovieNav)

  const form = document.getElementById('form__container')
  form.addEventListener('submit', onFormSubmit)

  const movieNavLeft = document.getElementById('moive_nav__left')
  movieNavLeft.addEventListener('click', navigationLeft)

  const movieNavRight = document.getElementById('moive_nav__right')
  movieNavRight.addEventListener('click', navigationRight)

  refreshMoviesNavEventListeners()
}

export const refreshMoviesNavEventListeners = () => {
  const movies = document.getElementsByClassName('movie_nav__card')
  const moiveElements = [...movies]
  moiveElements.forEach((element) => {
    element.addEventListener('click', renderMoiveInfo)
  })
}
