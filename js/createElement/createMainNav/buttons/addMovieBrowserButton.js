import { createNavButton } from '../createNavButton.js'

export const addMovieBrowserButton = createNavButton({
  containerClass: 'nav__buttton_container movie_browser_hide',
  containerId: 'nav__buttton_container__toggle_movie_browser',
  imgClass: 'nav__button_icon',
  imgId: 'nav__button_icon__movie_browser',
  imgSrc: './img/hide.svg',
  imgAlt: 'Toggle Movie Browser',
  pClass: 'nav__button_text hide',
  pId: 'nav__button_text__hide_movie_browser',
  pText: 'Hide Movie Browser',
  arrow: false,
  dropDownMenu: false,
})
