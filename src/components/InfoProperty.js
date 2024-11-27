import '../style/infoproperty.css'
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
    <div>
      <div className="contenair-1">
        <div>
          <p>{title}</p>
          <p>{location}</p>
        </div>
        <div className="host">
          <p className="host-name">{name}</p>
          <img className="picture" src={picture} alt="#"></img>
        </div>
      </div>
      <div>
        <p>{tags}</p>
        <span>{rating}</span>
      </div>
      <div>
        <button>Description</button>
        <ul>{description}</ul>
      </div>
      <div>
        <button>Équipements</button>
        <ul>{equipments}</ul>
      </div>
    </div>
  )
}

export default Property
