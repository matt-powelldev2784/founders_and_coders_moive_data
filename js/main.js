import { cleanMovieData } from './movieData.js'
import { renderMovieNav } from './domManipulation/renderMovieNav.js'
import { addEventListeners } from './eventListeners.js'
import { getDataFromStorage } from './helpers/localStorage.js'
import { checkIsMobileOnStart } from './helpers/isMobile.js'
import { insertInitialHtmlFiles } from './domManipulation/insertHtmlFile/insertInitialHtmlFiles.js'

const startSeq = async () => {
  await insertInitialHtmlFiles()
  loadPage()
}
startSeq()

const loadPage = () => {
  checkIsMobileOnStart()
  getDataFromStorage()
  renderMovieNav(cleanMovieData)
  addEventListeners()
}

setInterval(() => {
  console.log('window.innerWidth', window.innerWidth)
  console.log('window.innerHeight', window.innerHeight)
}, 3000)
