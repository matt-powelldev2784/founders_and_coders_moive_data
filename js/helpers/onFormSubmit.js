import { cleanMovieData } from '../movieData.js'
import { toggleClass } from '../toogleNodes/toogleClass.js'
import {
  displayMovieNav,
  hideForm,
  mainHalfScreen,
} from '../toogleNodes/classProps.js'
import { injectUploadedImage } from './injectUploadedImage.js'

export const onFormSubmit = (event) => {
  event.preventDefault()
  const form = document.getElementById('form')
  const formElements = [...form__container.elements]

  const newMovieData = formElements.map((element) => {
    const key = element.name
    const value = element.value

    if (key === 'cast') {
      const value = element.value.split(',')
      return [key, value]
    }

    return [key, value]
  })

  const newMovie = Object.fromEntries(newMovieData)
  const key = cleanMovieData.length
  newMovie.key = key

  cleanMovieData.unshift(newMovie)
  injectUploadedImage()
  toggleClass(hideForm)
  toggleClass(displayMovieNav)
  toggleClass(mainHalfScreen)
}
