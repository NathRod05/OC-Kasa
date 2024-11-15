import '../style/home.css'
import Header from './Header'
import Banner from './Banner'
import Card from './Card'
import Footer from './Footer'
function Home() {
    return (
        <div className="home">
            <Header />
            <Banner />
            <Card />
            <Footer />
        </div>
    );
}

export default Home;
