import { toggleClass } from '../toogleNodes/toogleClass.js'
import {
  hideMovieNav,
  displayMovieNav,
  mainFullScreen,
  mainHalfScreen,
} from '../toogleNodes/classProps.js'

export const toggleMovieNav = () => {
  const button = document.getElementById('nav__button_text')
  const buttonClass = button.classList[1]
  console.log('button', button)
  console.log('buttonClass', buttonClass)

  const displayHideButton = () => {
    button.firstChild.remove()
    const text = document.createTextNode('Show Movie Browser')
    button.appendChild(text)
    toggleClass(hideMovieNav)
    toggleClass(mainFullScreen)
    button.classList.remove('hide')
    button.classList.add('show')
  }

  const displayShowButton = () => {
    button.firstChild.remove()
    const text = document.createTextNode('Hide Movie Browser')
    button.appendChild(text)
    toggleClass(displayMovieNav)
    toggleClass(mainHalfScreen)
    button.classList.remove('show')
    button.classList.add('hide')
  }

  if (buttonClass === 'hide') {
    displayHideButton()
  }

  if (buttonClass === 'show') {
    displayShowButton()
  }
}
