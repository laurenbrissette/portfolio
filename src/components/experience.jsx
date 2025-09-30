import { Flex, Heading} from "@chakra-ui/react";
import CardArray from "./ui/card-array"


export default function Experience() {
    return <Flex id="experience" alignItems={"center"} justifyContent={"center"} flexDirection={"column"} gap="20px">
      <Heading size="4xl" alignItems={"center"} justifyContent={"center"} fontFamily="Cambria" fontWeight="normal">
        Experience
      </Heading>
<CardArray data={experience}/>
    </Flex>
}


// data for experience cards
const experience = [
   {
    image: 'assets/img/coverys.png',
    title: 'Information Technology Co-Op | Web Team',
    description: [
      'Built interactive data visualization dashboards with tagging/filtering functionality using Angular and Kendo UI',
      'Created RESTful APIs for task management with role-based access control using .NET Core, C#, and EF Core',
      'Configured Auth0 to support role-based controller access, improving security of sensitive company data'
    ],
    link: 'https://www.coverys.com',
    isVideo: false,
    buttonContent: 'Company Website',
  },
  {
    image: 'assets/img/pawtograder.png',
    title: 'Software Engineering Co-Op | CS 3100',
    description: [
      'Architected 5 MVP pages using Next.js and Supabase (PostgreSQL), enabling rapid adoption for 1000+ students',
      'Delivered scalable performance and security using row-level database permissions, edge functions, and cron jobs',
      'Configured Supabase storage for efficient file management, optimizing retrieval times and backend performance',
      'Developed network flow algorithm for grading division, cutting manual work and enhancing course-staff workflows'
    ],
    link: 'https://github.com/pawtograder/platform',
    isVideo: false,
    buttonContent: 'Project Source Code',
  },
  {
    image: 'assets/img/khoury.jpg',
    title: 'Teaching Assistant',
    description: ['Managed labs of 30+ students, teaching SOLID principles, TDD, MVC architecture, and debugging strategies',
      'Evaluated 50+ Java projects providing technical feedback via grading and individual mentoring sessions',
      'Helped students apply high-level design patterns to refine computational logic and improve user-facing functionality'
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