import { toggleNode } from './toogleNodes/toggleNode.js'
import { movieNavNode, formNode, homeTitle } from './toogleNodes/nodeProps.js'
import { onFormSubmit } from './helpers/onFormSubmit.js'
import { renderMoiveInfo } from './helpers/renderMovieInfo.js'
import { removeMovieInfoNode } from './helpers/renderMovieInfo.js'

export const addEventListeners = () => {
  const addMovie = document.getElementById('add_moive')
  addMovie.addEventListener('click', () => {
    removeMovieInfoNode()
    toggleNode(movieNavNode, false)
    toggleNode(formNode, true)
    toggleNode(homeTitle, true)
  })

  const hideMoiveBrowser = document.getElementById('hide_moive_browser')
  hideMoiveBrowser.addEventListener('click', () => {
    toggleNode(movieNavNode, false)
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
