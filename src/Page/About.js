import Collapse from '../components/Collapse'
import Banner from '../components/Banner'
import banner2 from '../assets/kalen-emsley.png'
import '../style/style.css'
import '../style/about.css'
import about from '../about.json'

function About() {
  return (
    <div className="page">
      <Banner image={banner2} accueil={false} />
      <div className="container_collapse">
        {about.map((collapse) => {
          return (
            <Collapse
              className="collapse"
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
