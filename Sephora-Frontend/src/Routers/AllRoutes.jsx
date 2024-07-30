import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import CartPage from "../pages/CartPage"
import PrivateRoutes from "./PrivateRoutes"

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<PrivateRoutes><CartPage/></PrivateRoutes>}/>
    </Routes>
  )
}

export default AllRoutes