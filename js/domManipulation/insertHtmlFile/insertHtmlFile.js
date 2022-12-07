export const insertHtmlFile = async ({
  htmlFile,
  containerElementId,
  htmlInsertPosition,
}) => {
  const getHtml = await fetch(htmlFile)
  const htmlToBeInserted = await getHtml.text()

  const htmlInsertElement = document.getElementById(containerElementId)
  htmlInsertElement.insertAdjacentHTML(htmlInsertPosition, htmlToBeInserted)
}