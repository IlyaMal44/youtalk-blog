function ArticleCard({ article }) {
  return (
    <article className={`card${article.wide ? ' card--wide' : ''}`}>
      <a className="card__image-link" href="/article" aria-label={`Читать статью: ${article.title}`}>
        <img className="card__image" src={article.image} alt="" />
      </a>
      <div className="card__tags">
        {article.tags.map((tag) => (
          <span className="card__tag" key={tag}>
            <span className="card__tag-icon" aria-hidden="true">🦄</span>
            {tag}
          </span>
        ))}
      </div>
      <div className="card__body">
        <h2 className="card__title">
          <a href="/article">{article.title}</a>
        </h2>
        <p className="card__author">Автор: {article.author}</p>
        <p className="card__excerpt">{article.excerpt}</p>
        <time className="card__date" dateTime="2021-08-21">{article.date}</time>
      </div>
    </article>
  )
}

export default ArticleCard
