
import { Flex, Link, Box } from "@chakra-ui/react";


export default function Header() {
    return <Box width="100%" padding="5px" fontSize="large"> 
      <Link href="#education" float="left">Lauren Brissette</Link>
<>
  
  <Flex 
    float="right" 
    gap="30px"
    display={{ base: "none", md: "flex" }}
  >
    <Link href="#experience">Experience</Link>
    <Link href="#projects">Projects</Link>
    <Link href="#education">Education</Link>
    <Link href="#resources">Resources</Link>
  </Flex>
</></Box>
}