import { createFormInput } from './createFormInput.js'
import { createElement } from '../createElement.js'

export const createSmallInputs = () => {
  const year = createFormInput('input', {
    type: 'number',
    class: 'form_input__number',
    name: 'year',
    placeholder: 'Year',
    required: 'required',
    min: '1801',
    max: '3000',
  })

  const rating = createFormInput('input', {
    type: 'number',
    class: 'form_input__number',
    name: 'rating',
    placeholder: 'Rating',
    required: 'required',
    min: '1',
    max: '10',
  })

  const runTime = createFormInput('input', {
    type: 'number',
    class: 'form_input__number',
    name: 'runtime',
    placeholder: 'Run Time',
    required: 'required',
    min: '1',
    max: '999',
  })

  const smallInputsWrapper = createElement(
    'div',
    {
      class: 'form__small_wrapper',
    },
    year,
    rating,
    runTime
  )

  return smallInputsWrapper
}
