
// data for project cards
const projects = [
  {
      image: 'media/mfademo.mp4',
      title: 'MFA Forms',
      description: 'Contributed to the MFA Forms application team, which is building an online form management and signature ' 
        + 'website.  In the fall, I worked on the upload form template flow by integrating Figma designs using React and local '
        + 'blob storage to persist information across pages.  I also worked on smaller redesign tickets.',
      link: 'https://github.com/sandboxnu/mfa-form-automator',
      isVideo: true,
      buttonContent: 'View on Github',
  },
  {
      image: 'img/tennis-5782695_1280.jpg',
      title: 'Tennis League Script',
      description: 'I developed and deployed a Web App script for a local Tennis League of 50+ members '
              + 'which pulls and parses schedule and player information from a Google Sheet, and sends '
              + 'a reminder text to each participant the day before their match. The program is active '
              + 'for the 2024-2025 season.  The code for this project is on my GitHub, along with instructions '
              + 'on how to modify and deploy it on any similar schedule spreadsheet, given that one follows the listed '
              + 'formatting constraints in the container sheet.',
      link: 'https://github.com/laurenbrissette/tennis-league',
      isVideo: false,
      buttonContent: 'View on Github',
  },
  {
      image: 'media/frogdemo.mp4',
      title: 'Frogger',
      description: 'After finishing my first year, I wanted to expand my knowledge of Java by working with '
               + 'real-world tools and libraries rather than Northeastern based ones.  In this project, I'
              +  ' worked with JUnit testing and Java GUIs.',
      link: 'https://github.com/laurenbrissette/frogger',
      isVideo: true,
      buttonContent: 'View on Github',
  },
  {
    image: 'img/site.png',
    title: 'Portfolio Website',
    description: 'Decided to build to learn basic web development along the way.',
    link: 'https://github.com/laurenbrissette/portfolio',
    isVideo: false,
    buttonContent: 'View on Github',
  },
  {
    image: 'media/codeforcomm.mp4',
    title: 'C4C Partner Site',
    description: 'Web application I built as a demo for keeping track of variable data for club partner projects.  Users can add and delete partner projects,'
              + ' inputting thumbnails and other project details. ',
    link: 'https://github.com/laurenbrissette/c4c-challenge-fall-2024',
    isVideo: true,
    buttonContent: 'View on Github',
  },
  {
    image: 'media/mazedemo.mp4',
    title: 'Maze Generator',
    description: 'Maze generator, which constructs mazes up to 100 x 60 cells using Kruskal\'s Algorithm for Minimum Spanning Trees. '
                + 'Solution may be animated in either Breadth or Depth First Search, or done manually.  Includes options to regenerate and pause.  Written in Java using '
                + 'Northeastern "impword" and "tester" libraries.  Accelerated Fundamentals of CS II 2024.',
    link: 'mailto:brissette.l@northeastern.edu',
    isVideo: true,
    buttonContent: 'Request Code',
  },
  {
    image: 'media/ecdemo.mp4',
    title: 'Exquisite Corpse',
    description: 'Web application bringing a drawing game from team\'s childhoods.  Three people blindly draw parts of a creature on a '
            + 'time limit (customizable), and the pieces are combined to form a full image.  First experience with web development for all contributors. '
            + 'Written in HTML, CSS, and Javascript in collaboration with a team.  HackBeanpot Hackathon.',
    link: 'https://github.com/laurenbrissette/exquisite-corpse',
    isVideo: true,
    buttonContent: 'View on Github',
  },
  {
    image: 'media/seamripper.mp4',
    title: 'Seam Ripper',
    description: 'Smart image resizer, which detects the "least interesting" seam of pixels in the image and removes it, randomly alternating between ' 
                  + 'horizontal and vertical.  "Interestingness" computed based on brightness of three upper neighbors of a given pixel.  Demonstrates efficiency and dynamic '
                  + 'programming for quick computation time.  Written in Java using Northeastern "impword" and "tester" libraries.  Accelerated Fundamentals of CS II 2024.',
    link: 'mailto:brissette.l@northeastern.edu',
    isVideo: true,
    buttonContent: 'Request Code',
  }
];

