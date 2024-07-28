import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Img,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { BiBell, BiCurrentLocation, BiMessage } from "react-icons/bi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { PiBasketLight } from "react-icons/pi";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
      {/* *-----------------------------Header 1---------------------------* */}

      <Box
        textAlign={"center"}
        p={["5px", "5px", "18px", "18px"]}
        bgColor={"#C0DCF1"}
        fontSize={"14px"}
        fontWeight={700}
        _hover={{ textDecoration: "underline" }}
        cursor={"pointer"}
      >
        Don't miss out!{" "}
        <span style={{ fontWeight: "400" }}>
          {" "}
          So many deals, trial sizes, sample sets and more.
        </span>{" "}
        Shop Beauty Offers
      </Box>

      {/* *--------------------------------Navbar 1 ----------------------------* */}

      <SimpleGrid
        gridTemplateColumns={[
          ".8fr 1fr .7fr",
          ".8fr 1fr .7fr",
          "1fr 2fr 1fr",
          "1fr 1fr 2fr .5fr",
        ]}
        p={["0", "0px", "20px", "30px"]}
        pt={["10px", "10px", "20px", "30px"]}
        pb={["10px", "10px", "20px", "30px"]}
        alignItems={"center"}
        justifyContent={"center"}
        m={"auto"}
        gap={["5px", "5px", "40px", "20px"]}
      >
        <Link to={'/'}>
        <Text
          fontWeight={600}
          fontSize={["14px", "20px", "24px", "24px"]}
          textAlign={["center", "center", "right", "right"]}
          >
          S E P H O R A
        </Text>
          </Link>
        <Box>
          <Input placeholder="Search" fontWeight={550} borderRadius={"20px"} />
        </Box>
        <Flex
          gap={"40px"}
          alignItems={"center"}
          display={["none", "none", "none", "flex"]}
        >
          <Popover trigger="hover">
            <PopoverTrigger>
              <Button
                bgColor={"white"}
                borderRadius={"none"}
                _hover={{ bgColor: "white", borderBottom: "2px solid #333" }}
              >
                <Flex fontSize={"3xl"} alignItems={"center"} gap={"10px"}>
                  <HiOutlineBuildingStorefront />{" "}
                  <Text fontSize={"14px"}>
                    Stores & Services{" "}
                    <Text fontSize={"10px"}>Choose Your Store</Text>
                  </Text>
                </Flex>
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader textAlign={"center"} p={"18px"}>
                <Button bgColor={"black"} color={"white"} borderRadius={"20px"}>
                  Choose Your Store
                </Button>
              </PopoverHeader>
              <PopoverBody>
                <Flex
                  alignItems={"center"}
                  gap={"7px"}
                  cursor={"pointer"}
                  pt={"12px"}
                  pb={"12px"}
                >
                  <BiCurrentLocation />
                  <Text
                    fontSize={"14px"}
                    fontWeight={600}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Find a Sephora
                  </Text>
                </Flex>
                <Divider />
                <SimpleGrid spacing={"17px"} pt={"12px"} pb={"12px"}>
                  <Flex alignItems={"center"} gap={"10px"}>
                    <Box>
                      <Img src="https://www.sephora.com/contentimages/happening/flyoutmenu_makeup.svg" />
                    </Box>
                    <Text>
                      Makeup Services
                      <Text fontSize={"10px"} color={"grey"}>
                        One-on-one makeup application or beauty lesson
                      </Text>
                    </Text>
                  </Flex>

                  <Flex alignItems={"center"} gap={"10px"}>
                    <Box>
                      <Img src="https://www.sephora.com/contentimages/happening/flyoutmenu_skincare.svg" />
                    </Box>
                    <Text>
                      Skincare Services
                      <Text fontSize={"10px"} color={"grey"}>
                        Hydrating and exfoliating Perk treatments by Hydrafacial
                      </Text>
                    </Text>
                  </Flex>

                  <Flex alignItems={"center"} gap={"10px"}>
                    <Box>
                      <Img src="https://www.sephora.com/contentimages/happening/flyoutmenu_waxing.svg" />
                    </Box>
                    <Text>
                      Waxing Services
                      <Text fontSize={"10px"} color={"grey"}>
                        Expert grooming for brows, upper lip, or chin
                      </Text>
                    </Text>
                  </Flex>

                  <Flex alignItems={"center"} gap={"10px"}>
                    <Box>
                      <Img
                        src="https://www.sephora.com/contentimages/happening/flyoutmenu_events.svg"
                        w={"65px"}
                      />
                    </Box>
                    <Text>
                      Events
                      <Text fontSize={"10px"} color={"grey"}>
                        Learn about brands, try new products, and more at out
                        in-store events
                      </Text>
                    </Text>
                  </Flex>
                </SimpleGrid>
                <Flex
                  color={"blue"}
                  cursor={"pointer"}
                  pt={"15px"}
                  pb={"15px"}
                  fontSize={"14px"}
                  gap={"12px"}
                >
                  <Text _hover={{ textDecoration: "underline" }}>
                    My Reservation
                  </Text>
                  <Text>|</Text>
                  <Text _hover={{ textDecoration: "underline" }}>
                    Beauty Service FAQs
                  </Text>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Popover trigger="hover">
            <PopoverTrigger>
              <Button
                bgColor={"white"}
                borderRadius={"none"}
                _hover={{ bgColor: "white", borderBottom: "2px solid #333" }}
              >
                <Flex fontSize={"3xl"} alignItems={"center"} gap={"10px"}>
                  <HiOutlineUserGroup />
                  <Text fontSize={"14px"}>Community</Text>
                </Flex>
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>
                <Flex alignItems={"center"} gap={"12px"}>
                  <Box>
                    <Image
                      src="https://www.sephora.com/img/ufe/icons/me-active.svg"
                      w={"50px"}
                    />
                  </Box>
                  <Text fontWeight={700} fontSize={"14px"} mr={"20px"}>
                    Community Profile{" "}
                    <Text fontSize={"10px"} fontWeight={400} color={"grey"}>
                      Sign in to see your profile
                    </Text>
                  </Text>
                  <BiBell size={"25px"} />
                  <BiMessage size={"25px"} />
                </Flex>
              </PopoverHeader>
              <PopoverBody>
                <Flex
                  justifyContent={"center"}
                  gap={"12px"}
                  pt={"8px"}
                  pb={"14px"}
                >
                  <Box w={"50%"}>
                    <Login />
                  </Box>
                  <Signup/>
                </Flex>
                <Divider color={"grey"} />

                <SimpleGrid spacing={"15px"}>
                  <Flex gap={"10px"} alignItems={"center"}>
                    <Box w={"80px"}>
                      <Img
                        src="https://www.sephora.com/contentimages/meganav/icons/community_home.jpg"
                        w={"100%"}
                      />
                    </Box>
                    <Text fontSize={"16px"}>
                      Community Home
                      <Text color={"grey"} fontWeight={400} fontSize={"11px"}>
                        Ask questions, join challanges, and get recommendations
                        from people like you
                      </Text>
                    </Text>
                  </Flex>
                  <Divider color={"grey"} />

                  <Flex gap={"10px"} alignItems={"center"}>
                    <Box w={"50px"}>
                      <Img
                        src="https://www.sephora.com/contentimages/meganav/icons/community_groups.jpg"
                        w={"100%"}
                      />
                    </Box>
                    <Text fontSize={"16px"}>
                      Groups
                      <Text color={"grey"} fontWeight={400} fontSize={"11px"}>
                        Discover topics tailored to your beauty interests
                      </Text>
                    </Text>
                  </Flex>
                  <Divider color={"grey"} />

                  <Flex gap={"10px"} alignItems={"center"}>
                    <Box w={"70px"}>
                      <Img
                        src="https://www.sephora.com/contentimages/meganav/icons/community_gallery.jpg"
                        w={"100%"}
                      />
                    </Box>
                    <Text fontSize={"16px"}>
                      Gallery
                      <Text color={"grey"} fontWeight={400} fontSize={"11px"}>
                        Add your photos and video and get inspired by fellow
                        beauty lovers
                      </Text>
                    </Text>
                  </Flex>
                  <Divider color={"grey"} />
                </SimpleGrid>
                <SimpleGrid spacing={"12px"}>
                  <Text fontWeight={700} fontSize={"14px"}>
                    Featured Groups
                  </Text>
                  <Text fontSize={"12px"} fontWeight={400}>
                    Trending at Sephora
                  </Text>
                  <Text fontSize={"12px"} fontWeight={400}>
                    Best Hair Ever
                  </Text>
                  <Text fontSize={"12px"} fontWeight={400}>
                    Lip Lovers
                  </Text>
                </SimpleGrid>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Popover trigger="hover">
            <PopoverTrigger>
              <Button
                bgColor={"white"}
                borderRadius={"none"}
                _hover={{ bgColor: "white", borderBottom: "2px solid #333" }}
              >
                {" "}
                <Flex gap={"10px"} alignItems={"center"}>
                  <Box>
                    <Image
                      src="https://www.sephora.com/img/ufe/icons/me-active.svg"
                      w={"30px"}
                    />{" "}
                  </Box>
                  <Text fontSize={"14px"} fontWeight={600}>
                    Sign In
                    <Text fontSize={"10px"} fontWeight={400}>
                      for FREE Shipping 🚚
                    </Text>
                  </Text>
                </Flex>
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>
                <Flex alignItems={"center"} gap={"12px"}>
                  <Box>
                    <Image
                      src="https://www.sephora.com/img/ufe/icons/me-active.svg"
                      w={"50px"}
                    />
                  </Box>
                  <Text fontWeight={700} fontSize={"14px"} mr={"20px"}>
                    Good evening, Beautiful. 🌙{" "}
                    <Text fontSize={"10px"} fontWeight={400} color={"grey"}>
                      Sign in for{" "}
                      <span style={{ fontWeight: "600" }}>
                        Free standard shipping
                      </span>{" "}
                      on all the orders.
                    </Text>
                  </Text>
                </Flex>
              </PopoverHeader>
              <PopoverBody>
                <Flex
                  justifyContent={"center"}
                  gap={"12px"}
                  pt={"8px"}
                  pb={"14px"}
                >
                  <Box w={"50%"}>
                    <Login />
                  </Box>
                  
                  <Signup/>
                </Flex>
                <Divider color={"grey"} />
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
        <Flex
          alignItems={"center"}
          justifyContent={"right"}
          pr={["5px", "5px", "10px", "10px"]}
        >
          <Popover trigger="hover">
            <PopoverTrigger>
              <Button
                borderRadius={"none"}
                bgColor={"white"}
                _hover={{ bgColor: "white", borderBottom: "2px solid #333" }}
              >
                <Link to={'/cart'}>
                <Flex fontSize={"3xl"}>
                  <PiBasketLight />
                </Flex>
                </Link>
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader fontWeight={700} fontSize={"14px"}>
                Basket
              </PopoverHeader>
              <PopoverBody>
                <SimpleGrid spacing={"15px"}>
                  <Flex gap={"10px"} alignItems={"center"}>
                    <Box w={"30px"}>
                      <Img
                        src="https://www.sephora.com/img/ufe/icons/rewards-bazaar.svg"
                        w={"100%"}
                      />
                    </Box>
                    <Text fontWeight={400} fontSize={"12px"}>
                      See samples, rewards, and promos in basket.
                    </Text>
                  </Flex>
                  <Divider />

                  <Flex gap={"10px"} alignItems={"center"}>
                    <Box w={"30px"}>
                      <Img
                        src="https://www.sephora.com/contentimages/homepage/050124/2024-july-hair-story-site-home-page-RWD-hero-banner-air-dry-us-can-release-image-only-2000x2000.jpeg?imwidth=545"
                        w={"100%"}
                      />
                    </Box>
                    <Text fontWeight={400} fontSize={"11px"}>
                      Beauty Insiders enjoy{" "}
                      <span style={{ fontWeight: "600" }}>
                        FREE standard shipping
                      </span>{" "}
                      on all orders.
                    </Text>
                  </Flex>
                  <Divider />

                  <Flex gap={"10px"} alignItems={"start"}>
                    <Box w={"30px"}>
                      <Img
                        src="https://www.sephora.com/img/ufe/icons/cc-outline.svg"
                        w={"100%"}
                      />
                    </Box>
                    <Text fontSize={"16px"}>
                      The Sephora Credit Card Program
                      <Text fontWeight={400} fontSize={"11px"}>
                        Save 25% on this order when you open and use either
                        Sephora Credit Card today
                      </Text>
                    </Text>
                  </Flex>
                  <Divider />
                  <Link to={'/cart'}>
                  <Button
                    bgColor={"white"}
                    color={"black"}
                    border={"1px solid black"}
                    w={"2x1"}
                    borderRadius={"20px"}
                    >
                    SEE DETAILS
                  </Button>
                    </Link>
                </SimpleGrid>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger>
              <HamburgerIcon display={["block", "block", "block", "none"]} />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader
                fontWeight={700}
                fontSize={"14px"}
                pt={"10px"}
                pb={"10px"}
              >
                Categories
              </PopoverHeader>
              <PopoverBody>
                <SimpleGrid spacing={"12px"}>
                  <Text>Makeup</Text>
                  <Text>Skincare</Text>
                  <Text>Hair</Text>
                  <Text>Fragrance</Text>
                  <Text>Tools & Brushes</Text>
                  <Text>Bath & Body</Text>
                  <Text>Gifts & Gift Cards</Text>
                  <Text>Sales & Offers</Text>
                </SimpleGrid>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </SimpleGrid>

      {/* *---------------------------Navbar 2----------------------------------* */}

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
                    <Text _hover={{ textDecoration: "underline" }}>
                      All New
                    </Text>
                    <Text _hover={{ textDecoration: "underline" }}>
                      Just Dropped
                    </Text>
                    <Text _hover={{ textDecoration: "underline" }}>
                      New Makeup
                    </Text>
                    <Text _hover={{ textDecoration: "underline" }}>
                      New Skincare
                    </Text>
                    <Text _hover={{ textDecoration: "underline" }}>
                      New Hair Care
                    </Text>
                    <Text _hover={{ textDecoration: "underline" }}>
                      New Fragrance
                    </Text>
                    <Text _hover={{ textDecoration: "underline" }}>
                      New Bath & Body
                    </Text>
                    <Text _hover={{ textDecoration: "underline" }}>
                      New Tools & Brushes
                    </Text>
                  </SimpleGrid>

                  <SimpleGrid
                    spacing={"12px"}
                    cursor={"pointer"}
                    fontSize={"14px"}
                    fontWeight={700}
                  >
                    <Text _hover={{ textDecoration: "underline" }}>
                      The Next Big Thing
                    </Text>
                    <Text _hover={{ textDecoration: "underline" }}>
                      Bestsellers
                    </Text>
                    <Text _hover={{ textDecoration: "underline" }}>
                      Trending on Social
                    </Text>
                    <Text _hover={{ textDecoration: "underline" }}>
                      Refillable Beauty Products
                    </Text>
                    <Text _hover={{ textDecoration: "underline" }}>
                      Buying Guides
                    </Text>
                    <Text _hover={{ textDecoration: "underline" }}>
                      Clean Beauty
                    </Text>
                    <Text _hover={{ textDecoration: "underline" }}>
                      Planet Aware Beauty
                    </Text>
                    <Text _hover={{ textDecoration: "underline" }}>
                      FSA & HSA Eligible
                    </Text>
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
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Fara Homidi
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Chunks
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Jean Paul Gaultier
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    BaBylissPRO
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Iris&Romeo
                  </Text>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Only At Sephora
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Rare Beauty by Selena Gomez
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Kerastase
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    PHLUR
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    The INKEY List
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Sale
                  </Text>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Affordable Brands
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    SEPHORA COLLECTION
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    The Ordinary
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    The Inkey List
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Verb
                  </Text>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Black-Owned Brands
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    PATTERN By Tracee Ellis Ross
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Hyper Skin
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    FENTY Fragrance
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    adwoa beauty
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Melanin Haircare
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    BROWN GIRL Jane
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Fashion Fair
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Ami Cole
                  </Text>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Clean at Sephora
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Living Proof
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Tower 28 Beauty
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Commodity
                  </Text>
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
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Foundation
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    BB & CC Cream
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Tinted Moisturizer
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Concealer
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Face Primer
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Setting Spray & Powder
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Highlighter
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Contour
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Color Correct
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Face Sets
                  </Text>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Eye
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Eye Palettes
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Mascara
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Eyeliner
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Eyebrow
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    False Eyelashes
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Eyeshadow
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Eyelash Serums
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Eyebrow Serums
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Eye Primer
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Eye Sets
                  </Text>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Lip
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Lip Gloss
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Lipstick
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Lip Oil
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Lip Plumper
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Lip Balms & Treatments
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Liquid Lipstick
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Lip Liner
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Lip Stain
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Lip Sets
                  </Text>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Cheek
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Blush
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Bronzer
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Highlighter
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Contour
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Cheek Palettes
                  </Text>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Help Me Choose
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Monochrome Makeup
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Easy Eye Makeup
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Guide To Foundations
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Clean Makeup Guide
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    No Makeup Makeup
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Super-Natural Sculpting
                  </Text>
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
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Cleansers
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Face Wash & Cleansers
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Exfoliators
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Makeup Removers
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Face Wipes
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Toners
                    </Text>
                  </SimpleGrid>

                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Moisturizers
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Night Creams
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Face Oils
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Mists & Essences
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      BB & CC Cream
                    </Text>
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid spacing={"20px"}>
                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Treatments
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Face Serums
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Acne & Blemish Treatments
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Facial Peels
                    </Text>
                  </SimpleGrid>

                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Masks
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Face Masks
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Sheet Masks
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Eye Masks
                    </Text>
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid spacing={"20px"}>
                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Eye Care
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Eye Creams & Treatments
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Eye Masks
                    </Text>
                  </SimpleGrid>

                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Lip Balms & Treatments
                  </Text>
                </SimpleGrid>

                <SimpleGrid spacing={"20px"}>
                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Sunscreen
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Face Sunscreen
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Body Sunscreen
                    </Text>
                  </SimpleGrid>

                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Wellness
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Supplements
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Feminine Care
                    </Text>
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Shop By Concern
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Acne & Blemishes
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Anti-Aging
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Dark Spots
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Pores
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Dryness
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Fine Lines & Wrinkles
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Dullness
                  </Text>
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
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Shampoo & Conditioner
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Shampoo
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Conditioner
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Scalp Scrub
                  </Text>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Treatments
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Hair Masks
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Leave-in Conditioner
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Hair Oil
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Hair Serums
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Scalp Treatments
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Hair Supplements
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Hair Thinning & Hair Loss
                  </Text>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Styling
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Styling Creams & Sprays
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Dry Shampoo
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Hair Primers & Heat Protectants
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Hair Spray
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Mousse & Foam
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Gel, Pomade & Wax
                  </Text>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Hair Styling Tools
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Hair Dryers
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Hair Straighteners & Flat Irons
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Blow Dry Brushes
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Curling Irons
                  </Text>
                </SimpleGrid>

                <SimpleGrid spacing={"20px"}>
                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Shop by Concern
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Damaged Hair
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Dryness
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Frizz
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Scalp Care
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Volume
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Color Care
                    </Text>
                  </SimpleGrid>

                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Shop by Style
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Volume & Texture
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Smooth & Sleek
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Curl Enhancing
                    </Text>
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
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Women
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Perfume
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Perfume Oils
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Rollerballs & Travel Size
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Body Mist & Hair Mist
                    </Text>
                  </SimpleGrid>

                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Men
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Cologne
                    </Text>
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Value & Gift Sets
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Perfume Gift Sets
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Cologne Gift Sets
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Home Gift Sets
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Sephora Favorites
                  </Text>
                </SimpleGrid>

                <SimpleGrid spacing={"20px"}>
                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Candles & Home Scents
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Candles
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Diffusers
                    </Text>
                  </SimpleGrid>

                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Shop by Fragrance Family
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Floral
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Warm & Spicy
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Fresh
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Earthy & Woody
                    </Text>
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    New
                  </Text>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Bestsellers
                  </Text>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Clean Fragrance
                  </Text>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Vegan Fragrance
                  </Text>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Mini Size
                  </Text>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Value Size
                  </Text>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Refillable Fragrance
                  </Text>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Luxury Fragrance
                  </Text>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Black-Owned Brands Fragrance
                  </Text>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Help Me Choose
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    The New & Now Fragrance Edit
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Clean Fragrance Guide
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Fragrance Guide
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Fragrance Notes Guide
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Best Affordable Fragrance
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Niche Fragrances
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Next Big Thing
                  </Text>
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
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Brushes & Applicators
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Brush Sets
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Face Brushes
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Eye Brushes
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Lip Brushes
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Sponges & Applicators
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Brush Cleaners
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Facial Cleansing Brushes
                  </Text>
                </SimpleGrid>

                <SimpleGrid spacing={"20px"}>
                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Hair Styling Tools
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Hair Dryers
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Straighteners & Flat Irons
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Curling Irons
                    </Text>
                  </SimpleGrid>

                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Wellness
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Wellness Tools & Devices
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Vibrators
                    </Text>
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Beauty Tools
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Anti-Aging
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Hair Removal
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Tweezers & Eyebrows
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Manicure & Pedicure
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Eyelash Curlers
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Sharpeners
                  </Text>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Makeup & Travel Cases
                  </Text>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Value & Gift Sets
                  </Text>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    New
                  </Text>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Bestsellers
                  </Text>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Black-Owned Brands Tools & Brushes
                  </Text>
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
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Bath & Shower
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Body Wash & Shower Gel
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Scrubs & Exfoliants
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Bath Soaks & Bubble Bath
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Hand Sanitizer & Hand Soap
                    </Text>
                  </SimpleGrid>

                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Body Moisturizers
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Body Lotions & Body Oils
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Hand Cream & Foot Cream
                    </Text>
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid spacing={"20px"}>
                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Sunscreen
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Face Sunscreen
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Body Sunscreen
                    </Text>
                  </SimpleGrid>

                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Wellness
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Supplements
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Intimate Care & Vibrators
                    </Text>
                    <Text
                      fontSize={"14px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Feminine Care
                    </Text>
                  </SimpleGrid>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Shop By Concern
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Stretch Marks & Firming
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Dryness / Dry Skin
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Smooth Texture
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Even Skin Tone & Color Correction
                  </Text>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    New
                  </Text>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Bestsellers
                  </Text>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Mini Size
                  </Text>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Value Size
                  </Text>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Value & Gift Sets
                  </Text>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Sephora Collection
                  </Text>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Black-Owned Brands Bath & Body
                  </Text>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Help Me Choose
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    The Joy of Body Care
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    The Best Skincare Is Sunscreen
                  </Text>
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
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      All Mini Size
                    </Text>
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Makeup
                    </Text>
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Skincare
                    </Text>
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Hair
                    </Text>
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Fragrance
                    </Text>
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Bath & Body
                    </Text>
                  </SimpleGrid>

                  <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Value & Gift Sets
                    </Text>
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      $15 and Under
                    </Text>
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      $25 and Under
                    </Text>
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      $35 and Under
                    </Text>
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Sephora Favorites
                    </Text>
                    <Text
                      fontSize={"14px"}
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                    >
                      Luxe Minis
                    </Text>
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
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    By Price
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    $10 and under
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    $15 and under
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    $25 and under
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    $50 and under
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    $75 and under
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    $100 and under
                  </Text>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    By Category
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Makeup
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Skincare
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Hair
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Fragrance
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Candles & Home Scents
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Tools
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Brush Sets & Accessories
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Bath & Body
                  </Text>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    By Recipient
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    For Her
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    For Mom
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    For Him
                  </Text>
                  <Text
                    fontSize={"14px"}
                    _hover={{ textDecoration: "underline" }}
                  >
                    For Them
                  </Text>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"} cursor={"pointer"}>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Top Rated Gifts
                  </Text>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Mini Size
                  </Text>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Only at Sephora
                  </Text>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Luxury Gifts
                  </Text>
                  <Text
                    fontSize={"14px"}
                    fontWeight={700}
                    _hover={{ textDecoration: "underline" }}
                  >
                    The Luxury Guide
                  </Text>
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

      {/* *------------------------Small Screen Navbar3-----------------------------* */}

      <Flex
        display={["flex", "flex", "flex", "none"]}
        justifyContent={"space-around"}
        boxShadow={"base"}
        py={"10px"}
      >
        <Text fontSize={"14px"} fontWeight={700}>
          Sign In for FREE Shipping 🚚
          <Text fontWeight={500} fontSize={"12px"}>
            Don’t have an account?
            <span
              style={{
                fontSize: "10px",
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {" "}
              Create an account
            </span>
          </Text>
        </Text>
       <Login/>
      </Flex>
    </Box>
  );
};

export default Navbar;
