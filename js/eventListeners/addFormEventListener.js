import { cleanMovieData } from '../movieData.js'
import { renderMovieNav } from '../renderMovieNav.js'
import { displayMovieNav } from '../displayStates/displayMoiveNav.js'
import { displayForm } from '../displayStates/displayForm.js'

export const addFormEventListener = () => {
  const form = document.querySelector('form')

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formElements = [...form.elements]

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
    renderMovieNav(cleanMovieData)
    injectUploadedImage(`moive_nav__img_${key}`)
    displayMovieNav(true)
    displayForm(false)
  })
}

const injectUploadedImage = (imageId) => {
  const file = document.getElementById('form__image_upload').files[0]
  const image = document.getElementById(imageId)
  const reader = new FileReader()

  reader.onloadend = () => {
    image.src = reader.result
  }

  if (file) {
    reader.readAsDataURL(file)
  } else {
    preview.src = ''
  }
}
