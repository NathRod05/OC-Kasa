import '../style/style.css'
import Banner from '../components/Banner'
import Card from '../components/Card'
import data from '../data.json'
import '../style/card.css'

function Home() {
  return (
    <div className="style">
      <Banner />
      <div className="cards">
        {data.map((card) => {
          return <Card key={card.id} title={card.title} cover={card.cover} />
        })}
      </div>
    </div>
  )
}

export default Home
