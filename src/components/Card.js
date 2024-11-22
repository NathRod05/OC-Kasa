import '../style/card.css'

function Card({ id, title, cover }) {
  return (
    <div className="cards">
      <span>{id}</span>
      <img className="image" src={cover} alt="#" />
      <span className="title">{title}</span>
    </div>
  )
}

export default Card
