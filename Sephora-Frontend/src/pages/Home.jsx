import { Box } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import Slider1 from "../components/HomePage/Slider1"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <Box>
        <Navbar/>
      
        <Slider1/>
       
      <Footer/>
    </Box>
  )
}

export default Home