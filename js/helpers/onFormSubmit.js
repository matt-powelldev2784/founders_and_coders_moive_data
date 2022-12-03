import { cleanMovieData } from '../movieData.js'
import { toggleNode } from '../toogleNodes/toggleNode.js'
import { movieNavNode, formNode } from '../toogleNodes/nodeProps.js'
import { injectUploadedImage } from './injectUploadedImage.js'

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
  injectUploadedImage()
  toggleNode(movieNavNode, true)
  toggleNode(formNode, false)
}
