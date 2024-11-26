import '../style/card.css'

function Card({ id, title, cover }) {
  return (
    <div className="card">
      <div className="hidden">{id}</div>
      <div>
        <a href={`/accommodation/${id}`}>
          <img className="image" src={cover} alt="#" />
        </a>
        <div className="title">{title}</div>
      </div>
    </div>
  )
}

export default Card
