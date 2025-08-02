import { Flex, Box } from "@chakra-ui/react";
import Header from "../components/header";

import Bio from "../components/bio";
import Projects from "../components/projects";
import Resources from "../components/resources";
import Experience from "../components/experience";
import Education from "../components/education";

export default function Page() {
    return <Box margin="15px">
        <Header/>
        <Bio/>
        <Flex flexDir={"column"} gap="30px">
                    <Experience/>

         <Projects/>
        <Education/>

        <Resources/>
        </Flex>
        
     
    </Box>
}