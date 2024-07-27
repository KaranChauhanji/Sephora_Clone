import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Slider1 from "../components/HomePage/Slider1";
import Footer from "../components/Footer";
import Slider2 from "../components/HomePage/Slider2";

const Home = () => {
  return (
    <Box>
      <Navbar />

      <Slider1 />
      <Slider2/>

      <Footer />
    </Box>
  );
};

export default Home;
