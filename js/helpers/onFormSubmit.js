import { cleanMovieData } from '../movieData.js'
import { toggleClass } from '../toogleNodes/toogleClass.js'
import {
  displayMovieNav,
  hideForm,
  displayhomeImage,
  displayMoiveBrowserBtn,
  mainShrink,
} from '../toogleNodes/classProps.js'
import { injectUploadedImage } from './injectUploadedImage.js'

export const onFormSubmit = (event) => {
  event.preventDefault()
  const formContainer = document.getElementById('form__container')
  const formElements = [...formContainer.elements]

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
  formContainer.reset()
  toggleClass(hideForm)
  toggleClass(displayMovieNav)
  toggleClass(mainShrink)
  toggleClass(displayhomeImage)
  toggleClass(displayMoiveBrowserBtn)
}
