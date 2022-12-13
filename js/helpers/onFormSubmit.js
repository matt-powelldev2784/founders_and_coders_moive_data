import { cleanMovieData } from '../movieData.js'
import { toggleClass } from '../toogleClass/toogleClass.js'
import { mainShrink } from '../toogleClass/classProps.js'
import { injectUploadedImage } from './injectUploadedImage.js'
import { removeAllChildNodes } from '../domManipulation/removeAllChildNodes.js'
import { toggleMovieNav } from '../domManipulation/toggleMoiveNav.js'

export const onFormSubmit = (event) => {
  event.preventDefault()
  const formContainer = document.getElementById('form__container')
  const formElements = [...formContainer.elements]

  console.log('formElements', formElements)

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
  removeAllChildNodes('main')
  toggleClass(mainShrink)
  toggleMovieNav()
}
