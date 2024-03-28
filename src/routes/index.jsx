import { Route, Routes } from "react-router-dom"
import { AboutUs, Admin, Home, HomeAdmin } from "../page"


const Routeses = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/admin" element={<Admin />} />
                
                <Route path='/admin/home' element={<HomeAdmin />} />
            </Routes>
        </>
    )
}

export default Routeses