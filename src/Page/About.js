import Collapse from '../components/Collapse'
import Banner from '../components/Banner'
import '../style/style.css'
import '../style/about.css'
import about from '../about.json'

function About() {
  return (
    <div className="page">
      <Banner />
      <div className="container_collapse">
        {about.map((collapse) => {
          return (
            <Collapse
              key={collapse}
              title={collapse.title}
              description={collapse.description}
            />
          )
        })}
      </div>
    </div>
  )
}

export default About
