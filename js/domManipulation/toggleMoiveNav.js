import { toggleClass } from '../toogleClass/toogleClass.js'
import {
  hideMovieNav,
  displayMovieNav,
  mainStretch,
  mainShrink,
  hideHomeFlexbox,
  displayhomeImage,
  hidehomeImage,
} from '../toogleClass/classProps.js'
import { removeMovieInfoNode } from './renderMovieInfo.js'
import { checkIsMobile } from '../helpers/isMobile.js'

export const toggleMovieNav = () => {
  const button = document.getElementById('nav__button_text__hide_movie_browser')
  const buttonClass = button.classList[1]
  const icon = document.getElementById('nav__button_icon__hide')

  const hideMoiveNav = () => {
    button.firstChild.remove()
    const text = document.createTextNode('Show Movie Browser')
    button.appendChild(text)
    toggleClass(hideMovieNav)
    toggleClass(mainStretch)
    button.classList.remove('hide')
    button.classList.add('show')
    icon.src = './img/show.svg'
  }

  const showMoiveNav = () => {
    button.firstChild.remove()
    const text = document.createTextNode('Hide Movie Browser')
    button.appendChild(text)
    toggleClass(displayMovieNav)
    toggleClass(mainShrink)
    button.classList.remove('show')
    button.classList.add('hide')
    icon.src = './img/hide.svg'
  }

  const isMobile = checkIsMobile()

  if (buttonClass === 'hide') {
    if (isMobile) {
      toggleClass(hidehomeImage)
    }
    hideMoiveNav()
  }

  if (buttonClass === 'show') {
    if (isMobile) {
      toggleClass(hideHomeFlexbox)
      toggleClass(displayhomeImage)
      removeMovieInfoNode()
    }
    showMoiveNav()
  }
}
