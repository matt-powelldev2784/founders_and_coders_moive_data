import { toggleNode } from './toogleNodes/toggleNode.js'
import { movieNavNode } from './toogleNodes/nodeProps.js'
import { formNode } from './toogleNodes/nodeProps.js'
import { onFormSubmit } from './helpers/onFormSubmit.js'

export const addEventListeners = () => {
  const addMoiveNav = document.getElementById('add_moive')
  addMoiveNav.addEventListener('click', () => {
    toggleNode(movieNavNode, false)
    toggleNode(formNode, true)
  })

  const form = document.querySelector('form')
  form.addEventListener('submit', onFormSubmit)
}
