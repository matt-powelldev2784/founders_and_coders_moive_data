export const displayMovieNav = (displayMoiveNavState) => {
  const movieNav = document.getElementsByClassName('moive_nav')
  const mainPanel = document.getElementsByClassName('main')
  const backgroundImg = document.getElementsByClassName('content__img')

  if (displayMoiveNavState) {
    movieNav[0].style.display = 'block'
    mainPanel[0].style.height = 'calc(100% - 19.5rem)'
    backgroundImg[0].style.height = '80%'
  }

  if (!displayMoiveNavState) {
    movieNav[0].style.display = 'none'
    mainPanel[0].style.height = 'calc(100% - 4rem)'
    backgroundImg[0].style.height = '70%'
  }
}
