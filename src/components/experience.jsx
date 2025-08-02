import { Flex, Heading} from "@chakra-ui/react";
import CardArray from "./ui/card-array"


export default function Experience() {
    return <Flex id="experience" alignItems={"center"} justifyContent={"center"} flexDirection={"column"} gap="20px">
      <Heading size="4xl"alignItems={"center"} justifyContent={"center"} >
        Experience
      </Heading>
<CardArray data={experience}/>
    </Flex>
}


// data for experience cards
const experience = [
   {
    image: 'assets/img/coverys.png',
    title: 'Software Engineering Co-Op | Web Team',
    description: ['Configured Auth0 application, API, and permissions to support role-based access on controllers, improving the security of sensitive client data in a legacy workflow automation system',
      'Implemented 10+ feature enhancements using Angular and EF Core via defaults and simplified controls to provide focused data access, ultimately reducing manual work, improving user experience, and enabling client productivity'
    ],
    link: 'https://www.coverys.com',
    isVideo: false,
    buttonContent: 'Company Website',
  },
  {
    image: 'assets/img/pawtograder.png',
    title: 'Software Engineering Co-Op | CS 3100',
    description: ['Implemented 5+ MVP feature-complete pages on a new open-source course management platform, enabling adoption by Northeastern University for 1,000+ users across 3 campuses, streamlining institutional operations',
      'Designed and deployed row-level security, SQL triggers, and Supabase edge functions to ensure scalable authorization, safeguard sensitive data, and maintain reliability for a high-traffic application',
      'Developed a grader assignment interface for workload division using a flexible network flow algorithm with consideration of grading conflicts and previous workload, enhancing classroom workflows',
      'Configured Supabase storage for efficient data management, reducing retrieval times and ensuring seamless backend performance'
    ],
    link: 'https://github.com/pawtograder/platform',
    isVideo: false,
    buttonContent: 'Project Source Code',
  },
  {
    image: 'assets/img/khoury.jpg',
    title: 'Teaching Assistant',
    description: ['Facilitated 4+ hours weekly of office hours and labs for 30+ students, teaching SOLID principles, test-driven development, and debugging strategies to prepare students for advanced coursework and professional roles',
      'Provided detailed feedback on 50+ projects through grading and one-on-one consultations, helping students apply high-level design patterns, from refining computational logic to improving user-facing functionality '
    ],
        link: 'https://course.ccs.neu.edu/cs3500/',
    isVideo: false,
    buttonContent: 'Course Website',
  },
  {
    image: 'assets/img/lead360.jpeg',
    title: 'Lead360 Certification',
    description: '"BLUEPRINT is an eight-week interactive group mentoring program for emerging leaders '
                + 'designed to help you become the leader you wish to be! Map out your Leadership BLUEPRINT '
                + 'and get to know your peers through a Northeastern specific leadership framework that focuses '
                + 'on accessibility, interdependence, experience, and justice."',
    link: 'https://undergraduatenews.khoury.northeastern.edu/files/2019/09/Blueprint-info-flyer.jpg',
    isVideo: false,
    buttonContent: 'Check It Out',
  },
  {
    image: 'assets/img/codepath.jpeg',
    title: 'CodePath TIP102 Class',
    description: '"Summer of 2024 I participated in a 10 week techinical interview prep course with CodePath.  Over the '
                + 'course of the program we dove into DSA through peer programming, mock interviews, leetcode questions, '
                + 'Hackerrank assessments, and of course lessons and curriculum.',
    link: 'https://www.codepath.org/courses/tech-interview-prep?utm_term=coding%20interview%20course&utm_cam',
    isVideo: false,
    buttonContent: 'Check It Out',
  },
  {
    image: 'assets/img/firstbyte.jpeg',
    title: 'FirstByte Hackathon',
    description: 'Organized the Scratch Hackathon with FirstByte Software Team Spring 2024. '
                + 'Complete with presentations, activities, and challenges.',
    link: 'https://www.khoury.northeastern.edu/clubs_and_orgs/firstbyte/',
    buttonContent: 'Check It Out',
  },
   
]