import { toggleClass } from '../toogleClass/toogleClass.js'
import { hideMovieNav, mainStretch } from '../toogleClass/classProps.js'
import { toggleMovieNav } from '../domManipulation/toggleMoiveNav.js'

export const checkIsMobileOnStart = () => {
  const isMobile = window.innerWidth < 451 ? true : false

  if (isMobile) {
    //toggleClass(hideMovieNav)
    toggleClass(mainStretch)
    toggleMovieNav()
  }
}

export const checkIsMobile = () => {
  const isMobile = window.innerWidth < 451 ? true : false
  return isMobile
}
