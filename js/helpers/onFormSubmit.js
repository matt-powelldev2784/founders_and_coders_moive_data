import { cleanMovieData } from '../movieData.js'
import { toggleClass } from '../toogleNodes/toogleClass.js'
import {
  displayMovieNav,
  hideForm,
  mainHalfScreen,
  displayhomeImage,
} from '../toogleNodes/classProps.js'
import { injectUploadedImage } from './injectUploadedImage.js'

export const onFormSubmit = (event) => {
  event.preventDefault()

  const formElements = [...form__container.elements]
  formElements.splice(5, 1)
  formElements.splice(7, 1)

  const newMovieData = formElements.map((element) => {
    const key = element.name
    const value = element.value.trim()

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
  toggleClass(displayhomeImage)
}
