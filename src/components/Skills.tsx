import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function Skills() {
    const highlights = [
    "5+ years of frontend development experience",
    "Expertise in React, TypeScript, and modern CSS",
    "Strong focus on user experience and accessibility",
    "Proven track record of delivering high-quality projects",
    "Collaborative team player with excellent communication skills"
  ];

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3",
        "Tailwind CSS", "Angular"
      ]
    },
    {
      title: "Backend",
      skills: [
        "Node.js", "Nest.js", "tRPC", ".NET", "Java", "Python", "EF Core", "SQL",
        "Supabase", "PostgreSQL", "REST APIs", "Prisma"
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        "Git", "Docker", "AWS", "Vercel", "GitHub Actions",
        "Jasmine"
      ]
    },
    {
      title: "Others",
      skills: [
        "Agile/Scrum", "Public Speaking"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4">Skills & Technologies</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The technologies and tools I have experience building with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
}