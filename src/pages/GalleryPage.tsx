import { gallery } from '../data/siteData'

export default function GalleryPage() {
  return (
    <section className="section page-shell">
      <div className="section-heading">
        <p className="eyebrow">Gallery</p>
        <h2>Explore the professional environment behind Safetrox training and learning experiences.</h2>
      </div>
      <div className="gallery-grid">
        {gallery.map((item) => (
          <div key={item.title} style={{ backgroundImage: `url(${item.image})` }}>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
