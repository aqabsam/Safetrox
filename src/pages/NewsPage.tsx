import { ArrowRight } from 'lucide-react'

import { safetyNews } from '../data/siteData'

export default function NewsPage() {
  return (
    <section className="section page-shell">
      <div className="section-heading">
        <p className="eyebrow">Safety news</p>
        <h2>Recent occupational safety updates shared in a clear, modern news format.</h2>
        <p>
          Stay connected with the latest developments in HSE, workplace protection,
          and industry awareness from trusted global sources.
        </p>
      </div>
      <div className="news-grid">
        {safetyNews.map((item) => (
          <article className="news-card" key={item.title}>
            <div className="news-meta">
              <span>{item.source}</span>
              <span>{item.date}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.excerpt}</p>
            <a href={item.link} target="_blank" rel="noreferrer">
              Read more <ArrowRight size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
