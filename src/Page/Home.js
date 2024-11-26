import '../style/style.css'
import '../style/home.css'
import Banner from '../components/Banner'
import Card from '../components/Card'
import data from '../data.json'

function Home() {
  return (
    <div className="page">
      <Banner />
      <div className="cards">
        {data.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              cover={card.cover}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Home
