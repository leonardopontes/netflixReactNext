import styles from "./style";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Tv from '../components/Tv';
import Devices from '../components/Devices';
import Kids from '../components/Kids';
import Download from '../components/Download';
import Questions from '../components/Questions';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-black"> 
      <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/5eab1b22-c5ea-48b0-8ef4-862b3fa6df2c/d1cacd76-d563-493b-9021-719793fcdbcc/BR-pt-20230724-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-no-repeat bg-cover bg-top md:h-[100vh]">
        <div className="bg-gradient-to-b from-black/90 via-black/30 to-black/90">
          <Navbar />
          <Hero />
        </div>     
      </div>
       <Tv />
       <Devices />
       <Kids />
       <Download />
       <Questions />
       <Footer />
    </div>
  )
}
