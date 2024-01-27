
import React from 'react'
import { Article } from '@/types'
import ArticleCard from './ArticleCard'

type ArticleListProps = {
  articles: Article[];
}
//TOPの記事のひな型
const ArticleList = ({ articles}: ArticleListProps) => {
  return (
    <div>
      {articles.map((article) => (
        <ArticleCard article={article} key={article.id}/> //ArticleCardに記載
      ))}
    </div>
  )
}

export default ArticleList