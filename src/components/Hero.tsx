import { Button } from './ui/button';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-[#390099]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 ">
            Hi, I'm <span className="text-primary">Lauren Brissette</span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8">
            Northeastern Student & Fullstack Developer
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I love to learn new things, try new foods, and creatively solve problems. 
                    Above all, I believe in the coexistence of hard work and happiness.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto"
            >
              View My Work
            </Button>
            <Button variant="outline" size="lg" asChild>
                  <a href="/portfolio/lauren_brissette_resume.pdf" download="Lauren_Brissette_Resume.pdf">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto"
            >
              Get In Touch
            </Button>
            
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/laurenbrissette"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/lauren-brissette/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:lbrissette5@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary transition-colors animate-bounce"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
}