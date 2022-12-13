import { toggleMovieNav } from './toggleMovieNav.js';
import { renderMovieForm } from '../createElement/createMovieForm/renderMovieForm.js';
import { removeAllChildNodes } from './removeAllChildNodes.js';
import { toggleClass } from '../toogleClass/toogleClass.js';
import { mainStretch } from '../toogleClass/classProps.js';
import { onFormSubmit } from './onFormSubmit.js';

export const toggleMovieForm = () => {
  toggleMovieNav();
  removeAllChildNodes('main');
  toggleClass(mainStretch);
  renderMovieForm();

  const form = document.getElementById('form__container');
  form.addEventListener('submit', onFormSubmit);
};
