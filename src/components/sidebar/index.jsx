import { IoMdHome, IoMdContact } from "react-icons/io";
import { GoProject } from "react-icons/go";
import { MdMiscellaneousServices } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <>
            <div className="absolute top-5 left-5 z-50 block lg:hidden">
                <button onClick={toggleSidebar}>
                    <GiHamburgerMenu fontSize={30} />
                </button>
            </div>

            <div className={`absolute lg:relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
                <div className="mb-2 p-4 pt-10 lg:pt-4">
                    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">Admin Panel</h5>
                </div>
                <nav className="flex flex-col gap-5 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
                    <div role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                        <div className="grid place-items-center mr-4">
                            <IoMdHome className="text-gray-700" fontSize={20} />
                        </div>
                        Bosh sahifa
                    </div>
                    <div role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                        <div className="grid place-items-center mr-4">
                            <GoProject className="text-gray-700" fontSize={20} />
                        </div>
                        Loyihamiz haqida
                    </div>
                    <div role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                        <div className="grid place-items-center mr-4">
                            <MdMiscellaneousServices className="text-gray-700" fontSize={20} />
                        </div>
                        Xizmatlar
                    </div>
                    <div role="button" tabIndex="0" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                        <div className="grid place-items-center mr-4">
                            <IoMdContact className="text-gray-700" fontSize={20} />
                        </div>
                        Contact
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Sidebar