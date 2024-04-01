import { useEffect, useState } from 'react';
import data from '../../../public/data/db'
import './index.css'
import AOS from 'aos';
import Footer from '../footer';

const AboutUs = () => {
  const [json, setJson] = useState([]);

  useEffect(() => {
    AOS.init()
    setJson(data.about3)
  }, [])

  return (
    <>
      <section className="w-full">
        <div className="w-full h-[15rem] about-bg flex justify-center items-center">
          <h1 className='text-7xl text-white font-semibold'>About Us</h1>
        </div>
        <div data-aos="zoom-in" className='about-section w-full'>
          <div className="row1-container">
            {json.map((item, idx) => (
              <div key={idx} className={`box cursor-pointer duration-300 hover:scale-105 ${item.className}`}>
                <h2>{item.heading}</h2>
                <p>{item.paragraph}</p>
                <img src={item.img} alt={item.heading} />
              </div>
            ))}
          </div>
          <div className="row2-container">
            <div className="box cursor-pointer duration-300 hover:scale-105 orange">
              <h2>{data.about1.heading}</h2>
              <p>{data.about1.paragraph}</p>
              <img src={data.about1.img} alt={data.about1.heading} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default AboutUs