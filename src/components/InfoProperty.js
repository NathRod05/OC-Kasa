function Property({
  id,
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
      <span>{id}</span>
      <span>{title}</span>
      <span>{location}</span>
      <span>{name}</span>
      <span>{picture}</span>
      <span>{tags}</span>
      <span>{rating}</span>
      <span>{description}</span>
      <span>{equipments}</span>
    </div>
  )
}

export default Property
