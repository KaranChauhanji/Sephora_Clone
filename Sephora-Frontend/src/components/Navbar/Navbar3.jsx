import { Box, Flex, Text } from "@chakra-ui/react"
import Login from "../../pages/Login"

const Navbar3 = () => {
  return (
    <Box>
        
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
  )
}

export default Navbar3