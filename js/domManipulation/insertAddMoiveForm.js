import { insertHtmlFile } from './insertHtmlFile/insertHtmlFile.js'

export const insertAddMovieForm = async () => {
  await insertHtmlFile({
    htmlFile: '../../../html/movie_form.html',
    containerElementId: 'main',
    htmlInsertPosition: 'afterbegin',
  })
}
