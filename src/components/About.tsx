import portrait from '../assets/img/portrait.jpeg';

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              How I got started in tech and where I am today
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div>
              <h3 className="text-2xl mb-6">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In high school, at the end of each year, I found that I was ready to move on from whatever specialties I had learned - biology, 
                  geometry, U.S. history - content that my knowledge on the subject might not advance much further beyond that level.
                </p>
                <p>
                  When I finished my first computer science course in 10th grade, I couldn't imagine letting everything I'd learned go.  So I continued the next year, and the next, until 
                  my senior year it was obvious: this was what I wanted to do.  
                </p>
                <p>
                  Now, I am a third-year Computer Science student at Northeastern. I've realized that those intro classes had barely scratched the surface, and I haven't lost the wonder of 
                  learning every day in this field.
                </p>
              </div>
              <div>
              </div>
              </div>
               <div>
              <h3 className="text-2xl mb-6">Today</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>• Contributed to 6 full stack web applications across 3 organizations, 5 of which are currently live for clients</p>
                <p>• Maintained a 4.0 GPA through my first five semesters, ongoing</p>
                <p>• Developed strong communication and teamwork skills through work experience, from food service to TAing to software roles</p>
              </div>
              <div>
              </div>
              </div>
              
            </div>
            
            
            <img src={portrait}></img>
          </div>
        </div>
      </div>
    </section>
  );
}