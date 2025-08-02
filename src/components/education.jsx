
import { Flex, Box, Text, Heading} from "@chakra-ui/react";
import CardArray from "./ui/card-array";


export default function Education() {
        return <Flex id="education" alignItems={"center"} justifyContent={"center"} flexDirection={"column"} gap="20px">
          <Heading size="4xl"alignItems={"center"} justifyContent={"center"} >
            Education
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
          <CardArray data={activities}/>

        </Flex>
    
}
const activities = [
  
   {
    image: 'assets/img/khoury.jpg',
    title: 'Khoury College Student Advisory Board',
    description: ['Collaborate with a board of 15 students and administrators to poll 3,000+ undergraduate students on Khoury experience via a climate survey to develop a plan for course reinvention and new support programs',
      'Hosted and moderated a student town hall with 100+ attendees to gather insight on opportunities students see for the future of experiential education and career preparation at Northeastern'
    ],
    isVideo: false,
  },
  {
    image: 'assets/img/honors.png',
    title: 'Honors Ambassadors',
    description: ['Connect with 100+ prospective students and families on a panel and in one on one engagements to answer questions about the program and offer insight on university opportunities'],
    isVideo: false,
  },
];