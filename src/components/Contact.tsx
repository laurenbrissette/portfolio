import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "lbrissette5@gmail.com",
      href: "mailto:lbrissette5@gmail.com"
    },
    {
      icon: Mail,
      title: "University Email",
      value: "brissette.l@northeastern.edu",
      href: "mailto:brissette.l@northeastern.edu"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (518) 414-1458",
      href: "tel:+15184141458"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Boston, MA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      href: "https://github.com/laurenbrissette"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/lauren-brissette/"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm excited to connect with you
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
          
            {/* Contact Information */}
            <div className="flex flex-row justify-center gap-12">
              
              <div>
                <h3 className="text-xl mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.title}</p>
                        {info.href !== "#" ? (
                          <a 
                            href={info.href}
                            className="hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p>{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-6">Connect</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                      title={social.title}
                    >
                      <social.icon className="w-5 h-5 text-primary" />
                    </a>
                  ))}
                </div>
              </div>
              

              {/* <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="mb-2">Ready to start a project?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    I'm available for freelance work and consulting. Let's bring your ideas to life!
                  </p>
                  <Button className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Let's Talk
                  </Button>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}