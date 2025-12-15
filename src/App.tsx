import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Experience } from './components/Experience';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience experience={[{
  id: "1",
  company: "Coverys",
  position: "Information Technology Co-op",
  duration: "July 2025 - December 2025",
  location: "Boston, MA",
  description: ["• Built interactive data visualization dashboards with tagging/filtering functionality using Angular and Kendo UI", 
    "• Created RESTful APIs for task management with role-based access control using .NET Core, C#, and EF Core",
    "• Configured Auth0 to support role-based controller access, improving security of sensitive company data"
  ],
  technologies: ["Angular", "TypeScript", "#C", ".NET", "EF Core", "SQL Server Management Studio", "Postman", "Swagger", "Jasmine"],
  current: false,
}, {
  id: "2",
  company: "Northeastern University",
  position: "Software Engineering Co-op",
  duration: "May 2025 - June 2025",
  location: "Boston, MA",
  description: ["• Architected 5 MVP pages using Next.js and Supabase (PostgreSQL), enabling rapid adoption for 1000+ students",
    "• Delivered scalable performance and security using row-level database permissions, edge functions, and cron jobs",
    "• Configured Supabase storage for efficient file management, optimizing retrieval times and backend performance",
    "• Developed network flow algorithm for grading division, cutting manual work and enhancing course-staff workflows"
  ],
  technologies: ["Next.js", "TypeScript", "RefineDev", "Supabase", "PostgreSQL", "Vercel", "Docker"],
  current: false,
}, 
{
  id: "3",
  company: "Northeastern University",
  position: "Object Oriented Design Teaching Assistant",
  duration: "May 2025 - June 2025",
  location: "Boston, MA",
  description: ["• Managed labs of 30+ students, teaching SOLID principles, TDD, MVC architecture, and debugging strategies", 
    "• Evaluated 50+ Java projects providing technical feedback via grading and individual mentoring sessions",
    "• Helped students apply high-level design patterns to refine computational logic and improve user-facing functionality"
  ],
  technologies: ["Java", "JUnit", "Swing"],
  current: false,
}]}/>
        <Projects projects={[{
          id: '1',
          title: 'Good Dog Licensing @ SandboxNU',
          description: 'A solution for the music licensing service at Northeastern which matches media makers with musicians.' + 
          '  I redesigned and implemented the matchmaking flow in the backend.  I also worked heavily on architecting an abstracted component library and style system for the frontend.',
          technologies: ["Next.js", "TailwindCSS", "tRPC", "PostgreSQL"],
          imageUrl: '../public/assets/img/good-dog.jpeg',
          githubUrl: "https://github.com/sandboxnu/good-dog-licensing",
          featured: false,
          category: 'web'
        }, {
          id: '2',
          title: 'Pawtograder',
          description: 'A course management site for Northeastern now active for over 1000 users.  I worked primarily on admin functionalities, ' + 
            'including managing project groups, tagging users, and assigning TA grading.',
          technologies: ["Next.js", "Supabase", "PostgreSQL", "RefineDev"],
          imageUrl: '../public/assets/img/pawtograder.png',
          featured: false,
          category: 'web'
        }, { 
          id: '3',
          title: 'Museum of Fine Arts Form Automator',
          description: 'An HR application to digitize employee paperwork, deployed spring 2025 at the MFA for use of 800+ employees.  I implemented the form template creation flow demoed, which sets up pdfs which can then be assigned to groups as instances.',
          technologies: ["Next.js", "Nest.js", "PostgreSQL", "PrismaORM"],
          imageUrl: '../public/assets/img/mfa.jpeg',
          demoUrl: '../public/assets/media/mfademo.mp4',
          githubUrl: "https://github.com/sandboxnu/mfa-form-automator",
          featured: false,
          category: 'web'
        }, { 
          id: '4',
          title: 'Exquisite Corpse',
          description: 'A web game I developed for a Hackathon my freshman year where players collaborate to each draw a part of a creature without seeing the other parts.  I focused on the custom timer, storing the images for the final assembly, and overall formatting and styling.',
          technologies: ["HTML", "CSS", "Javascript"],
          imageUrl: '../public/assets/img/exquisite.jpeg',
          demoUrl: '../public/assets/media/ecdemo.mp4',
          githubUrl: "https://github.com/laurenbrissette/exquisite-corpse",
          featured: false,
          category: 'web'
        }, 
        { 
          id: '5',
          title: 'MatchDay Messenger',
          description: 'A Google AppScript application to help manage a tennis league, which sends automated reminders to players about upcoming matches by scraping from a Google Sheet schedule.  I worked with a client in my hometown to design, implement, and deploy this solution.  The app has been live for the 2024-25 and 2025-26 seasons, supporting 50+ members each iteration.',
          technologies: ["Google AppScript"],
          imageUrl: '../public/assets/img/tennis.png',
          githubUrl: "https://github.com/laurenbrissette/tennis-league",
          featured: false,
          category: 'script'
        },
        { 
          id: '6',
          title: 'Frogger',
          description: 'After finishing my first year, I wanted to expand my knowledge of Java by working with real-world tools and libraries rather than Northeastern based ones. In this project, I worked with JUnit testing and Java GUIs for the first time.',
          technologies: ["HTML", "CSS", "Javascript"],
          imageUrl: '../public/assets/img/frogger.png',
          demoUrl: '../public/assets/media/frogdemo.mp4',
          githubUrl: "https://github.com/laurenbrissette/frogger",
          featured: false,
          category: 'desktop'
        }]}/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}