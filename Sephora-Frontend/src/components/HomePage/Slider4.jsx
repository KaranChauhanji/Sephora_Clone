import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import slides from "../../Utils/Homepage/Slider4";

const Slider4 = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{
              ...style,
              display: "block",
              background: "grey",
              borderRadius: "100px",
            }}
            onClick={onClick}
          />
        );
      }
    
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, background: "grey", borderRadius: "100px" }}
            onClick={onClick}
          />
        );
      }
    
      const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 940,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              nextArrow: false,
              prevArrow: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
              nextArrow: false,
              prevArrow: false,
            },
          },
        ],
      };
    
      return (
        <Box p={["2", "7", "10", "40"]} pt={[5, 5, 5, 5]} pb={[10, 10, 10, 10]}>
          <Text fontWeight={650} fontSize={"21px"}>
            New Arrivals
          </Text>
    
          <Slider {...settings}>
            {slides.map((elem, i) => (
              <SimpleGrid key={i} cursor={"pointer"} padding={"10px"}>
                <SimpleGrid
                  boxShadow={"base"}
                  transition={"all .5s ease"} h={'500px'}
                  _hover={{ transform: "translateY(-5px)" }} >
                  <Box mb={"10px"} w={'100%'}>
                    <img src={elem.image} alt="slider" width={"100%"} />
                  </Box>
    
    <Box px={'20px'} pb={['10px','10px','20px',"30px"]}>

                  <Text fontSize={"16px"} fontWeight={700} mb={'5px'}>
                    {elem.title}
                  </Text>
                  <Text fontSize={"15px"} fontWeight={600} mb={'10px'}>
                    {elem.title2}
                  </Text>
                  <Text fontWeight={400} fontSize={"11px"} mb={'20px'}>
                    {elem.description}
                  </Text>

                  <Flex>
                    <Button border={'1px solid black'} bgColor={"white"} color={"black"} borderRadius={'20px'}>Apply</Button>
                  </Flex>
    </Box>
                </SimpleGrid>
              </SimpleGrid>
            ))}
          </Slider>
        </Box>
      );
}

export default Slider4