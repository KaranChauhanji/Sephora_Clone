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

const Login = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box>
        <Button
                    color={"white"}
                    bgColor={"black"}
                    borderRadius={"20px"}
                    onClick={onOpen}
                    w={'100%'}
                  >
                    Sign In
                  </Button>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Sign In</ModalHeader>
    <ModalCloseButton />
    <ModalBody>

<SimpleGrid spacing={'15px'}>
      <Text fontWeight={400} fontSize={'14px'}>Sign in or create an account to enjoy FREE standard shipping on all orders.
</Text>

<Input placeholder={'Email Address'}/>
<Input placeholder={'Password'}/>
<Text fontWeight={400} fontSize={'11px'}>By clicking “Sign In”, you (1) agree to the current version of our TERMS OF USE, and (2) have read Sephora’s Privacy Policy</Text>

<Button bgColor={'black'} color={"white"} borderRadius={'20px'} _hover={{bgColor:"grey"}}>Sign In</Button>
</SimpleGrid>

<Divider/>
<SimpleGrid spacing={'12px'} py={'20px'}>
<Text>New to Sephora?</Text>

<Signup/>
</SimpleGrid>

    </ModalBody>
  </ModalContent>
</Modal>
    </Box>
  )
}

export default Login