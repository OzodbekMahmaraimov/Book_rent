import NavigationBar from "../../components/navbar"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section id="home">
      <NavigationBar />
      <section className="homepage" id="home">
        <div className="content">
          <div className="text">
            <h1 data-aos="fade-right">Camping Gear and Essentials</h1>
            <p data-aos="fade-left" >
              Discover top-quality camping gear for unforgettable outdoor adventures. <br /> Gear up and make lasting memories.
            </p>
          </div>
          <a href="#services">Our Services</a>
        </div>
      </section>
    </section>
  )
}

export default Home