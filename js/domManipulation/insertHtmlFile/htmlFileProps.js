import {
  movieNavHtml,
  homePageHtml,
  homeBgImageHtml,
  headerHtml,
} from './htmlFiles.js'

const htmlFileProps = {
  header: {
    htmlFile: headerHtml,
    containerElementId: 'header__container',
    htmlInsertPosition: 'afterbegin',
  },
  homePage: {
    htmlFile: homePageHtml,
    containerElementId: 'main',
    htmlInsertPosition: 'beforeend',
  },
  homePageBgImage: {
    htmlFile: homeBgImageHtml,
    containerElementId: 'main',
    htmlInsertPosition: 'afterbegin',
  },
  moiveNav: {
    htmlFile: movieNavHtml,
    containerElementId: 'moive_nav',
    htmlInsertPosition: 'afterbegin',
  },
}

export const { header, homePage, homePageBgImage, moiveNav } = htmlFileProps
