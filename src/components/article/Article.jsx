import React from 'react'
import './article.css'

const Article = ({imgUrl}) => {
  return (
    <div className='gp3__blog-container_article'>
      <div className='gpt3__blog-container_article-img'>
        <img src={imgUrl} alt="blog" />
      </div>
    </div>
  )
}

export default Article
