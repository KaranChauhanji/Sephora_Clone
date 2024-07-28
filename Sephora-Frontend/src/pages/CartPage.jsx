
import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    Img,
    SimpleGrid,
    Text,
  
  } from "@chakra-ui/react";

  import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
  const CartPage = () => {

  
    return (
      <Box>
        <Navbar />
        <Box p={[5, 5, 10, 20]} pt={[5, 5, 5, 5]}>
          <Heading fontSize='24px' fontWeight={700}>Shipping and Delivery Basket (0)</Heading>
  
          <SimpleGrid
            gridTemplateColumns={[
              "repeat(1,1fr)",
              "repeat(1,1fr)",
              "2fr 1fr",
              "2fr 1fr",
            ]}
            alignItems={"start"}
          >
            <SimpleGrid gap={2}>
             
            </SimpleGrid>
  
            <SimpleGrid gap={8} p={5}>
              <Box p={4} border={"1px solid rgba(0,0,0,0.3)"}>
              <Flex gap={"10px"} alignItems={"start"} mb={'12px'}>
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
                <Button color={"black"} bgColor={"white"} border={'1px solid black'} w={"100%"} fontWeight={400}>
                  See Details
                </Button>
              </Box>
  
              <Box p={4} fontWeight={400} border={"1px solid rgba(0,0,0,0.3)"}>
                <Flex mb={4} justifyContent={"space-between"}>
                  <Text>Subtotal</Text>
                  <Text>00.00</Text>
                </Flex>
                <Flex mb={3} fontSize={"14px"} justifyContent={"space-between"}>
                  <Text>Estimated Tax</Text>
                  <Text>$0.00</Text>
                </Flex>
                <Divider mb={3} bg={"grey"} />
                <Flex mb={4} justifyContent={"space-between"} fontSize={"16px"} fontWeight={700}>
                  <Text>Estimated Total</Text>
                  <Text>$00.00</Text>
                </Flex>
                <Text mb={2} fontSize={"14px"} color={"rgb(112,112,112)"}>
                  Applicable taxes will be calculated at checkout.
                </Text>
                <Button
                  color={"white"}
                  _hover={{ color: "white" }}
                  w={"100%"}
                  fontWeight={400}
                  bg={"black"}
                 
                >
                  Checkout
                </Button>
              </Box>
            </SimpleGrid>
          </SimpleGrid>
        </Box>
        <Footer />
      </Box>
    );
  };
  
  export default CartPage;
  