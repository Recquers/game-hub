import {  GridItem,Grid} from '@chakra-ui/react'
import Navbar from './components/NavBar';
function App() {
  return (
    <Grid
    templateRows='repeat(2, 1fr)'
    templateColumns='repeat(4, 1fr)'
 
  h='100px'
  
  color='blackAlpha.700'
  fontWeight='bold'
>
  
  <GridItem colSpan={4}  >
   <Navbar />
  </GridItem>
  <GridItem colSpan={2}  bg='green'>
    Main
  </GridItem>
  <GridItem colSpan={2}  bg='blue' >
    Aside
  </GridItem>
</Grid>
  );
}

export default App
