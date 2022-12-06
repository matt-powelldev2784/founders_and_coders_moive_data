import { toggleClass } from '../toogleNodes/toogleClass.js'
import { hideMovieNav, mainStretch } from '../toogleNodes/classProps.js'
import { toggleMovieNav } from './toggleMoiveNav.js'

export const checkIsMobileOnStart = () => {
  const isMobile = window.innerWidth < 451 ? true : false
  console.log('isMobile', isMobile)

  if (isMobile) {
    toggleClass(hideMovieNav)
    toggleClass(mainStretch)
    toggleMovieNav()
  }
}

export const checkIsMobile = () => {
  const isMobile = window.innerWidth < 451 ? true : false
  return isMobile
}
