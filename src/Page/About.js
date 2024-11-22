import Collapse from '../components/Collapse'
import Banner from '../components/Banner'
import about from '../about.json'

function About() {
  return (
    <div className="style">
      <Banner />
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
  )
}

export default About
