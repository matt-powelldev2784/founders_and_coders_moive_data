import { createFormInput } from './createFormInput.js'
import { createElement } from '../createElement.js'
import { createSmallInputs } from './createSmallInputs.js'

export const createFormInputs = () => {
  const title = createFormInput('input', {
    type: 'text',
    class: 'form_input__text',
    name: 'title',
    placeholder: 'Title',
    required: 'required',
  })

  const smallInputs = createSmallInputs()

  const plot = createFormInput('textarea', {
    type: 'text',
    class: 'form_input__textarea',
    name: 'plot',
    placeholder: 'Plot',
    required: 'required',
  })

  const cast = createFormInput('input', {
    type: 'text',
    class: 'form_input__text',
    name: 'cast',
    placeholder: 'Cast ',
    required: 'required',
  })

  const file = createFormInput('input', {
    type: 'file',
    id: 'form__image_upload',
    accept: 'image/jpeg, image/png, image/jpg',
    class: 'form_input__text',
    name: 'image',
    placeholder: 'Upload Image',
    required: 'required',
  })

  const submitBtn = createElement('input', {
    class: 'form__submit_button',
    type: 'submit',
    value: 'Submit',
  })

  const formInputs = createElement(
    'div',
    { className: 'form__inputs' },
    title,
    smallInputs,
    plot,
    cast,
    file,
    submitBtn
  )

  return formInputs
}
