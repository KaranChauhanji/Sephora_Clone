import { Box, Flex, Img, SimpleGrid, Text } from "@chakra-ui/react"
import card from '../../Utils/Homepage/Section3'


const Section3 = () => {
    return (
        <Box px={["2", "2", "10", "40"]}  py={'40px'} >
            <SimpleGrid gridTemplateColumns={['1fr','1fr','1fr','.5fr 2fr']} spacing={'20px'} >
    <Box>
        <Text fontWeight={700} fontSize={'20px'}>Featured Categories</Text>
        <Text fontSize={'14px'} fontWeight={'400'}>Shop what's popular now.</Text>
    </Box>
    <SimpleGrid gridTemplateColumns={['repeat(3,1fr)','repeat(3,1fr)','repeat(5,1fr)','repeat(8,1fr)',]} spacing={'10px'}>
    
    {card.map((elem,i)=>(
        <SimpleGrid key={i} gridAutoColumns={'1fr'} boxShadow={'base'} p={'10px'} spacing={'10px'} transition={"all .5s ease"}
        _hover={{ transform: "translateY(-5px)" }} cursor={"pointer"}>
            <Text>{elem.title}</Text>
            <Flex w={'40px'} alignItems={'end'}><Img src={elem.img} w={'100%'}/></Flex>
        </SimpleGrid>
    ))}
    
    </SimpleGrid>
            </SimpleGrid>
        </Box>
      )
}

export default Section3