import { Route, Routes } from "react-router-dom"
import { AboutUs, Home } from "../page"


const Routeses = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
            </Routes>
        </>
    )
}

export default Routeses