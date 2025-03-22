import React from 'react';
import { Monitor, Mail, MapPin, Github, Twitter, Linkedin, ExternalLink, Phone } from 'lucide-react';
import profileImage from './assets/vignesh.jpg';

function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <header className="linkedin-header p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">VP</h1>
          <div className="text-white/80 text-sm">Member since 2024</div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto p-4 flex flex-col md:flex-row gap-6">
        {/* Left Sidebar */}
        <aside className="md:w-1/4">
          <div className="section-box p-4 text-center">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden profile-image mb-4">
              <img src={profileImage} alt="Vignesh Prabhu" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-bold mb-2">Vignesh Prabhu</h2>
            <p className="text-sm mb-4"> Software Engineer</p>
            <div className="connection-count mb-4">500+ connections</div>
            <div className="text-sm text-[#4D4D4D]">
              <div className="flex items-center gap-2 justify-center mb-2">
                <Mail className="w-4 h-4" />
                <span>dev.vigneshprabhu@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <MapPin className="w-4 h-4" />
                <span>Udupi, Karnataka</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:w-3/4">
          <div className="section-box p-4 mb-4">
            <h2 className="text-lg font-bold border-b border-gray-300 pb-2 mb-4">Professional Summary</h2>
            <div className="border-2 border-white bg-black p-6">
              <h2 className="text-xl mb-6 tracking-wide border-b-2 border-white pb-4">PROFILE</h2>
              <p className="text-gray-300 leading-relaxed">
                Motivated Software Developer with a strong focus on frontend engineering, UI/UX, and user psychology. Proficient in React, Angular, and Vue.js, with experience in full-stack development and building
                scalable SaaS products. Skilled at effectively leveraging AI in development workflows to enhance productivity and create innovative solutions. Passionate about crafting seamless user experiences and
                intuitive interfaces. Actively seeking opportunities in frontend development and software engineering.
              </p>
            </div>
          </div>

          <div className="section-box p-4 mb-4">
            <h2 className="text-lg font-bold border-b border-gray-300 pb-2 mb-4">Experience</h2>
            <div className="border-2 border-white bg-black p-6">
              <h2 className="text-xl mb-6 tracking-wide border-b-2 border-white pb-4">PROFESSIONAL EXPERIENCE</h2>
              
              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl text-green-400">Software Engineer (Intern)</h3>
                  <span className="text-gray-400">Feb 2025 – Present</span>
                </div>
                <h4 className="text-gray-300 mb-2">IonIdea, Bengaluru, Karnataka (Remote)</h4>
                <ul className="list-disc list-inside text-gray-400">
                  <li>Developed a responsive and dynamic user interface using React, enhancing user experience</li>
                  <li>Integrated the frontend with a FastAPI backend, ensuring efficient data retrieval</li>
                  <li>Collaborated closely with backend developers to design and implement RESTful APIs</li>
                  <li>Leveraged AI-powered development tools to accelerate coding workflows</li>
                </ul>
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl text-green-400">Python Developer Intern</h3>
                  <span className="text-gray-400">October 2023 – November 2023</span>
                </div>
                <h4 className="text-gray-300 mb-2">YBI Foundation (Remote)</h4>
                <ul className="list-disc list-inside text-gray-400">
                  <li>Developed Python-based automation scripts and AI/ML models</li>
                  <li>Improved operational efficiency by optimizing workflows</li>
                  <li>Applied AI techniques to enhance data processing</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section-box p-4 mb-4">
            <h2 className="text-lg font-bold border-b border-gray-300 pb-2 mb-4">Education</h2>
            <div className="border-2 border-white bg-black p-6">
              <h2 className="text-xl mb-6 tracking-wide border-b-2 border-white pb-4">EDUCATION</h2>
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl text-green-400">Bachelor of Engineering in Computer Science</h3>
                  <span className="text-gray-400">2021 – 2025</span>
                </div>
                <h4 className="text-gray-300 mb-2">Shri Madhwa Vadiraja Institute of Technology and Management</h4>
                <p className="text-gray-400">CGPA: 7.0</p>
                <p className="text-gray-400">Relevant Coursework: Data Structures, Machine Learning, Operating Systems, and Full-Stack Development</p>
              </div>
            </div>
          </div>

          <div className="section-box p-4 mb-4">
            <h2 className="text-lg font-bold border-b border-gray-300 pb-2 mb-4">Projects</h2>
            <div className="border-2 border-white bg-black p-6">
              <h2 className="text-xl mb-6 tracking-wide border-b-2 border-white pb-4">PROJECTS</h2>
              
              <div className="grid gap-6">
                <div className="border border-gray-700 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl text-purple-400">EmbedChat: SaaS Chatbot Solution</h3>
                    <a href="https://embedchat.app" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-gray-400 mb-4">
                    Developed a user-friendly frontend for an AI-driven chatbot integration service. Improved user engagement by 30% and reduced load times by 40%.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-gray-700 text-xs text-cyan-400">Docker</span>
                    <span className="px-2 py-1 bg-gray-700 text-xs text-cyan-400">Python</span>
                    <span className="px-2 py-1 bg-gray-700 text-xs text-cyan-400">Vue.js</span>
                  </div>
                </div>

                <div className="border border-gray-700 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl text-purple-400">FINOMO: AI-Powered Financial Agent</h3>
                    <a href="https://finomo-web-frontend.vercel.app" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-gray-400 mb-4">
                    AI-powered financial advisor providing personalized investment guidance. Built with React, Node.js, and Gemini AI.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-gray-700 text-xs text-cyan-400">React</span>
                    <span className="px-2 py-1 bg-gray-700 text-xs text-cyan-400">Node.js</span>
                    <span className="px-2 py-1 bg-gray-700 text-xs text-cyan-400">Chakra UI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-box p-4 mb-4">
            <h2 className="text-lg font-bold border-b border-gray-300 pb-2 mb-4">Technical Skills</h2>
            <div className="border-2 border-white bg-black p-6">
              <h2 className="text-xl mb-6 tracking-wide border-b-2 border-white pb-4">TECHNICAL SKILLS</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="text-green-400 mb-2">Programming</h3>
                  <ul className="text-gray-400">
                    <li>Python</li>
                    <li>JavaScript/TypeScript</li>
                    <li>HTML/CSS</li>
                    <li>C/C++</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-green-400 mb-2">Frameworks</h3>
                  <ul className="text-gray-400">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Vue.js</li>
                    <li>Angular</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-green-400 mb-2">AI & Tools</h3>
                  <ul className="text-gray-400">
                    <li>Gemini Pro</li>
                    <li>GitHub Copilot</li>
                    <li>Docker</li>
                    <li>Azure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="section-box p-4 mb-4">
            <h2 className="text-lg font-bold border-b border-gray-300 pb-2 mb-4">Awards & Activities</h2>
            <div className="border-2 border-white bg-black p-6">
              <h2 className="text-xl mb-6 tracking-wide border-b-2 border-white pb-4">AWARDS & ACTIVITIES</h2>
              <div className="mb-4">
                <h3 className="text-xl text-green-400 mb-2">Awards</h3>
                <ul className="list-disc list-inside text-gray-400">
                  <li>Winner at HackWave'23, NITK Surathkal</li>
                  <li>Second Runner-Up at EG AI Innovation Hackathon 2024</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl text-green-400 mb-2">NCC Experience</h3>
                <p className="text-gray-400 mb-2">Cadet (SD) | February 2022 – March 2024</p>
                <ul className="list-disc list-inside text-gray-400">
                  <li>Led beach cleaning events and blood donation drives</li>
                  <li>Participated in various community service initiatives</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer className="bg-[#4D4D4D] text-white p-4 mt-8">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="text-gray-400">© 2024 Vignesh Prabhu</div>
          <div className="flex gap-4">
            <a href="https://github.com/vignesh05p" className="text-gray-400 hover:text-cyan-400" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/vigneshprabhu11" className="text-gray-400 hover:text-cyan-400" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://x.com/prabhu_ai" className="text-gray-400 hover:text-cyan-400" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;