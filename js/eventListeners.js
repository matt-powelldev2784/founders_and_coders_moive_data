import { toggleNode } from './toogleNodes/toggleNode.js'
import { movieNavNode } from './toogleNodes/nodeProps.js'
import { formNode } from './toogleNodes/nodeProps.js'
import { onFormSubmit } from './helpers/onFormSubmit.js'

export const addEventListeners = () => {
  const addMovie = document.getElementById('add_moive')
  addMovie.addEventListener('click', () => {
    toggleNode(movieNavNode, false)
    toggleNode(formNode, true)
  })

  const hideMoiveBrowser = document.getElementById('hide_moive_browser')
  hideMoiveBrowser.addEventListener('click', () => {
    toggleNode(movieNavNode, true)
  })

  const form = document.querySelector('form')
  form.addEventListener('submit', onFormSubmit)
}
