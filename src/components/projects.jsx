import { Flex, Heading} from "@chakra-ui/react";
import CardArray from "./ui/card-array"

export default function Projects() {
    return <Flex id="projects" alignItems={"center"} justifyContent={"center"} flexDirection={"column"} gap="20px">
      <Heading size="4xl" class="sub-heading" alignItems={"center"} justifyContent={"center"} fontFamily="Cambria" fontWeight="normal">
        Projects
      </Heading>
<CardArray data={projects}/>
    </Flex>
     
}

const projects = [
  {
      image: 'assets/media/mfademo.mp4',
      title: 'MFA Forms',
      description: [
        'Developed digital form signature and management features enabling 750+ employees to replace paper procedures',
        'Built intuitive form workflows with seamless state persistence using Next.js, ChakraUI, and React Context API',
        'Implemented form template management service with version control, maintaining backwards compatibility for existing instances while enabling template updates'
      ],
      link: 'https://github.com/sandboxnu/mfa-form-automator',
      isVideo: true,
      buttonContent: 'View on Github',
  },
  {
      image: 'assets/img/tennis-5782695_1280.jpg',
      title: 'MatchDay Messenger',
      description:[
        'Implemented script to alert 40+ members of tennis league their match details, saving 2 hours weekly',
        'Communicated with non-technical client to compile project specifications and maintenance guide',
        'Scheduled time-driven triggers with detailed outcome emails to organizer, supporting clean client handoff'
      ],
      link: 'https://github.com/laurenbrissette/tennis-league',
      isVideo: false,
      buttonContent: 'View on Github',
  },
  {
      image: 'assets/media/frogdemo.mp4',
      title: 'Frogger',
      description: 'After finishing my first year, I wanted to expand my knowledge of Java by working with '
               + 'real-world tools and libraries rather than Northeastern based ones.  In this project, I'
              +  ' worked with JUnit testing and Java GUIs for the first time.',
      link: 'https://github.com/laurenbrissette/frogger',
      isVideo: true,
      buttonContent: 'View on Github',
  },
  {
    image: 'assets/img/site.png',
    title: 'Portfolio Website',
    description: 'I decided to build this site in 2024 to learn the basics of websites and have somewhere to organize my work.  I'
        +' found working with vanilla HTML, CSS, and JavaScript to be a rewarding method to understand the true fundamentals and organization structure of web pages.  While it '
        +'was a learning curve, I have a gained a strong understanding of CSS and DOM elements to address frontend bugs by evaluating the styles hidden '
        + 'behind the black box of libraries.  A year later though, I caved and migrated to React in favor of separation of components and easy to work with image libraries.',

    link: 'https://github.com/laurenbrissette/portfolio',
    isVideo: false,
    buttonContent: 'View on Github',
  },
  {
    image: 'assets/media/codeforcomm.mp4',
    title: 'C4C Partner Site',
    description: ['Developed a responsive full stack CRUD web application to showcase club partner organizations',
'Integrated an Express backend that stores data about partner organizations to React frontend display'
],
    link: 'https://github.com/laurenbrissette/c4c-challenge-fall-2024',
    isVideo: true,
    buttonContent: 'View on Github',
  },
   {
    image: 'assets/media/ecdemo.mp4',
    title: 'Exquisite Corpse',
    description: 'Web application bringing a drawing game from team\'s childhoods.  Three people blindly draw parts of a creature on a '
            + 'time limit (customizable), and the pieces are combined to form a full image.  First experience with web development for all contributors. '
            + 'Written in HTML, CSS, and Javascript in collaboration with a team.  HackBeanpot Hackathon.',
    link: 'https://github.com/laurenbrissette/exquisite-corpse',
    isVideo: true,
    buttonContent: 'View on Github',
  },
  {
    image: 'assets/media/mazedemo.mp4',
    title: 'Maze Generator',
    description: 'Maze generator, which constructs mazes up to 100 x 60 cells using Kruskal\'s Algorithm for Minimum Spanning Trees. '
                + 'Solution may be animated in either Breadth or Depth First Search, or done manually.  Includes options to regenerate and pause.  Written in Java using '
                + 'Northeastern "impword" and "tester" libraries.  Accelerated Fundamentals of CS II 2024.',
    link: 'mailto:brissette.l@northeastern.edu',
    isVideo: true,
    buttonContent: 'Request Code',
  },
 
  {
    image: 'assets/media/seamripper.mp4',
    title: 'Seam Ripper',
    description: 'Smart image resizer, which detects the "least interesting" seam of pixels in the image and removes it, randomly alternating between ' 
                  + 'horizontal and vertical.  "Interestingness" computed based on brightness of three upper neighbors of a given pixel.  Demonstrates efficiency and dynamic '
                  + 'programming for quick computation time.  Written in Java using Northeastern "impword" and "tester" libraries.  Accelerated Fundamentals of CS II 2024.',
    link: 'mailto:brissette.l@northeastern.edu',
    isVideo: true,
    buttonContent: 'Request Code',
  }
];