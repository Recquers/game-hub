import {HStack,Image,Text} from '@chakra-ui/react'
import logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize={60}/>
        <Text>NavBar</Text>
    </HStack>
    
  )
}

export default Navbar