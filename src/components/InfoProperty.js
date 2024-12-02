import '../style/infoproperty.css'
import Collapse from './Collapse'
import Host from './Host'
import Rating from './Rating'

function Property({
  title,
  location,
  name,
  picture,
  tags,
  rating,
  description,
  equipments,
}) {
  return (
    <div className="containt">
      <div className="location">
        <h1>{title}</h1>
        <p>{location}</p>
      </div>
      <div className="container">
        <div className="tags">
          {tags &&
            tags.map((tag, index) => (
              <p className="tag" key={index}>
                {tag}
              </p>
            ))}
        </div>
        <div className="host-rating">
          <Host name={name} picture={picture} />
          <div className="rating">
            <Rating starsRating={rating} />
          </div>
        </div>
      </div>
      <div className="info">
        <Collapse title="Description" description={description} />
        <Collapse
          title="Équipements"
          description={
            <ul className="equipement">
              {equipments &&
                equipments.map((equipments, index) => (
                  <li key={index}> {equipments}</li>
                ))}
            </ul>
          }
        />
      </div>
    </div>
  )
}

export default Property
