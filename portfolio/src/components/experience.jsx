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
    image: 'assets/img/khoury.jpg',
    title: 'Coverys Co-Op',
    description: 'ADD DESCRIPTION',
    link: 'ADD LINK',
    isVideo: false,
    buttonContent: 'Company Website',
  },
  {
    image: 'assets/img/khoury.jpg',
    title: 'Software Engineering Co-Op | CS 3100',
    description: 'ADD DESCRIPTION',
    link: 'ADD LINK',
    isVideo: false,
    buttonContent: 'Course Website',
  },
  {
    image: 'assets/img/khoury.jpg',
    title: 'Teaching Assistant',
    description: 'TA for Object Oriented Design, Northeastern University Spring 2025 Semester.  '
    + 'Responsibilities include hosting 6+ hours of office hours and labs weekly assist with SOLID principles compliant development'
    + ', answering student questions, and grading assignments',
    link: 'course website',
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
    description: '"Summer of 2024 I am participating in a 10 week techinical interview prep course with CodePath.  Over the '
                + 'course of the program we are diving into DSA through peer programming, mock interviews, leetcode questions, '
                + 'Hackerrank assessments, and of course lessons and curriculum.  More details on the course content are available',
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