// data for resource cards
const resources = [
  {
    image: 'img/eloquentjs.jpg',
    title: 'Eloquent JavaScript',
    description: 'I created Exquisite Corpse and Code 4 Community Projects in JS with my knowledge '
                + 'of Java and Python, but both were a challenge!  With some extra time summer of 2024, I '
                + 'resolved to read up and learn JavaScript right.',
    link: 'https://eloquentjavascript.net',
    isVideo: false,
    buttonContent: 'Check It Out',
  },
  {
    image: 'img/webdesign.jpeg',
    title: 'Principles of Web Design',
    description: 'Book by Brian D. Miller which gives an overview of "keywords" in industry '
                + 'web development and explains how large scale projects are processed and planned.',
    link: 'https://www.skyhorsepublishing.com/good-books/9781621537878/principles-of-web-design/',
    isVideo: false,
    buttonContent: 'Check It Out',
  },
  {
    image: 'img/codedbias.png',
    title: 'Coded Bias Film',
    description: 'When MIT Media Lab researcher Joy Buolamwini discovers that facial recognition does '
                + 'not see dark-skinned faces accurately, she embarks on a journey to push for the first-ever '
                + 'U.S. legislation against bias in algorithms that impact us all.',
    link: 'https://www.imdb.com/title/tt11394170/',
    isVideo: false,
    buttonContent: 'Check It Out',
  },
];

// data for experience cards
const experience = [
  {
    image: 'img/khoury.jpg',
    title: 'Teaching Assistant',
    description: 'TA for Object Oriented Design, Northeastern University Spring 2025 Semester.  '
    + 'Responsibilities include hosting 6+ hours of office hours and labs weekly assist with SOLID principles compliant development'
    + ', answering student questions, and grading assignments',
    link: 'course website',
    isVideo: false,
    buttonContent: 'Course Website',
  },
  {
    image: 'img/lead360.jpeg',
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
    image: 'img/codepath.jpeg',
    title: 'CodePath TIP102 Class',
    description: '"Summer of 2024 I am participating in a 10 week techinical interview prep course with CodePath.  Over the '
                + 'course of the program we are diving into DSA through peer programming, mock interviews, leetcode questions, '
                + 'Hackerrank assessments, and of course lessons and curriculum.  More details on the course content are available',
    link: 'https://www.codepath.org/courses/tech-interview-prep?utm_term=coding%20interview%20course&utm_cam',
    isVideo: false,
    buttonContent: 'Check It Out',
  },
  {
    image: 'img/firstbyte.jpeg',
    title: 'FirstByte Hackathon',
    description: 'Organized the Scratch Hackathon with FirstByte Software Team Spring 2024. '
                + 'Complete with presentations, activities, and challenges.',
    link: 'https://www.khoury.northeastern.edu/clubs_and_orgs/firstbyte/',
    buttonContent: 'Check It Out',
  },
   
]

// generates a card 
function createCard({ image, title, description, link, isVideo, buttonContent}) {
  const card = document.createElement('div');
  card.classList.add("new-card");
  isVideo ? 
  card.innerHTML += `
  <div class="center">
   <video class="image-container" controls>
      <source src=${image} type="video/mp4">
      Demo of ${title}
    </video>
  </div>
  
  ` : card.innerHTML += `
    <img src=${image} class="image-container" alt=${'image of ' + title}>
  `;

  card.innerHTML += `
        <div class="new-card-text">
          <div class="new-card-title">${title}</div>
          <div class="new-card-content">${description}</div>
        </div>
        <a href=${link} class="new-card-button">${buttonContent}</a>
  `;
  
  return card;
}

// creates cards from the list of information and places them in the html 
// element with the appropriate id
// param information array of objects containing card information 
// param id string containing id of html element cards go in
function createCards(information, id) {
  const container = document.getElementById(id);
  container.classList.add("card-grid")
  information.forEach(item => {
      container.appendChild(createCard(item));
  });
}

createCards(projects, 'project-cards');
createCards(resources, 'resource-cards');
createCards(experience, 'experience-cards');

