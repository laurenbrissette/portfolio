
import { Flex, Box, Text, Heading} from "@chakra-ui/react";


export default function Education() {
        return <Flex id="education" alignItems={"center"} justifyContent={"center"} flexDirection={"column"} gap="20px">
          <Heading size="4xl"alignItems={"center"} justifyContent={"center"} >
            Education
          </Heading>
          <Heading size="lg">
            General
          </Heading>
          <Box>
            <Heading size="md">
            Northeastern University
            </Heading>
            <Text>
                John Martinson Honors Program | GPA: 4.0/4.0 | National Merit Scholar
            </Text>
            <Text>
                Candidate for Bachelors of Science in Computer Science
            </Text>
          </Box>
          <Heading size="lg">
            Activities
          </Heading>
          <Box >
          <Heading size="md"> 
            Khoury Student Representative Board
          </Heading>
          <Text>
            Communicate student perspective to administrators amid course changes and program revitalization
          </Text>
          <Heading size="md">
            Honors Ambassador
          </Heading>
                    Connect with prospective Northeastern University Honors students 
          and families to answer questions about the program and offer insight on university opportunities

          </Box>

        </Flex>
    
}