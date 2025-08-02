
import { Box, Heading, Flex, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa6";
import { Tooltip } from "../components/ui/tooltip"

export default function Bio() {
    return <Box justifyContent="center" alignItems="center" padding="20%">
        <Flex justifyContent="center" alignItems="center" width="100%" flexDirection={"column"}> 
            <Heading size="3xl" justifyContent="center" alignItems="center">
                Hi, my name is 
            </Heading>
           <Heading size="6xl" justifyContent="center" alignItems="center">
            Lauren Brissette
            </Heading>
            <Flex  gap="10" wrap="wrap">
                    <Tooltip showArrow content="GitHub" >
                        <Link href="https://github.com/laurenbrissette"><FaGithub size="50"/></Link>
                    </Tooltip>
                    <Tooltip showArrow content="Send Email">
                        <Link href="mailto:brissette.l@northeastern.edu"><MdOutlineMail size="50"/></Link>
                    </Tooltip>
                   <Tooltip showArrow content="LinkedIn">
                        <Link href="https://www.linkedin.com/in/lauren-brissette"><FaLinkedin size="50"/></Link>
                    </Tooltip>  
                   <Tooltip showArrow content="PDF Resume">
                        <Link href="assets/docs/lauren_brissette_resume.pdf"><FaPaperclip size="50"/></Link>
                    </Tooltip>

            </Flex>
               
        </Flex>

    </Box>
}