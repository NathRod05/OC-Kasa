import '../style/infoproperty.css'
import Collapse from './Collapse'

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
  const starsRating = rating.starsRating

  const range = [1, 2, 3, 4, 5]

  return (
    <div className="containt">
      <div className="contenair-1">
        <div>
          <h1>{title}</h1>
          <p>{location}</p>
        </div>
        <div className="host">
          <p className="host-name">{name}</p>
          <img className="picture" src={picture} alt="#"></img>
        </div>
      </div>
      <div className="contenair-2">
        <div className="tags">
          {tags &&
            tags.map((tag, index) => (
              <p className="tag" key={index}>
                {tag}
              </p>
            ))}
        </div>
        {range.map((rangeElem) =>
          starsRating >= rangeElem ? (
            <span key={rangeElem.toString()}>
              <i class="fa-solid fa-star"></i>
            </span>
          ) : null,
        )}
      </div>
      <div className="collapse-info">
        <Collapse title="Description" description={description} />
        <Collapse
          title="Équipements"
          description={
            <ul>
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
