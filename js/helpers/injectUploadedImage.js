import { cleanMovieData } from '../movieData.js'
import { renderMovieNav } from './renderMovieNav.js'
import { refreshMoviesNavEventListeners } from '../eventListeners.js'

export const injectUploadedImage = () => {
  const file = document.getElementById('form__image_upload').files[0]
  const reader = new FileReader()

  reader.onloadend = () => {
    cleanMovieData[0].image = reader.result
    renderMovieNav(cleanMovieData)
    refreshMoviesNavEventListeners()
  }

  if (file) {
    reader.readAsDataURL(file)
  }
}

// export const injectUploadedImage = (imageId) => {
//   const file = document.getElementById('form__image_upload').files[0]
//   const image = document.getElementById(imageId)
//   const reader = new FileReader()

//   reader.onloadend = () => {
//     console.log('reader.result', reader.result)
//     image.src = reader.result
//   }

//   if (file) {
//     reader.readAsDataURL(file)
//   } else {
//     preview.src = ''
//   }
// }
