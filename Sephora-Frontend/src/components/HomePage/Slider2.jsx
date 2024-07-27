import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Slider from "react-slick";



const Slider2 = () => {

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




      let arr = [
        {  
            title:' Summer Fridays',
            image:'https://www.sephora.com/productimages/sku/s2495497-main-zoom.jpg?imwidth=166',
            price:'$24.00',
            description:'Lip Butter Balm for Hydration & Shine'
        },
        {
            title:'Fenty Beauty',
            image:'https://www.sephora.com/productimages/sku/s2787497-main-zoom.jpg?imwidth=122',
            price:'$25.00',
            description:'Gloss Bomb Stix...'
        },
        {
            title:'dae',
            image:'https://www.sephora.com/productimages/sku/s2788925-main-zoom.jpg?imwidth=122',
            price:'$18.00',
            description:'Cactus Fruit 3-in-1...'
        },
        {
            title:'The Ordinary',
            image:'https://www.sephora.com/productimages/sku/s2031391-main-zoom.jpg?imwidth=122',
            price:'$10.80',
            description:'Niacinamide 10% + Zinc 1%..'
        },
        {
            title:'Sephora Favorites',
            image:'https://www.sephora.com/productimages/sku/s2784940-main-zoom.jpg?imwidth=122',
            price:'$42.00',
            description:'Its Giving Lip Value Set'
        },
        {
            title:'Rare Beauty by Sel..',
            image:'https://www.sephora.com/productimages/sku/s2792489-main-zoom.jpg?imwidth=122',
            price:'$14.00',
            description:'Mini Soft Pinch...'
        },
        {
            title:'ONE/SIZE by Patri..',
            image:'https://www.sephora.com/productimages/sku/s2490704-main-zoom.jpg?imwidth=122',
            price:'$17.00',
            description:"Mini On 'Til Dawn Mat....'"
        },
        {
            title:'Touchland',
            image:'https://www.sephora.com/productimages/sku/s2556744-main-zoom.jpg?imwidth=122',
            price:'$10.00',
            description:'Power Mist Hydrating..'
        },
        {
            title:'OLEHENRIKSEN',
            image:'https://www.sephora.com/productimages/sku/s2648467-main-zoom.jpg?imwidth=122',
            price:'$22',
            description:''
        },
        {
            title:'PATRICK TA',
            image:'https://www.sephora.com/productimages/sku/s2742567-main-zoom.jpg?imwidth=122',
            price:'$38.00',
            description:'Major Headlines Double....'
        }
      ]
    



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
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              nextArrow: false,
              prevArrow: false,
            },
          },
        ],
      };
    

  return (
    <Box p={["7", "7", "10", "20"]} pt={[5, 5, 5, 5]} pb={[10, 10, 10, 10]}>
      <Text fontWeight={400} fontSize={"30px"} mb={3} textAlign={"center"}>
        Selected For You
      </Text>

      <Slider {...settings}>
        {arr.map((elem, i) => (
          <SimpleGrid key={i} cursor={"pointer"} p={5}>
            <Box mb={3}>
              <img src={elem.image} alt="slider" />
            </Box>
            <Text fontSize={"24px"} fontWeight={400}>
              {elem.Price}
            </Text>
            <Text
              fontSize={"16px"}
              fontWeight={400}
              color={"rgb(0, 96, 169)"}
              _hover={{ textDecoration: "underline solid rgb(0,96,169)" }}
            >
              {elem.title}
            </Text>
          </SimpleGrid>
        ))}
      </Slider>
    </Box>
  )
}

export default Slider2