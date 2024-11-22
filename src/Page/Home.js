import '../style/style.css'
import Banner from '../components/Banner'
import Card from '../components/Card'
import data from '../data.json'

function Home() {
  return (
    <div className="style">
      <Banner />
      {data.map((card) => {
        return <Card key={card.id} title={card.title} cover={card.cover} />
      })}
    </div>
  )
}

export default Home
