import {
  Box,
  Button,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Signup from "./Signup";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginUser } from "../Redux/Login/actions";

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
  };

  return (
    <Box>
      <Button
        color={"white"}
        bgColor={"black"}
        borderRadius={"20px"}
        onClick={onOpen}
        w={"100%"}
      >
        Sign In
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <SimpleGrid spacing={"15px"}>
                <Text fontWeight={400} fontSize={"14px"}>
                  Sign in or create an account to enjoy FREE standard shipping
                  on all orders.
                </Text>

                <Input
                  type="email"
                  placeholder={"Email Address"}
                  onChange={(e) =>
                    setCredentials((prevCreden) => ({
                      ...prevCreden,
                      email: e.target.value,
                    }))
                  }
                />
                <Input
                  type="password"
                  placeholder={"Password"}
                  onChange={(e) =>
                    setCredentials((prevCreden) => ({
                      ...prevCreden,
                      password: e.target.value,
                    }))
                  }
                />
                <Text fontWeight={400} fontSize={"11px"}>
                  By clicking “Sign In”, you (1) agree to the current version of
                  our TERMS OF USE, and (2) have read Sephora’s Privacy Policy
                </Text>

                <Button
                  bgColor={"black"}
                  color={"white"}
                  borderRadius={"20px"}
                  _hover={{ bgColor: "grey" }}
                  type="submit"
                >
                  Sign In
                </Button>
              </SimpleGrid>
            </form>

            <Divider />
            <SimpleGrid spacing={"12px"} py={"20px"}>
              <Text>New to Sephora?</Text>

              <Signup />
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Login;
