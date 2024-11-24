import '../style/style.css'
import data from '../data.json'
import Carrousel from '../components/Carrousel'
import InfoProperty from '../components/InfoProperty'

function Accommodation() {
  return (
    <div className="page">
      {data.map((carrousel) => {
        return (
          <Carrousel
            key={carrousel}
            id={carrousel.id}
            pictures={carrousel.pictures}
          />
        )
      })}
      {data.map((property) => {
        return (
          <InfoProperty
            key={property}
            id={property.id}
            title={property.title}
            location={property.location}
            name={property.name}
            picture={property.pictures}
            tags={property.tags}
            rating={property.rating}
            description={property.description}
            equipments={property.equipments}
          />
        )
      })}
    </div>
  )
}

export default Accommodation
