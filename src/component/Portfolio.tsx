import { useState } from 'react'
import { ChevronDown, Github, Linkedin, Mail} from 'lucide-react'
import myImage from '../assets/KAKA.jpg'
import cliplyImage from '../assets/cliply.png'
import clockImage from '../assets/clock.png'
import vgpImage from '../assets/vgp.png'
import portfolioImage from '../assets/portfolio.png'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 z-10">
        <nav className="container mx-auto px-6 py-3">
          <ul className="flex justify-center space-x-4">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`capitalize ${
                    activeSection === section ? 'text-blue-400' : 'text-white'
                  } hover:text-blue-300 transition-colors`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <img
                src={myImage}
                alt="Me"
                className="rounded-full w-48 h-48 object-cover border-4 border-blue-500"
              />
            </div>
            <h1 className="text-5xl font-bold mb-4">Nnamuka Chukwuka</h1>
            <p className="text-xl mb-8">Web Developer</p>
            <button
              onClick={() => scrollToSection('about')}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors flex items-center mx-auto"
            >
              Learn More <ChevronDown className="ml-2" />
            </button>
          </div>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center">
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="mb-4">
              I'm a passionate web developer. With 1+ years of experience in
              creating responsive and user-friendly websites, I strive to build applications, websites and software products. I'm driven by my love for 
building software products and possess good collaborative skills when working with a team..I am proﬁcient  
in html, css, javascript, testing, react, database management in building software products.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or enjoying a good time with family and friends.
            </p>
          </div>
        </section>

        <section id="skills" className="min-h-screen flex items-center justify-center">
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'React',
                'JavaScript',
                'TypeScript',
                'Node.js',
                'HTML',
                'CSS',
                'Testing and Debugging',
                'Git',
                'Responsive Design',
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-800 rounded-lg p-3 shadow-lg hover:shadow-xl transition-shadow"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="projects" className="min-h-screen flex items-center justify-center">
  <div className="max-w-4xl">
    <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        {
          title: 'Cliply',
          description: 'Cliply helps user shorten their long URLs for easier sharing, it provides a dashboard page for signed users after authentication and also generates QR code for their shortened links',
          image: cliplyImage,
          githubLink: 'https://github.com/Nnamuka01/Cliply',
          liveSiteLink: 'https://cliply-three.vercel.app/',
        },
        {
          title: 'Github Portfolio',
          description: 'A github portfolio that displays a user github repositories and their details with pagination enabled',
          image: vgpImage,
          githubLink: 'https://github.com/Nnamuka01/Vue-Github-Portfolio',
          liveSiteLink: 'https://vue-github-portfolio-phi.vercel.app/',
        },
        {
          title: 'Clock Stopwatch',
          description: 'A clock stopwatch app using Javascript thst displays the current time in different timezones and also has a stopwatch feature',
          image: clockImage,
          githubLink: 'https://github.com/Nnamuka01/Clock-Stopwatch-App',
          liveSiteLink: 'https://clock-stopwatch-app.vercel.app/',
        },
        {
          title: 'Portfolio Website',
          description: 'A responsive portfolio website built with React and TypeScript',
          image: portfolioImage,
          githubLink: 'https://github.com/Nnamuka01/Personal-Portfolio',
          liveSiteLink: 'https://personal-portfolio-delta-ten-11.vercel.app/',
        },
      ].map((project) => (
        <div key={project.title} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                GitHub
              </a>
              <a
                href={project.liveSiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Live Site
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


        <section id="contact" className="min-h-screen flex items-center justify-center">
          <div className="max-w-md w-full">
            <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <p>&copy; 2024 Nnamuka Chukwuka. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://github.com/Nnamuka01" target='_blank' rel='noopener noreferrer' className="hover:text-blue-400 transition-colors">
              <Github />
            </a>
            <a href="https://linkedin.com/in/Nnamuka Chukwuka" target='_blank' rel='noopener noreferrer' className="hover:text-blue-400 transition-colors">
              <Linkedin />
            </a>
            <a href="mailto:govanokaka22@gmail.com" target='_blank' rel='noopener noreferrer' className="hover:text-blue-400 transition-colors">
              <Mail />
            </a>   
          </div>
        </div>
      </footer>
    </div>
  )
}
