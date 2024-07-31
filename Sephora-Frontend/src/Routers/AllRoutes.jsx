import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import CartPage from "../pages/CartPage"
import PrivateRoutes from "./PrivateRoutes"
import Products from "../pages/Products"

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<PrivateRoutes><CartPage/></PrivateRoutes>}/>
        <Route path="/product" element={<Products/>}/>
    </Routes>
  )
}

export default AllRoutes