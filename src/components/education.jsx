
import { Flex, Box, Text, Heading} from "@chakra-ui/react";
import CardArray from "./ui/card-array";


export default function Education() {
        return <Flex id="education" alignItems={"center"} justifyContent={"center"} flexDirection={"column"} gap="20px">
          <Heading class="sub-heading" size="4xl"alignItems={"center"} justifyContent={"center"} fontFamily="Cambria" fontWeight="normal">
            Education
          </Heading>
          <Box>
            <Heading fontFamily={"Cambria"}>
            Northeastern University
            </Heading>
            <Text>
                John Martinson Honors Program | GPA: 4.0/4.0 | National Merit Scholar
            </Text>
            <Text>
                Candidate for Bachelors of Science in Computer Science
            </Text>
            <Text>
              Relevant Courses: Object-Oriented Design, Algorithms and Data Structures, Computer Systems
            </Text>
          </Box>
          <CardArray data={activities}/>

        </Flex>
    
}
const activities = [
  
   {
    image: 'assets/img/khoury.jpg',
    title: 'Khoury College Student Advisory Board',
    description: ['Communicated student perspectives in small-group, early-stage discussions on CS curriculum changes with admin',
      'Held an open discussion with Khoury Dean on promoting CS for all initiative amid competitive college climate',
      'Hosted 100+ student town hall, gathering perspectives on career prep and experiential education to share to admin'
    ],
    isVideo: false,
  },
  {
    image: 'assets/img/honors.png',
    title: 'Honors Ambassadors',
    description: ['Presented on panels to 100+ admitted students on university programs and unique opportunities for growth', 'Answered questions on CS curriculum, opportunities for accelerated learning, and college atmosphere'],
    isVideo: false,
  },
];