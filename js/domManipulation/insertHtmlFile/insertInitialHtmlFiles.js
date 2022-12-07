import { insertHtmlFile } from './insertHtmlFile.js'
import { header, homePage, homePageBgImage, moiveNav } from './htmlFileProps.js'

export const insertInitialHtmlFiles = async () => {
  await insertHtmlFile(header)
  await insertHtmlFile(homePage)
  await insertHtmlFile(homePageBgImage)
  await insertHtmlFile(moiveNav)
}
