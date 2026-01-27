import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Experience } from './components/Experience';
import gooddog from "./assets/img/good-dog.jpeg";
import mfa from "./assets/img/mfa.jpeg";
import mfademo from "./assets/media/mfademo.mp4";
import pawtograder from "./assets/img/pawtograder.png";
import exquisite from "./assets/img/exquisite.jpeg";
import tennis from "./assets/img/tennis.png";
import frogger from "./assets/img/frogger.png";
import ecdemo from "./assets/media/ecdemo.mp4";
import frogdemo from "./assets/media/frogdemo.mp4";
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
  company: "Northeastern University",
  position: "Program Design And Implementation II Teaching Assistant",
  duration: "January 2025 - Present",
  location: "Boston, MA",
  description: ["• Managed labs of 30+ students, teaching SOLID principles, TDD, MVC architecture, and debugging strategies", 
    "• Evaluated 50+ Java projects providing technical feedback via grading and individual mentoring sessions",
    "• Helped students apply high-level design patterns to build clean, scalable, maintainable code bases"
  ],
  technologies: ["Java", "JUnit", "Swing"],
  current: false,
},{
  id: "2",
  company: "Coverys",
  position: "Information Technology Co-op",
  duration: "July 2025 - December 2025",
  location: "Boston, MA",
  description: ["• Co-developed C#/.NET document issuance system reducing IT support needs, saving 2,200 hours/$300K annually", 
    "• Refactored brittle legacy code from Word templates into efficient, reusable, maintainable, and testable C# services",
    "• Achieved 70% test coverage on new web app, setting automated testing standards and improving deployments",
    "• Delivered intuitive data management UI with complex validation to support launch 2 weeks ahead of schedule"
  ],
  technologies: ["Angular", "TypeScript", "#C", ".NET", "EF Core", "SQL Server Management Studio", "Postman", "Swagger", "Jasmine"],
  current: false,
}, {
  id: "3",
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
}
]}/>
        <Projects projects={[{
          id: '1',
          title: 'Good Dog Licensing @ SandboxNU',
          description: 'A solution for the music licensing service at Northeastern which matches media makers with musicians.' + 
          '  I redesigned and implemented the matchmaking flow in the backend.  I also worked heavily on architecting an abstracted component library and style system for the frontend.',
          technologies: ["Next.js", "TailwindCSS", "tRPC", "PostgreSQL"],
          imageUrl: gooddog,
          githubUrl: "https://github.com/sandboxnu/good-dog-licensing",
          featured: false,
          category: 'web'
        }, {
          id: '2',
          title: 'Pawtograder',
          description: 'A course management site for Northeastern now active for over 1000 users.  I worked primarily on admin functionalities, ' + 
            'including managing project groups, tagging users, and assigning TA grading.',
          technologies: ["Next.js", "Supabase", "PostgreSQL", "RefineDev"],
          imageUrl: pawtograder,
          featured: false,
          category: 'web'
        }, { 
          id: '3',
          title: 'Museum of Fine Arts Form Automator',
          description: 'An HR application to digitize employee paperwork, deployed spring 2025 at the MFA for use of 800+ employees.  I implemented the form template creation flow demoed, which sets up pdfs which can then be assigned to groups as instances.',
          technologies: ["Next.js", "Nest.js", "PostgreSQL", "PrismaORM"],
          imageUrl: mfa,
          demoUrl: mfademo,
          githubUrl: "https://github.com/sandboxnu/mfa-form-automator",
          featured: false,
          category: 'web'
        }, { 
          id: '4',
          title: 'Exquisite Corpse',
          description: 'A web game I developed for a Hackathon my freshman year where players collaborate to each draw a part of a creature without seeing the other parts.  I focused on the custom timer, storing the images for the final assembly, and overall formatting and styling.',
          technologies: ["HTML", "CSS", "Javascript"],
          imageUrl: exquisite,
          demoUrl: ecdemo,
          githubUrl: "https://github.com/laurenbrissette/exquisite-corpse",
          featured: false,
          category: 'web'
        }, 
        { 
          id: '5',
          title: 'MatchDay Messenger',
          description: 'A Google AppScript application to help manage a tennis league, which sends automated reminders to players about upcoming matches by scraping from a Google Sheet schedule.  I worked with a client in my hometown to design, implement, and deploy this solution.  The app has been live for the 2024-25 and 2025-26 seasons, supporting 50+ members each iteration.',
          technologies: ["Google AppScript"],
          imageUrl: tennis,
          githubUrl: "https://github.com/laurenbrissette/tennis-league",
          featured: false,
          category: 'script'
        },
        { 
          id: '6',
          title: 'Frogger',
          description: 'After finishing my first year, I wanted to expand my knowledge of Java by working with real-world tools and libraries rather than Northeastern based ones. In this project, I worked with JUnit testing and Java GUIs for the first time.',
          technologies: ["HTML", "CSS", "Javascript"],
          imageUrl: frogger,
          demoUrl: frogdemo,
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