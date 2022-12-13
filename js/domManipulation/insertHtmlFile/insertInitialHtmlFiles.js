import { insertHtmlFile } from './insertHtmlFile.js'
import { header, homePage, homePageBgImage, moiveNav } from './htmlFileProps.js'

export const insertInitialHtmlFiles = async () => {
  await insertHtmlFile(moiveNav)
  await insertHtmlFile(homePage)
  await insertHtmlFile(homePageBgImage)
}
