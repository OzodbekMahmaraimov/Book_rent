import NavigationBar from "../../components/navbar"
import AOS from 'aos';
import { useEffect } from "react";
import { Services, Contact, Footer } from '../index'
import data from '../../../public/data/db.json';


const Home = () => {
  useEffect(() => {
    AOS.init();
    console.log(data.home);
  }, [])

  return (
    <>
      <section id="home">
        <NavigationBar />
        <section className="homepage" id="home">
          <div className="content">
            <div className="text">
              <h1 data-aos="fade-right">{data.home.header}</h1>
              <p data-aos="fade-left" >
                {data.home.paragraph1} <br /> {data.home.paragraph2}
              </p>
            </div>
            <a href="#services">Our Services</a>
          </div>
        </section>
      </section>
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default Home