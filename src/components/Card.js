import '../style/card.css'

function Card({ id, title, cover }) {
  return (
    <div className="card">
      <span>{id}</span>
      <div>
        <img className="image" src={cover} alt="#" />
        <span className="title">{title}</span>
      </div>
    </div>
  )
}

export default Card
