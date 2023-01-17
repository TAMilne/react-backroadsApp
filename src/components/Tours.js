import { tours } from '../data'
import Title from './Title'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="Featured" subtitle="Tours" />

      <div className="section-center featured-center">
        {tours.map((link) => {
          return (
            <article className="tour-card" key={link.id}>
              <div className="tour-img-container">
                <img src={link.img} className="tour-img" alt="" />
                <p className="tour-date">{link.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{link.title}</h4>
                </div>
                <p>{link.text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{' '}
                    {link.location}
                  </p>
                  <p>{link.duration} Days</p>
                  <p>from ${link.cost}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Tours
