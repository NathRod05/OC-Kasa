import { useParams } from 'react-router'
import '../style/style.css'
import data from '../data.json'
import Carrousel from '../components/Carrousel'
import InfoProperty from '../components/InfoProperty'
import Error from './Error'

function Accommodation() {
  const { id } = useParams()
  const property = data.find((item) => item.id === id)

  if (!property) {
    return <Error />
  }
  return (
    <div className="page">
      <Carrousel pictures={property.pictures} />
      <InfoProperty
        title={property.title}
        location={property.location}
        name={property.host.name}
        picture={property.host.picture}
        tags={property.tags}
        rating={property.rating}
        description={property.description}
        equipments={property.equipments}
      />
    </div>
  )
}

export default Accommodation
