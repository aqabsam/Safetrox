import { Star } from 'lucide-react'

import { useContent } from '../contexts/ContentContext'

export default function RecommendationsPage() {
  const { testimonials } = useContent()
  return (
    <section className="section page-shell">
      <div className="section-heading">
        <p className="eyebrow">Recommendations</p>
        <h2>Recommendations from colleagues, peers, and professional partners.</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.name}>
            <div className="testimonial-card-shell">
              <a className="testimonial-link" href={testimonial.link} target="_blank" rel="noreferrer">
                <img src={testimonial.image} alt={`${testimonial.name} LinkedIn profile`} />
              </a>
              <div className="testimonial-content">
                <div className="testimonial-profile">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
                <div className="stars" aria-label="Five star review">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p>{testimonial.quote}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
