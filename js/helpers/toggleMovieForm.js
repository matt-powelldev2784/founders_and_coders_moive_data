import { toggleMovieNav } from '../domManipulation/toggleMoiveNav.js'
import { renderMovieForm } from '../domManipulation/createElement/createMovieForm/renderMovieForm.js'
import { removeAllChildNodes } from '../domManipulation/removeAllChildNodes.js'
import { toggleClass } from '../toogleClass/toogleClass.js'
import { mainStretch } from '../toogleClass/classProps.js'
import { onFormSubmit } from './onFormSubmit.js'

export const toggleMovieForm = () => {
  toggleMovieNav()
  removeAllChildNodes('main')
  toggleClass(mainStretch)
  renderMovieForm()
  removeAllChildNodes('nav__buttton_container__add_moive')

  const form = document.getElementById('form__container')
  form.addEventListener('submit', onFormSubmit)
}
