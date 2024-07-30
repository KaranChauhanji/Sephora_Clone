import {
  Box,
  Button,
  Divider,
  Flex,
  Img,
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
  useToast,
} from "@chakra-ui/react";
import { useState } from "react"; // Import useState for managing form state
import axios from 'axios'; // Import axios for making HTTP requests
import Login from "./Login";

const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  // State to manage form inputs
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    zip: "",
  });

  const toast = useToast(); // Toast for displaying notifications

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Check if password and confirmPassword match
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "Passwords do not match. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Send POST request to backend
    try {
      const response = await axios.post('http://localhost:3000/user/register', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        ZIP: formData.zip,
      });

      // Handle success response
      if (response.status === 201) {
        toast({
          title: "Account created",
          description: `Congratulations ${formData.username}, you are registered!`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        onClose(); // Close the modal
        setFormData({ // Reset form data
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          phone: "",
          zip: "",
        });
      }
    } catch (error) {
      console.error("Error creating account:", error);
      toast({
        title: "Error",
        description: error.response?.data?.message || "An error occurred while creating your account.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <Button
        color={"black"}
        border={"1px solid black"}
        bgColor={"white"}
        borderRadius={"20px"}
        onClick={onOpen}
      >
        Create Account
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Account</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <SimpleGrid spacing={"15px"}>
                <Box w={"50%"}>
                  <Img
                    src="https://www.sephora.com/img/ufe/bi/logo-beauty-insider.svg"
                    w={"100%"}
                  />
                </Box>

                <Text fontWeight={400} fontSize={"14px"}>
                  Join the Beauty Insider loyalty program. Earn points, get FREE
                  standard shipping, redeem rewards, and more.
                </Text>

                <Input
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />

                <Flex gap={"12px"}>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="zip"
                    placeholder="ZIP Code"
                    value={formData.zip}
                    onChange={handleChange}
                    required
                  />
                </Flex>

                <Button
                  bgColor={"black"}
                  color={"white"}
                  borderRadius={"20px"}
                  _hover={{ bgColor: "grey" }}
                  type="submit" // Make button a submit button
                >
                  Join Now
                </Button>
              </SimpleGrid>
            </form>

            <Divider />
            <SimpleGrid spacing={"12px"} py={"20px"}>
              <Text>Already have an account?</Text>
              <Box w={"40%"}>
                <Login />
              </Box>
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Signup;