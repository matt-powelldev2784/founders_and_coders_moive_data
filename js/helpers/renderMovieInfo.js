import { cleanMovieData } from '../movieData.js'
import { toggleClass } from '../toogleNodes/toogleClass.js'
import {
  hideHomeFlexbox,
  hidehomeImage,
  mainStretch,
} from '../toogleNodes/classProps.js'
import { checkIsMobile } from './isMobile.js'
import { toggleMovieNav } from './toggleMoiveNav.js'

export const removeMovieInfoNode = () => {
  const movieNode = document.getElementsByClassName('large_card')[0]
  if (movieNode) {
    movieNode.remove()
  }
}

export const renderMoiveInfo = (event) => {
  removeMovieInfoNode()
  toggleClass(hideHomeFlexbox)
  toggleClass(hidehomeImage)
  const isMobile = checkIsMobile()
  if (isMobile) {
    toggleMovieNav()
    toggleClass(mainStretch)
  }

  const targetId = event.currentTarget.id
  const regEx = /\d+/
  const movieKey = parseInt(targetId.match(regEx)[0])

  const findMoive = cleanMovieData.filter((movie) => {
    if (movie.key === movieKey) {
      return movie
    }
  })
  const movie = findMoive[0]
  const { key, plot, runtime, year, image } = movie
  const title = movie.title.toUpperCase()
  const rating = parseInt(Math.round(movie.rating / 2))
  const cast = movie.cast.join(', ')

  //create article node
  const articleNode = document.createElement('article')
  articleNode.classList.add('large_card')
  articleNode.setAttribute('id', `movie_nav__card__${key}`)

  //create image node
  const imageNode = document.createElement('div')
  imageNode.classList.add('large_card__img_container')
  imageNode.style.backgroundImage = `linear-gradient(to left, transparent, #171e31),
    url(${image})`

  //create container nodes
  const textContainer = document.createElement('div')
  textContainer.classList.add('large_card__text_container')
  const flexConatiner = document.createElement('div')
  flexConatiner.classList.add('large_card__text_flex_container')
  const textBox = document.createElement('div')
  textBox.classList.add('large_card__text_flexbox')

  //create h1 node
  const h1 = document.createElement('h1')
  h1.classList.add('large_card__h1')
  const h1text = document.createTextNode(title)
  h1.appendChild(h1text)

  //create stars node
  const starContainer = document.createElement('div')
  starContainer.classList.add('large_card__star_container')
  const numberOfStars = Array(rating).fill('star')
  numberOfStars.forEach(() => {
    const star = document.createElement('div')
    star.classList.add('large_card__star')
    starContainer.appendChild(star)
  })

  //create details flexbox
  const detailsFlexbox = document.createElement('div')
  detailsFlexbox.classList.add('large_card__details_flexbox')

  const yearNode = document.createElement('p')
  yearNode.classList.add('large_card__year')
  const yearText = document.createTextNode(`YEAR : ${year}`)
  yearNode.appendChild(yearText)

  const ratingNode = document.createElement('p')
  ratingNode.classList.add('large_card__year')
  const ratingText = document.createTextNode(`RATING : ${rating} / 5`)
  ratingNode.appendChild(ratingText)

  const runtimeNode = document.createElement('p')
  runtimeNode.classList.add('large_card__year')
  const runtimeText = document.createTextNode(`RUNTIME : ${runtime} MINS`)
  runtimeNode.appendChild(runtimeText)

  detailsFlexbox.appendChild(yearNode)
  detailsFlexbox.appendChild(ratingNode)
  detailsFlexbox.appendChild(runtimeNode)

  //create plot node
  const plotNode = document.createElement('p')
  plotNode.classList.add('large_card__plot')
  const plotText = document.createTextNode(plot)
  plotNode.appendChild(plotText)

  //create cast node
  const castNode = document.createElement('p')
  castNode.classList.add('large_card__cast')
  const castText = document.createTextNode(cast)
  castNode.appendChild(castText)

  //add nodes to text container
  textContainer.appendChild(flexConatiner)
  flexConatiner.appendChild(textBox)
  textBox.appendChild(h1)
  textBox.appendChild(starContainer)
  textBox.appendChild(detailsFlexbox)
  textBox.appendChild(plotNode)
  textBox.appendChild(castNode)

  //add nodes to card
  const mainContainer = document.getElementById('main__container')
  mainContainer.appendChild(articleNode)
  articleNode.appendChild(imageNode)
  articleNode.appendChild(textContainer)
}
