import {
  Box,
  Flex,
  Img,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import {useNavigate} from 'react-router-dom'

const Navbar2 = () => {

  const  handleNavigation = useNavigate()

  const TextCreate = ({ text, fontWeight, category }) => {
    return (
      <Text
        _hover={{ textDecoration: "underline" }}
        fontWeight={fontWeight}
        fontSize={"14px"}
        onClick={()=>handleClick(category)}
      >
        {text}
      </Text>
    );
  };

  const handleClick = (elem)=>{
    const category = elem
    handleNavigation(`/products`)
    handleNavigation(
      `/products?category=${category.replace(" & ", "%20%26%20")}`
    );
    onclose()

  }

  return (
    <Box>
      <Flex
        display={["none", "none", "none", "flex"]}
        gap={"40px"}
        justifyContent={"center"}
        bgColor={"black"}
        p={"50px"}
        pt={"7px"}
        pb={"10px"}
      >
        <Popover trigger="hover">
          <PopoverTrigger>
            <Text
              color={"white"}
              cursor={"pointer"}
              fontWeight={600}
              fontSize={"14px"}
            >
              New
            </Text>
          </PopoverTrigger>
          <PopoverContent w={"100vw"}>
            <PopoverArrow />
            <PopoverBody>
              <SimpleGrid
                gridTemplateColumns={"repeat(2,1fr)"}
                spacing={"30px"}
                pt={"30px"}
                pr={"130px"}
                pl={"130px"}
                pb={"50px"}
              >
                <Flex gap={"40px"}>
                  <SimpleGrid
                    spacing={"12px"}
                    cursor={"pointer"}
                    fontSize={"14px"}
                    fontWeight={700}
                  >
                    <TextCreate text={"All New"} />
                    <TextCreate text={"Just Dropped"} />
                    <TextCreate text={"New Makeup"} />
                    <TextCreate text={"New Skincare"} />
                    <TextCreate text={"New Hair Care"} />
                    <TextCreate text={"New Fragrance"} />
                    <TextCreate text={"New Bath & Body"} />
                    <TextCreate text={"New Tools & Brushes"} />
                  </SimpleGrid>

                  <SimpleGrid
                    spacing={"12px"}
                    cursor={"pointer"}
                    fontSize={"14px"}
                    fontWeight={700}
                  >
                    <TextCreate text={"The Next Big Thing"} />
                    <TextCreate text={"Bestsellers"} />
                    <TextCreate text={"Trending on Social"} />
                    <TextCreate text={"Refillable Beauty Products"} />
                    <TextCreate text={"Buying Guides"} />
                    <TextCreate text={"Clean Beauty"} />
                    <TextCreate text={"Planet Aware Beauty"} />
                    <TextCreate text={"FSA & HSA Eligible"} />
                  </SimpleGrid>
                </Flex>
                <Flex gap={"30px"} cursor={"pointer"}>
                  <Box>
                    <Img src="https://www.sephora.com/contentimages/meganav/large/2024-july-hair-story-site-desktop-global-navigation-button-590x590-us-can-2053.jpg?imwidth=294" />
                  </Box>
                  <Box>
                    <Img src="https://www.sephora.com/contentimages/meganav/large/2024-7-11-hourglass-unreal-liquid-blush-site-desktop-global-navigation-button-en-us-can.jpg?imwidth=294" />
                  </Box>
                </Flex>
              </SimpleGrid>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover trigger="hover">
          <PopoverTrigger>
            <Text
              bgColor={"black"}
              color={"white"}
              cursor={"pointer"}
              fontWeight={600}
              fontSize={"14px"}
            >
              Brands
            </Text>
          </PopoverTrigger>
          <PopoverContent w={"100vw"}>
            <PopoverArrow />
            <PopoverBody>
              <SimpleGrid
                gridTemplateColumns={"repeat(5,1fr)"}
                spacing={"30px"}
                pt={"30px"}
                pr={"130px"}
                pl={"130px"}
                pb={"50px"}
                alignItems={"start"}
              >
                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    New Brands
                  </Text>
                  <SimpleGrid fontSize={"14px"} spacing={"5px"}>
                    <TextCreate text={"Fara Homidi"} />
                    <TextCreate text={"Chunks"} />
                    <TextCreate text={"Jean Paul Gaultier"} />
                    <TextCreate text={"BaBylissPRO"} />
                    <TextCreate text={"Iris&Romeo"} />
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Only At Sephora
                  </Text>
                  <SimpleGrid fontSize={"14px"} spacing={"5px"}>
                    <TextCreate text={"Rare Beauty by Selena Gomez"} />
                    <TextCreate text={"Kerastase"} />
                    <TextCreate text={"PHLUR"} />
                    <TextCreate text={"The INKEY List"} />
                    <TextCreate text={"Sale"} />
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Affordable Brands
                  </Text>
                  <SimpleGrid fontSize={"14px"} spacing={"5px"}>
                    <TextCreate text={"SEPHORA COLLECTION"} />
                    <TextCreate text={"The Ordinary"} />
                    <TextCreate text={"The Inkey List"} />
                    <TextCreate text={"Verb"} />
                  </SimpleGrid>
                </SimpleGrid>
                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Black-Owned Brands
                  </Text>
                  <SimpleGrid fontSize={"14px"} spacing={"5px"}>
                    <TextCreate text={"PATTERN By Tracee Ellis Ross"} />
                    <TextCreate text={"Hyper Skin"} />
                    <TextCreate text={"FENTY Fragrance"} />
                    <TextCreate text={"adwoa beauty"} />
                    <TextCreate text={"Melanin Haircare"} />
                    <TextCreate text={"BROWN GIRL Jane"} />
                    <TextCreate text={"Fashion Fair"} />
                    <TextCreate text={"Ami Cole"} />
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Clean at Sephora
                  </Text>
                  <SimpleGrid fontSize={"14px"} spacing={"5px"}>
                    <TextCreate text={"Living Proof"} />
                    <TextCreate text={"Tower 28 Beauty"} />
                    <TextCreate text={"Commodity"} />
                  </SimpleGrid>
                </SimpleGrid>
              </SimpleGrid>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover trigger="hover">
          <PopoverTrigger>
            <Text
              bgColor={"black"}
              color={"white"}
              cursor={"pointer"}
              fontWeight={600}
              fontSize={"14px"}
            >
              Makeup
            </Text>
          </PopoverTrigger>
          <PopoverContent w={"100vw"}>
            <PopoverArrow />
            <PopoverBody>
              <SimpleGrid
                gridTemplateColumns={"repeat(5,1fr)"}
                spacing={"30px"}
                pt={"30px"}
                pr={"130px"}
                pl={"130px"}
                pb={"50px"}
                alignItems={"start"}
              >
                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Face
                  </Text>
                  <SimpleGrid fontSize={"14px"} spacing={"5px"}>
                    <TextCreate text={"Foundation"} category={"Makeup"}/>
                    <TextCreate text={"BB & CC Cream"} category={"Makeup"}/>
                    <TextCreate text={"Tinted Moisturizer"} category={"Makeup"}/>
                    <TextCreate text={"Concealer"} category={"Makeup"}/>
                    <TextCreate text={"Face Primer"} category={"Makeup"}/>
                    <TextCreate text={"Setting Spray & Powder"} category={"Makeup"}/>
                    <TextCreate text={"Highlighter"} category={"Makeup"}/>
                    <TextCreate text={"Contour"} category={"Makeup"}/>
                    <TextCreate text={"Color Correct"} category={"Makeup"}/>
                    <TextCreate text={"Face Sets"} category={"Makeup"}/>
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <TextCreate text={"Eye"} fontWeight={700} category={"Makeup"}/>
                  <SimpleGrid fontSize={"14px"} spacing={"5px"}>
                    <TextCreate text={"Eye Palettes"} category={"Makeup"}/>
                    <TextCreate text={"Mascara"} category={"Makeup"}/>
                    <TextCreate text={"Eyeliner"} category={"Makeup"}/>
                    <TextCreate text={"Eyebrow"} category={"Makeup"}/>
                    <TextCreate text={"False Eyelashes"} category={"Makeup"}/>
                    <TextCreate text={"Eyeshadow"} category={"Makeup"}/>
                    <TextCreate text={"Eyelash Serums"} category={"Makeup"}/>
                    <TextCreate text={"Eyebrow Serums"} category={"Makeup"}/>
                    <TextCreate text={"Eye Primer"} category={"Makeup"}/>
                    <TextCreate text={"Eye Sets"} category={"Makeup"}/>
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <TextCreate text={"Lips"} fontWeight={700} category={"Makeup"}/>
                  <SimpleGrid fontSize={"14px"} spacing={"5px"}>
                    <TextCreate text={"Lip Gloss"} category={"Makeup"}/>
                    <TextCreate text={"Lipstick"} category={"Makeup"}/>
                    <TextCreate text={"Lip Oil"} category={"Makeup"}/>
                    <TextCreate text={"Lip Plumper"} category={"Makeup"}/>
                    <TextCreate text={"Lip Balms & Treatments"} category={"Makeup"}/>
                    <TextCreate text={"Liquid Lipstick"} category={"Makeup"}/>
                    <TextCreate text={"Lip Liner"} category={"Makeup"}/>
                    <TextCreate text={"Lip Stain"} category={"Makeup"}/>
                    <TextCreate text={"Lip Sets"} category={"Makeup"}/>
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <TextCreate text={"Cheek"} category={"Makeup"} fontWeight={700}/>
                  <SimpleGrid fontSize={"14px"} spacing={"5px"}>
                    <TextCreate text={"Blush"} category={"Makeup"}/>
                    <TextCreate text={"Bronzer"} category={"Makeup"}/>
                    <TextCreate text={"Highlighter"} category={"Makeup"}/>
                    <TextCreate text={"Contour"} category={"Makeup"}/>
                    <TextCreate text={"Cheek Palettes"} category={"Makeup"}/>
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <TextCreate text={"Help me to Choose"} category={"Makeup"} fontWeight={700}/>
                  <SimpleGrid fontSize={"14px"} spacing={"5px"}>
                    <TextCreate text={"Monochrome Makeup"} category={"Makeup"}/>
                    <TextCreate text={"Easy Eye Makeup"} category={"Makeup"}/>
                    <TextCreate text={"Guide To Foundations"} category={"Makeup"}/>
                    <TextCreate text={"Clean Makeup Guide"} category={"Makeup"}/>
                    <TextCreate text={"No Makeup Makeup"} category={"Makeup"}/>
                    <TextCreate text={"Super-Natural Sculpting"} category={"Makeup"}/>
                  </SimpleGrid>
                </SimpleGrid>
              </SimpleGrid>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Popover trigger="hover">
          <PopoverTrigger>
            <Text
              bgColor={"black"}
              color={"white"}
              fontWeight={600}
              fontSize={"14px"}
              cursor={"pointer"}
            >
              Skincare
            </Text>
          </PopoverTrigger>
          <PopoverContent w={"100vw"}>
            <PopoverArrow />
            <PopoverBody>
              <SimpleGrid
                gridTemplateColumns={"repeat(5,1fr)"}
                spacing={"30px"}
                pt={"30px"}
                pr={"130px"}
                pl={"130px"}
                pb={"50px"}
                alignItems={"start"}
              >
                <SimpleGrid spacing={"20px"}>
                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                   <TextCreate text={"Cleansers"} fontWeight={700} category={"Skincare"}/>
                    <SimpleGrid fontSize={"14px"} spacing={"5px"}>
                      <TextCreate text={"Face Wash & Cleansers"} category={"Skincare"}/>
                      <TextCreate text={"Exfoliators"} category={"Skincare"}/>
                      <TextCreate text={"Makeup Removers"} category={"Skincare"}/>
                      <TextCreate text={"Face Wipes"} category={"Skincare"}/>
                      <TextCreate text={"Toners"} category={"Skincare"}/>
                    </SimpleGrid>
                  </SimpleGrid>

                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                   <TextCreate text={' Moisturizers'} fontWeight={700} category={"Skincare"}/>
                    <SimpleGrid fontSize={"14px"} spacing={"5px"}>
                      <TextCreate text={"Night Creams"} category={"Skincare"}/>
                      <TextCreate text={"Face Oils"} category={"Skincare"}/>
                      <TextCreate text={"Mists & Essences"} category={"Skincare"}/>
                      <TextCreate text={"BB & CC Cream"} category={"Skincare"}/>
                    </SimpleGrid>
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid spacing={"20px"}>
                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <TextCreate text={"Treatments"} fontWeight={700} category={"Skincare"}/>
                    <SimpleGrid fontSize={"14px"} spacing={"5px"}>
                      <TextCreate text={"Face Serums"} category={"Skincare"}/>
                      <TextCreate text={"Acne & Blemish Treatments"} category={"Skincare"}/>
                      <TextCreate text={"Facial Peels"} category={"Skincare"}/>
                    </SimpleGrid>
                  </SimpleGrid>

                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                   <TextCreate text={'Masks'} fontWeight={700} category={"Skincare"}/>
                    <SimpleGrid fontSize={"14px"} spacing={"5px"}>
                      <TextCreate text={"Face Masks"} category={"Skincare"}/>
                      <TextCreate text={"Sheet Masks"} category={"Skincare"}/>
                      <TextCreate text={"Eye Masks"} category={"Skincare"}/>
                    </SimpleGrid>
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid spacing={"20px"}>
                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                   <TextCreate text={"Eye Care"} fontWeight={700} category={"Skincare"}/>
                    <SimpleGrid fontSize={"14px"} spacing={"5px"}>
                      <TextCreate text={"Eye Creams & Treatments"} category={"Skincare"}/>
                      <TextCreate text={"Eye Masks"} category={"Skincare"}/>
                    </SimpleGrid>
                  </SimpleGrid>

                 <TextCreate text={'Lip Balms & Treatments'} fontWeight={700} category={"Skincare"}/>
                </SimpleGrid>

                <SimpleGrid spacing={"20px"}>
                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <TextCreate text={"Sunscreen"} fontWeight={700} category={"Skincare"}/>
                    <SimpleGrid fontSize={"14px"} spacing={"5px"}>
                      <TextCreate text={"Face Sunscreen"} category={"Skincare"}/>
                      <TextCreate text={"Body Sunscreen"} category={"Skincare"}/>
                    </SimpleGrid>
                  </SimpleGrid>

                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <TextCreate text={"Wellness"} fontWeight={700} category={"Skincare"}/>
                    <SimpleGrid fontSize={"14px"} spacing={"5px"}>
                      <TextCreate text={"Supplements"} category={"Skincare"}/>
                      <TextCreate text={"Feminine Care"} category={"Skincare"}/>
                    </SimpleGrid>
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  
                  <TextCreate text={'Shop By Concern'} fontWeight={700} category={"Skincare"}/>
                  <SimpleGrid fontSize={"14px"} spacing={"5px"}>
                    <TextCreate text={"Acne & Blemishes"} category={"Skincare"}/>
                    <TextCreate text={"Anti-Aging"} category={"Skincare"}/>
                    <TextCreate text={"Dark Spots"} category={"Skincare"}/>
                    <TextCreate text={"Pores"} category={"Skincare"}/>
                    <TextCreate text={"Dryness"} category={"Skincare"}/>
                    <TextCreate text={"Fine Lines & Wrinkles"} category={"Skincare"}/>
                    <TextCreate text={"Dullness"} category={"Skincare"}/>
                  </SimpleGrid>
                </SimpleGrid>
              </SimpleGrid>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Popover trigger="hover">
          <PopoverTrigger>
            <Text
              bgColor={"black"}
              color={"white"}
              cursor={"pointer"}
              fontWeight={600}
              fontSize={"14px"}
            >
              Hair
            </Text>
          </PopoverTrigger>
          <PopoverContent w={"100vw"}>
            <PopoverArrow />
            <PopoverBody>
              <SimpleGrid
                gridTemplateColumns={"repeat(5,1fr)"}
                spacing={"30px"}
                pt={"30px"}
                pr={"130px"}
                pl={"130px"}
                pb={"50px"}
                alignItems={"start"}
              >
                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <TextCreate text={"Shampoo & Conditioner"} fontWeight={700} category={"Hair"} />
                  <SimpleGrid fontSize={"14px"} spacing={"5px"}>
                    <TextCreate text={"Shampoo"} category={"Hair"} />
                    <TextCreate text={"Conditioner"} category={"Hair"} />
                    <TextCreate text={"Scalp Scrub"} category={"Hair"}/>
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <TextCreate text={"Treatments"} fontWeight={700} category={"Hair"}/>
                  <SimpleGrid fontSize={"14px"} spacing={"5px"}>
                    <TextCreate text={"Hair Masks"} category={"Hair"}/>
                    <TextCreate text={"Leave-in Conditioner"} category={"Hair"}/>
                    <TextCreate text={"Hair Oil"} category={"Hair"}/>
                    <TextCreate text={"Hair Serums"} category={"Hair"}/>
                    <TextCreate text={"Scalp Treatments"} category={"Hair"}/>
                    <TextCreate text={"Hair Supplements"} category={"Hair"}/>
                    <TextCreate text={"Hair Thinning & Hair Loss"} category={"Hair"}/>
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <TextCreate text={"Styling"} fontWeight={700} category={"Hair"}/>
                  <SimpleGrid fontSize={"14px"} spacing={"5px"}>
                    <TextCreate text={"Styling Creams & Sprays"} category={"Hair"}/>
                    <TextCreate text={"Dry Shampoo"} category={"Hair"}/>
                    <TextCreate text={"Hair Primers & Heat Protectants"} category={"Hair"}/>
                    <TextCreate text={"Hair Spray"} category={"Hair"}/>
                    <TextCreate text={"Mousse & Foam"} category={"Hair"}/>
                    <TextCreate text={"Gel, Pomade & Wax"} category={"Hair"}/>
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <TextCreate text={"Hair Styling Tools"} fontWeight={700} category={"Hair"}/>
                  <SimpleGrid fontSize={"14px"} spacing={"5px"}>
                    <TextCreate text={"Hair Dryers"} category={"Hair"}/>
                    <TextCreate text={"Hair Straighteners & Flat Irons"} category={"Hair"}/>
                    <TextCreate text={"Blow Dry Brushes"} category={"Hair"}/>
                    <TextCreate text={"Curling Irons"} category={"Hair"}/>
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid spacing={"20px"}>
                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <TextCreate text={"Shop by Concern"} fontWeight={700} category={"Hair"}/>
                    <SimpleGrid fontSize={"14px"} spacing={"5px"}>
                      <TextCreate text={"Damaged Hair"} category={"Hair"}/>
                      <TextCreate text={"Dryness"} category={"Hair"}/>
                      <TextCreate text={"Frizz"} category={"Hair"}/>
                      <TextCreate text={"Scalp Care"} category={"Hair"}/>
                      <TextCreate text={"Volume"} category={"Hair"}/>
                      <TextCreate text={"Color Care"} category={"Hair"}/>
                    </SimpleGrid>
                  </SimpleGrid>

                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <TextCreate text={"Shop by Style"} fontWeight={700} category={"Hair"}/>
                    <SimpleGrid fontSize={"14px"} spacing={"5px"}>
                      <TextCreate text={"Volume & Texture"} category={"Hair"}/>
                      <TextCreate text={"Smooth & Sleek"} category={"Hair"}/>
                      <TextCreate text={"Curl Enhancing"} category={"Hair"}/>
                    </SimpleGrid>
                  </SimpleGrid>
                </SimpleGrid>
              </SimpleGrid>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover trigger="hover">
          <PopoverTrigger>
            <Text
              bgColor={"black"}
              color={"white"}
              cursor={"pointer"}
              fontWeight={600}
              fontSize={"14px"}
            >
              Fragrance
            </Text>
          </PopoverTrigger>
          <PopoverContent w={"100vw"}>
            <PopoverArrow />
            <PopoverBody>
              <SimpleGrid
                gridTemplateColumns={"repeat(5,1fr)"}
                spacing={"30px"}
                pt={"30px"}
                pr={"130px"}
                pl={"130px"}
                pb={"50px"}
                alignItems={"start"}
              >
                <SimpleGrid spacing={"20px"}>
                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <TextCreate text={"Women"} fontWeight={700} category={"Makeup"}/>
                    <TextCreate text={"Perfume"} category={"Makeup"}/>
                    <TextCreate text={"Perfume Oils"} category={"Makeup"}/>
                    <TextCreate text={"Rollerballs & Travel Size"} category={"Makeup"}/>
                    <TextCreate text={"Body Mist & Hair Mist"} category={"Makeup"}/>
                  </SimpleGrid>

                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <TextCreate text={"Men"} fontWeight={700} category={"Makeup"}/>
                    <TextCreate text={"Cologne"} category={"Makeup"}/>
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <TextCreate text={"Value & Gift Sets"} fontWeight={700} category={"Makeup"}/>
                  <TextCreate text={"Perfume Gift Sets"} category={"Makeup"}/>
                  <TextCreate text={"Cologne Gift Sets"} category={"Makeup"}/>
                  <TextCreate text={"Home Gift Sets"} category={"Makeup"}/>
                  <TextCreate text={"Sephora Favorites"} category={"Makeup"}/>
                </SimpleGrid>

                <SimpleGrid spacing={"20px"}>
                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <TextCreate
                      text={"Candles & Home Scents"}
                      fontWeight={700}
                      category={"Bath And Body"}
                    />
                    <TextCreate text={"Candles"} category={"Bath And Body"}/>
                    <TextCreate text={"Diffusers"} category={"Bath And Body"}/>
                  </SimpleGrid>

                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <TextCreate
                      text={"Shop by Fragrance Family"}
                      fontWeight={700}
                      category={"Bath And Body"}
                    />
                    <TextCreate text={"Floral"} category={"Bath And Body"}/>
                    <TextCreate text={"Warm & Spicy"} category={"Bath And Body"}/>
                    <TextCreate text={"Fresh"} category={"Bath And Body"} />
                    <TextCreate text={"Earthy & Woody"} category={"Bath And Body"}/>
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <TextCreate text={"New"} fontWeight={700} category={"Bath And Body"}/>
                  <TextCreate text={"Bestsellers"} fontWeight={700} category={"Bath And Body"}/>
                  <TextCreate text={"Clean Fragrance"} fontWeight={700} category={"Bath And Body"}/>
                  <TextCreate text={"Vegan Fragrance"} fontWeight={700} category={"Bath And Body"}/>
                  <TextCreate text={"Mini Size"} fontWeight={700} category={"Bath And Body"}/>
                  <TextCreate text={"Value Size"} fontWeight={700} category={"Bath And Body"}/>
                  <TextCreate text={"Refillable Fragrance"} fontWeight={700} category={"Bath And Body"}/>
                  <TextCreate text={"Luxury Fragrance"} fontWeight={700} category={"Bath And Body"}/>
                  <TextCreate
                    text={"Black-Owned Brands Fragrance"}
                    fontWeight={700}
                    category={"Bath And Body"}
                  />
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <TextCreate text={"Help Me Choose"} fontWeight={700} category={"Bath And Body"}/>
                  <TextCreate text={"The New & Now Fragrance Edit"} category={"Bath And Body"}/>
                  <TextCreate text={"Clean Fragrance Guide"} category={"Bath And Body"}/>
                  <TextCreate text={"Fragrance Guide"} category={"Bath And Body"}/>
                  <TextCreate text={"Fragrance Notes Guide"} category={"Bath And Body"}/>
                  <TextCreate text={"Best Affordable Fragrance"} category={"Bath And Body"}/>
                  <TextCreate text={"Niche Fragrances"} category={"Bath And Body"}/>
                  <TextCreate text={"Next Big Thing"} category={"Bath And Body"}/>
                </SimpleGrid>
              </SimpleGrid>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Popover trigger="hover">
          <PopoverTrigger>
            <Text
              bgColor={"black"}
              color={"white"}
              cursor={"pointer"}
              fontWeight={600}
              fontSize={"14px"}
            >
              Tools & Brushes
            </Text>
          </PopoverTrigger>
          <PopoverContent w={"100vw"}>
            <PopoverArrow />
            <PopoverBody>
              <SimpleGrid
                gridTemplateColumns={"repeat(5,1fr)"}
                spacing={"30px"}
                pt={"30px"}
                pr={"130px"}
                pl={"130px"}
                pb={"50px"}
                alignItems={"start"}
              >
                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <TextCreate text={"Brushes & Applicators"} fontWeight={700} />
                  <TextCreate text={"Brush Sets"} />
                  <TextCreate text={"Face Brushes"} />
                  <TextCreate text={"Eye Brushes"} />
                  <TextCreate text={"Lip Brushes"} />
                  <TextCreate text={"Sponges & Applicators"} />
                  <TextCreate text={"Brush Cleaners"} />
                  <TextCreate text={"Facial Cleansing Brushes"} />
                </SimpleGrid>

                <SimpleGrid spacing={"20px"}>
                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <TextCreate text={"Hair Styling Tools"} fontWeight={700} />
                    <TextCreate text={"Hair Dryers"} />
                    <TextCreate text={"Straighteners & Flat Irons"} />
                    <TextCreate text={"Curling Irons"} />
                  </SimpleGrid>

                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <TextCreate text={"Wellness"} fontWeight={700} />
                    <TextCreate text={"Wellness Tools & Devices"} />
                    <TextCreate text={"Vibrators"} />
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <TextCreate text={"Beauty Tools"} fontWeight={700} />
                  <TextCreate text={"Anti-Aging"} />
                  <TextCreate text={"Hair Removal"} />
                  <TextCreate text={"Tweezers & Eyebrows"} />
                  <TextCreate text={"Manicure & Pedicure"} />
                  <TextCreate text={"Eyelash Curlers"} />
                  <TextCreate text={"Sharpeners"} />
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <TextCreate text={"Makeup & Travel Cases"} fontWeight={700} />
                  <TextCreate text={"Value & Gift Sets"} fontWeight={700} />
                  <TextCreate text={"New"} fontWeight={700} />
                  <TextCreate text={"Bestsellers"} fontWeight={700} />
                  <TextCreate
                    text={"Black-Owned Brands Tools & Brushes"}
                    fontWeight={700}
                  />
                </SimpleGrid>

                <Box cursor={"pointer"}>
                  <Img src="https://www.sephora.com/contentimages/meganav/large/2023-8-7-sc-sku-site-desktop-global-navigation-button-en-us.jpg?imwidth=294" />
                </Box>
              </SimpleGrid>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Popover trigger="hover">
          <PopoverTrigger>
            <Text
              bgColor={"black"}
              color={"white"}
              fontWeight={600}
              fontSize={"14px"}
              cursor={"pointer"}
            >
              Bath & Body
            </Text>
          </PopoverTrigger>
          <PopoverContent w={"100vw"}>
            <PopoverArrow />
            <PopoverBody>
              <SimpleGrid
                gridTemplateColumns={"repeat(6,1fr)"}
                spacing={"30px"}
                pt={"30px"}
                pr={"130px"}
                pl={"130px"}
                pb={"50px"}
                alignItems={"start"}
              >
                <SimpleGrid spacing={"20px"}>
                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <TextCreate text={"Bath & Shower"} fontWeight={700} />
                    <TextCreate text={"Body Wash & Shower Gel"} />
                    <TextCreate text={"Scrubs & Exfoliants"} />
                    <TextCreate text={"Bath Soaks & Bubble Bath"} />
                    <TextCreate text={"Hand Sanitizer & Hand Soap"} />
                  </SimpleGrid>

                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <TextCreate text={"Body Moisturizers"} fontWeight={700} />
                    <TextCreate text={"Body Lotions & Body Oils"} />
                    <TextCreate text={"Hand Cream & Foot Cream"} />
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid spacing={"20px"}>
                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <TextCreate text={"Sunscreen"} fontWeight={700} />
                    <TextCreate text={"Face Sunscreen"} />
                    <TextCreate text={"Body Sunscreen"} />
                  </SimpleGrid>

                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <TextCreate text={"Wellness"} fontWeight={700} />
                    <TextCreate text={"Supplements"} />
                    <TextCreate text={"Intimate Care & Vibrators"} />
                    <TextCreate text={"Feminine Care"} />
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <TextCreate text={"Shop By Concern"} fontWeight={700} />
                  <TextCreate text={"Stretch Marks & Firming"} />
                  <TextCreate text={"Dryness / Dry Skin"} />
                  <TextCreate text={"Smooth Texture"} />
                  <TextCreate text={"Even Skin Tone & Color Correction"} />
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <TextCreate text={"New"} fontWeight={700} />
                  <TextCreate text={"Bestsellers"} fontWeight={700} />
                  <TextCreate text={"Mini Size"} fontWeight={700} />
                  <TextCreate text={"Value Size"} fontWeight={700} />
                  <TextCreate text={"Value & Gift Sets"} fontWeight={700} />
                  <TextCreate text={"Sephora Collection"} fontWeight={700} />
                  <TextCreate
                    text={"Black-Owned Brands Bath & Body"}
                    fontWeight={700}
                  />
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <TextCreate text={"Help Me Choose"} fontWeight={700} />
                  <TextCreate text={"The Joy of Body Care"} />
                  <TextCreate text={"The Best Skincare Is Sunscreen"} />
                </SimpleGrid>

                <Box cursor={"pointer"}>
                  <Img src="https://www.sephora.com/contentimages/meganav/large/2024-07-11-july-body-mbc-site-desktop-universal-navigation-button-us-can-confirmation-release.jpg?imwidth=294" />
                </Box>
              </SimpleGrid>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover trigger="hover">
          <PopoverTrigger>
            <Text
              bgColor={"black"}
              color={"white"}
              cursor={"pointer"}
              fontWeight={600}
              fontSize={"14px"}
            >
              Mini Size
            </Text>
          </PopoverTrigger>
          <PopoverContent w={"100vw"}>
            <PopoverArrow />
            <PopoverBody>
              <SimpleGrid
                gridTemplateColumns={"repeat(2,1fr)"}
                spacing={"30px"}
                pt={"30px"}
                pr={"130px"}
                pl={"130px"}
                pb={"50px"}
                alignItems={"start"}
              >
                <SimpleGrid
                  spacing={"20px"}
                  gridTemplateColumns={"repeat(2,1fr)"}
                  justifyContent={"left"}
                >
                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <TextCreate text={"All Mini Size"} fontWeight={700} />
                    <TextCreate text={"Makeup"} fontWeight={700} />
                    <TextCreate text={"Skincare"} fontWeight={700} />
                    <TextCreate text={"Hair"} fontWeight={700} />
                    <TextCreate text={"Fragrance"} fontWeight={700} />
                    <TextCreate text={"Bath & Body"} fontWeight={700} />
                  </SimpleGrid>

                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <TextCreate text={"Value & Gift Sets"} fontWeight={700} />
                    <TextCreate text={"$15 and Under"} fontWeight={700} />
                    <TextCreate text={"$25 and Under"} fontWeight={700} />
                    <TextCreate text={"$35 and Under"} fontWeight={700} />
                    <TextCreate text={"Sephora Favorites"} fontWeight={700} />
                    <TextCreate text={"Luxe Minis"} fontWeight={700} />
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid
                  gridTemplateColumns={"repeat(2,1fr)"}
                  spacing={"20px"}
                >
                  <Box cursor={"pointer"}>
                    <Img src="https://www.sephora.com/contentimages/meganav/large/2020-07-29-site-global-navigation-button-evergreen-crossworld-minis.jpg?imwidth=294" />
                  </Box>
                  <Box cursor={"pointer"}>
                    <Img src="https://www.sephora.com/contentimages/meganav/large/2020-12-23-site-dt-botnav-seph-coll-US.jpg?imwidth=294" />
                  </Box>
                </SimpleGrid>
              </SimpleGrid>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Popover trigger="hover">
          <PopoverTrigger>
            <Text
              bgColor={"black"}
              color={"white"}
              cursor={"pointer"}
              fontWeight={600}
              fontSize={"14px"}
            >
              Gifts & Gift Cards
            </Text>
          </PopoverTrigger>
          <PopoverContent w={"100vw"}>
            <PopoverArrow />
            <PopoverBody>
              <SimpleGrid
                gridTemplateColumns={"repeat(5,1fr)"}
                spacing={"30px"}
                pt={"30px"}
                pr={"130px"}
                pl={"130px"}
                pb={"50px"}
                alignItems={"start"}
              >
                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <TextCreate text={"By Price"} fontWeight={700} />
                  <TextCreate text={"$10 and under"} />
                  <TextCreate text={"$15 and under"} />
                  <TextCreate text={"$25 and under"} />
                  <TextCreate text={"$50 and under"} />
                  <TextCreate text={"$75 and under"} />
                  <TextCreate text={"$100 and under"} />
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <TextCreate text={"By Category"} fontWeight={700} />
                  <TextCreate text={"Makeup"} />
                  <TextCreate text={"Skincare"} />
                  <TextCreate text={"Hair"} />
                  <TextCreate text={"Fragrance"} />
                  <TextCreate text={"Candles & Home Scents"} />
                  <TextCreate text={"Tools"} />
                  <TextCreate text={"Brush Sets & Accessories"} />
                  <TextCreate text={"Bath & Body"} />
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <TextCreate text={"By Recipient"} fontWeight={700} />
                  <TextCreate text={"For Her"} />
                  <TextCreate text={"For Mom"} />
                  <TextCreate text={"For Him"} />
                  <TextCreate text={"For Them"} />
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <TextCreate text={"Top Rated Gifts"} fontWeight={700} />
                  <TextCreate text={"Mini Size"} fontWeight={700} />
                  <TextCreate text={"Only at Sephora"} fontWeight={700} />
                  <TextCreate text={"Luxury Gifts"} fontWeight={700} />
                  <TextCreate text={"The Luxury Guide"} fontWeight={700} />
                </SimpleGrid>

                <Box>
                  <Img src="https://www.sephora.com/contentimages/meganav/large/site-desktop-global-navigation-button-evergreen-gift-card.jpg?imwidth=294" />
                </Box>
              </SimpleGrid>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Text
          bgColor={"black"}
          color={"white"}
          fontWeight={600}
          fontSize={"14px"}
          cursor={"pointer"}
        >
          Beauty Under $20
        </Text>

        <Text
          bgColor={"black"}
          color={"white"}
          cursor={"pointer"}
          fontWeight={600}
          fontSize={"14px"}
        >
          Sale & Offers
        </Text>
      </Flex>
    </Box>
  );
};

export default Navbar2;
