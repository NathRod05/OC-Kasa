import '../style/rating.css'
function Rating({ starsRating }) {
  const range = [1, 2, 3, 4, 5]
  return range.map((rangeElem) => (
    <span key={rangeElem.toString()}>
      <i
        className={`fa-star ${starsRating >= rangeElem ? 'fa-solid orange-star' : 'fa-solid grey-star'}`}
      ></i>
    </span>
  ))
}

export default Rating
