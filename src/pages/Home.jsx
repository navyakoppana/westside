import BestSeller from '../components/BestSeller'
import Footer from '../components/Footer'
import Homecontent from '../components/Homecontent'
import LatestCollection from '../components/LatestCollection'
import NewsLetterBox from '../components/NewsLetterBox'
import OurPolicy from '../components/OurPolicy'


const Home = () => {
  return (
    <div> 
        <Homecontent />
        <LatestCollection />
        <BestSeller />
        <OurPolicy />
        <NewsLetterBox />
        <Footer/>
    </div>
  )
}

export default Home