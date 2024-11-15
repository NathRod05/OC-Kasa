import '../style/card.css'
import PropTypes from 'prop-types'
// import {dataList} from '../data.json'

function Card({ id, title, picture }) {
  return (
    <div>
      <span>{id}</span>
      <img src={picture} alt="#" />
      <span>{title}</span>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  picture: PropTypes.string,
}

// {dataList.map((data) => (
//     <li key={data.id}>
//         {data.name}
//         {data.img}
//     </li>
// ))}
export default Card
