import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import logo from '../../assets/images/ilm_nuri.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './navbar.css'
import { Link } from 'react-router-dom';
import data from '../../../public/data/db.json'

function NavigationBar() {
    const [show, setShow] = useState(false);

    const toggleNavbar = () => setShow(!show);

    return (
        <>
            <header className="bg-[#E29734] text-white fixed top-0 inset-x-0 z-30 shadow-lg">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
                    <a href="#" className="flex items-center justify-center">
                        <LazyLoadImage effect='blur' className='h-16 rounded-full' src={logo} alt='this is logo' />
                        <span className="ml-4 uppercase font-black">{data.navbar.title}</span>
                    </a>
                    <div className="md:hidden">
                        <button onClick={toggleNavbar} className="text-white focus:outline-none">
                            <span>{show ? <IoMdClose fontSize={35} /> : <GiHamburgerMenu fontSize={30} />}</span>
                        </button>
                    </div>
                    <nav className={`${show ? 'block' : 'hidden'
                        } absolute md:static top-full left-0 w-full md:w-auto md:flex bg-[#E29734] md:bg-transparent shadow-md md:shadow-none`}>
                        <ul className="flex flex-col md:flex-row items-center md:mx-auto text-lg">
                            <li className="p-5">
                                <a href="#" className="hover:text-gray-200">
                                    Bosh sahifa
                                </a>
                            </li>
                            <li className="p-5">
                                <Link to='/about' className="hover:text-gray-200">
                                    Loyihamiz haqida
                                </Link>
                            </li>
                            <li className="p-5">
                                <a href="#services" className="hover:text-gray-200">
                                    Xizmatlar
                                </a>
                            </li>
                            <li className="p-5">
                                <a href="#contact" className="hover:text-gray-200">
                                    Biz bilan boglanish
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <a href='#contact' className="hidden md:inline-block cursor-pointer border border-white rounded-full font-bold px-8 py-2 hover:bg-white hover:text-[#E29734] transition-colors">
                        Biz bilan Boglanish
                    </a>
                </div>
            </header>
        </>
    );
}

export default NavigationBar;
