import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Input,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { PiBasketLight } from "react-icons/pi";

const Navbar = () => {
  return (
    <Box>
      <Box
        textAlign={"center"}
        p={"18px"}
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
      <SimpleGrid
        gridTemplateColumns={[
          ".6fr 1fr .2fr",
          ".6fr 1fr .2fr",
          "1fr 2fr 1fr",
          ".7fr 1.5fr 2fr .5fr",
        ]}
        p={["1px", "8px", "20px", "30px"]}
        pt={["20px", "20px", "20px", "30px"]}
        pb={["20px", "20px", "20px", "30px"]}
        alignItems={"center"}
        justifyContent={"center"}
        m={"auto"}
        w={["100%", "100%", "100%", "90%"]}
        gap={["20px", "20px", "40px", "20px"]}
      >
        <Text
          fontWeight={600}
          fontSize={["15px", "17px", "20px", "24px"]}
          textAlign={"right"}
        >
          S E P H O R A
        </Text>
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
              <Button bgColor={"white"} _hover={{ bgColor: "white" }}>
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
              <PopoverHeader textAlign={"center"}><Button bgColor={'black'} color={"white"} borderRadius={'20px'}>Choose Your Store</Button></PopoverHeader>
              <PopoverBody>
                
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Popover trigger="hover">
            <PopoverTrigger>
              <Button bgColor={"white"} _hover={{ bgColor: "white" }}>
                <Flex fontSize={"3xl"} alignItems={"center"} gap={"10px"}>
                  <HiOutlineUserGroup />
                  <Text fontSize={"14px"}>Community</Text>
                </Flex>
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>Confirmation!</PopoverHeader>
              <PopoverBody>
                Are you sure you want to have that milkshake?
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Popover trigger="hover">
            <PopoverTrigger>
              <Button bgColor={"white"} _hover={{ bgColor: "white" }}>
                {" "}
                <Flex gap={"10px"} alignItems={"center"}>
                  <Box>
                    <Image
                      src="https://www.sephora.com/img/ufe/icons/me-active.svg"
                      w={"50px"}
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
              <PopoverHeader>Confirmation!</PopoverHeader>
              <PopoverBody>
                Are you sure you want to have that milkshake?
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>

        <Popover trigger="hover">
          <PopoverTrigger>
            <Button bgColor={"white"} _hover={{ bgColor: "white" }}>
              <Flex fontSize={"3xl"}>
                <PiBasketLight />
              </Flex>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>Confirmation!</PopoverHeader>
            <PopoverBody>
              Are you sure you want to have that milkshake?
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </SimpleGrid>
    </Box>
  );
};

export default Navbar;
