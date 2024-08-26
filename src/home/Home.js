import HomeDetails from "./HomeDetails";
import HomePartners from "./HomePartners";
import HomeSlider from "./HomeSlider";
import HomeTop from "./HomeTop";
import './Home.css';

export default function Home() {
  return (
    <div className='home_container'>
        <HomeTop />
        <HomeSlider />
        <HomeDetails />
        <HomePartners />
    </div>
  )
}