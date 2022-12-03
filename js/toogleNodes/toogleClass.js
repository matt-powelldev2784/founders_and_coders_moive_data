export const toggleClass = ({ id, display, append }) => {
  const element = document.getElementById(id)

  element.classList.remove(id)
  const appendClass = id + append
  element.classList.remove(appendClass)

  if (display) {
    element.classList.add(id)
  }

  if (!display) {
    element.classList.add(appendClass)
  }
}
