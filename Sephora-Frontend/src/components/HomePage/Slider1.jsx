import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Img, SimpleGrid, Text } from "@chakra-ui/react";

const Slider1 = () => {
   
        var settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 2,
          autoplay: true,  
        autoplaySpeed: 2000, 
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                
              }
            },
            {
              breakpoint: 940,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };

        let slides = [
            {
              img: "https://www.sephora.com/contentimages/2024-july-body-mbc-site-home-page-RWD-hero-banner-treat-us-release.jpg?imwidth=545",
              title: "Targeted Body Care for Happy Skin",
              description:
                "Formulas that work hard and feel amazing—this is the joy of body care.",
              bg: "#ECB7D3",
              clr: "black",
            },
            {
              img: "https://www.sephora.com/contentimages/2024-7-25-kiehls-since-1851-spf-site-desktop-home-page-rwd-hero-banner-1200x800-en-us.jpg?imwidth=545",
              title: "Kiehl's Since 1851 Auto-Tone Treatment SPF 30",
              description: "Target dark spots and protect against sun damage.",
              bg: "#ABCF41",
              clr: "black",
            },
            {
              img: "https://www.sephora.com/contentimages/homepage/050124/2024-july-hair-story-site-home-page-RWD-hero-banner-air-dry-us-can-release-image-only-2000x2000.jpeg?imwidth=545",
              title: "For Air-Dried Texture",
              description: "Achieve the tousled look of your summer-hair dreams.",
              bg: "#FFD670",
              clr: "black",
            },
            {
              img: "https://www.sephora.com/contentimages/2024-7-22-paulas-choice-site-desktop-home-page-rwd-hero-banner-1200x800-en-us.jpg?imwidth=545",
              title: "New from Paula's Choice",
              description:
                "Get smoother-looking skin with this dual-retinoid that delivers pro-level results at home.",
              bg: "#843D83",
              clr: "white",
            },
            {
              img: "https://www.sephora.com/contentimages/2024-7-20-rare-beauty-true-to-myself-tinted-powder-site-home-page-rwd-hero-banner-1200x800-en-us-can.jpg?imwidth=545",
              title: "New from Rare Beauty",
              description:
                "Blur, smooth, and set with the True to Myself Tinted Pressed Finishing Powder.",
              bg: "#6A3734",
              clr: "white",
            },
            {
              img: "https://www.sephora.com/contentimages/2024-07-14-slotting-just-arrived-v4-standard-site-rwd-home-page-hero-banner-english-US-CAN-handoff_01.jpg?imwidth=545",
              title: "This Just In",
              description: "The latest beauty from the hottest brands.",
              bg: "#CAB5DC",
              clr: "black",
            },
          ]; 
        return (
            <Box className="slider-container">
              <Slider {...settings}>
               
              {slides.map((elem, i) => (

<SimpleGrid  color={elem.clr} key={i} cursor={"pointer"} p={'10px'}>
<Box><Img src={elem.img}/></Box>
<Box p={'20px'} textAlign={"left"} bgColor={elem.bg} h={'150px'}>
  <Text fontWeight={700} fontSize={'20px'}>{elem.title}</Text>
  <Text fontSize={'14px'} _hover={{textDecoration:"underline"}} mb={'5px'}>{elem.description}</Text>
  <Text fontSize={'14px'}  fontWeight={700}>SHOP NOW ▸</Text>
</Box>
</SimpleGrid>
))} 

              </Slider>
            </Box>
          );
}

export default Slider1