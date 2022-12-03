const classProps = {
  displayForm: { id: 'form__container', display: true, append: '_HIDE' },
  hideForm: { id: 'form__container', display: false, append: '_HIDE' },
  displayMovieNav: { id: 'moive_nav', display: true, append: '_HIDE' },
  hideMovieNav: { id: 'moive_nav', display: false, append: '_HIDE' },
  mainFullScreen: { id: 'main', display: false, append: '__fullscreen' },
  mainHalfScreen: { id: 'main', display: true, append: '__fullscreen' },
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
}

export const {
  displayForm,
  hideForm,
  displayMovieNav,
  hideMovieNav,
  mainFullScreen,
  mainHalfScreen,
  hidehomeImage,
  displayhomeImage,
  hideHomeFlexbox,
  displayHomeFlexbox,
  hideMoiveBrowserBtn,
  displayMoiveBrowserBtn,
} = classProps
