import '../style/style.css'
import data from '../data.json'
import Carrousel from '../components/Carrousel'
// import InfoProperty from '../components/InfoProperty'

function Accommodation() {
  return (
    <div className="page">
      {data.map((carrousel) => {
        return <Carrousel key={carrousel.id} pictures={carrousel.pictures} />
      })}
    </div>
  )
}

export default Accommodation
