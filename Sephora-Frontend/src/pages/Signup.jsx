import {
    Box,
    Button,
    Divider,
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
  } from "@chakra-ui/react";
import Login from "./Login";



const Signup = () => {
 const { isOpen, onOpen, onClose } = useDisclosure()
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

<SimpleGrid spacing={'15px'}>

<Box w={'50%'}><Img src="https://www.sephora.com/img/ufe/bi/logo-beauty-insider.svg" w={'100%'}/></Box>

      <Text fontWeight={400} fontSize={'14px'}>Join the Beauty Insider loyalty program. Earn points, get FREE standard shipping, redeem rewards, and more.
</Text>

<Input placeholder="Username"/>
<Input placeholder={'Email Address'}/>
<Input placeholder={'Password'}/>
<Input placeholder="Confirm Password"/>

<Button bgColor={'black'} color={"white"} borderRadius={'20px'} _hover={{bgColor:"grey"}}>Join Now</Button>
</SimpleGrid>

<Divider/>
<SimpleGrid spacing={'12px'} py={'20px'}>
<Text>Already have an account?</Text>
<Box w={'40%'}>
<Login/>
</Box>
</SimpleGrid>

    </ModalBody>
  </ModalContent>
</Modal>
    </Box>
  )
}

export default Signup