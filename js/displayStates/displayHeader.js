export const displayHeader = (displayHeaderState) => {
  const form = document.getElementsByClassName('form__container')
  const contentHeader = document.getElementsByClassName('content__header_div')

  if (displayHeaderState) {
    contentHeader[0].style.display = 'none'
  }

  if (!displayHeaderState) {
    contentHeader[0].style.display = 'block'
  }
}
