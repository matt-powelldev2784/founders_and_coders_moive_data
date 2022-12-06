const classProps = {
  displayForm: { id: 'form__container', display: true, append: '_HIDE' },
  hideForm: { id: 'form__container', display: false, append: '_HIDE' },
  displayMovieNav: { id: 'moive_nav', display: true, append: '_HIDE' },
  hideMovieNav: { id: 'moive_nav', display: false, append: '_HIDE' },
  mainStretch: {
    id: 'page_container_flexbox',
    display: false,
    append: '__STRETCH',
  },
  mainShrink: {
    id: 'page_container_flexbox',
    display: true,
    append: '__STRETCH',
  },
  hidehomeImage: { id: 'home__bg_img', display: false, append: '_HIDE' },
  displayhomeImage: { id: 'home__bg_img', display: true, append: '_HIDE' },
  hideHomeFlexbox: { id: 'home__flexbox', display: false, append: '_HIDE' },
  displayHomeFlexbox: { id: 'home__flexbox', display: true, append: '_HIDE' },
  hideMoiveBrowserBtn: {
    id: 'toggle_movie_browser',
    display: false,
    append: '_HIDE',
  },
  displayMoiveBrowserBtn: {
    id: 'toggle_movie_browser',
    display: true,
    append: '_HIDE',
  },
  displaySortMoviesMenu: {
    id: 'nav__button_text__dropdown_container',
    display: true,
    append: '_HIDE',
  },
  hideSortMoviesMenu: {
    id: 'nav__button_text__dropdown_container',
    display: false,
    append: '_HIDE',
  },
  displaySortMoviesArrow: {
    id: 'nav_sort_pulldown_arrow',
    display: true,
    append: '_HIDE',
  },
  hideSortMoviesArrow: {
    id: 'nav_sort_pulldown_arrow',
    display: false,
    append: '_HIDE',
  },
}

export const {
  displayForm,
  hideForm,
  displayMovieNav,
  hideMovieNav,
  mainStretch,
  mainShrink,
  hidehomeImage,
  displayhomeImage,
  hideHomeFlexbox,
  displayHomeFlexbox,
  hideMoiveBrowserBtn,
  displayMoiveBrowserBtn,
  displaySortMoviesMenu,
  hideSortMoviesMenu,
  displaySortMoviesArrow,
  hideSortMoviesArrow,
} = classProps
