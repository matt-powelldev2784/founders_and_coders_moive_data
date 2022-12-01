import { cleanMovieData } from '../movieData.js'
import { renderMovieNav } from './renderMovieNav.js'
import { toggleNode } from '../toogleNodes/toggleNode.js'
import { movieNavNode, formNode } from '../toogleNodes/nodeProps.js'

export const onFormSubmit = (event) => {
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
  toggleNode(movieNavNode, true)
  toggleNode(formNode, false)
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
