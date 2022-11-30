export const displayForm = (displayFormState) => {
  const form = document.getElementsByClassName('form__container')
  const contentHeader = document.getElementsByClassName('content__header_div')

  if (displayFormState) {
    form[0].style.display = 'block'
  }

  if (!displayFormState) {
    form[0].style.display = 'none'
  }
}
