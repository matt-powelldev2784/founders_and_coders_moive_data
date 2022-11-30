import { displayMovieNav } from '../displayStates/displayMoiveNav.js'
import { displayForm } from '../displayStates/displayForm.js'

export const addNavEventListeners = () => {
  document.addEventListener('click', () => {
    displayMovieNav(false)
    displayForm(true)
  })
}
