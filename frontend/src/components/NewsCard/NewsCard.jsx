import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function NewsCard (props) {
  const newsArray = props.news
  return newsArray.map(news => {
    return (
      // eslint-disable-next-line react/jsx-key
      <Link to='#' className='News-card'>
        <img src={news.imagePath} alt='Imagem referente a noticia' className='News-card__image' />

        <div className='News-card__align-text'>
          <h1 className='News-card__title'>{news.title}</h1>
          <p className='News-card__summary'>{news.summary}</p>
        </div>
      </Link>
    )
  })
}

export default NewsCard
