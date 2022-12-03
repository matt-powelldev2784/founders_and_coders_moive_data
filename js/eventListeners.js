import { toggleClass } from './toogleNodes/toogleClass.js'
import {
  displayForm,
  mainFullScreen,
  hideMovieNav,
  hidehomeImage,
} from './toogleNodes/classProps.js'
import { onFormSubmit } from './helpers/onFormSubmit.js'
import { renderMoiveInfo } from './helpers/renderMovieInfo.js'
import { removeMovieInfoNode } from './helpers/renderMovieInfo.js'

export const addEventListeners = () => {
  const addMovie = document.getElementById('add_moive')
  addMovie.addEventListener('click', () => {
    removeMovieInfoNode()
    toggleClass(displayForm)
    toggleClass(hideMovieNav)
    toggleClass(mainFullScreen)
    toggleClass(hidehomeImage)
  })

  const hideMoiveBrowser = document.getElementById('hide_moive_browser')
  hideMoiveBrowser.addEventListener('click', () => {
    toggleClass(hideMovieNav)
    toggleClass(mainFullScreen)
  })

  const form = document.querySelector('form')
  form.addEventListener('submit', onFormSubmit)

  refreshMoviesNavEventListeners()
}

export const refreshMoviesNavEventListeners = () => {
  const movies = document.getElementsByClassName('movie_nav__card')
  const moiveElements = [...movies]
  moiveElements.forEach((element) => {
    element.addEventListener('click', renderMoiveInfo)
  })
}
