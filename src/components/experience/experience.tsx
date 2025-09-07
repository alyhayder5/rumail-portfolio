'use client';
import { motion } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Award,
  Briefcase,
  GraduationCap,
  Trophy,
  Star,
  Zap,
} from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description:
        'Leading development of scalable web applications and mentoring junior developers. Implemented microservices architecture resulting in 40% performance improvement.',
      achievements: [
        'Led a team of 5 developers in building a high-traffic e-commerce platform',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored 3 junior developers and conducted code reviews',
        'Optimized database queries resulting in 50% faster load times',
      ],
      technologies: [
        'React',
        'Node.js',
        'AWS',
        'Docker',
        'PostgreSQL',
        'GraphQL',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      location: 'New York, NY',
      period: '2020 - 2022',
      type: 'Full-time',
      description:
        'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create pixel-perfect user interfaces.',
      achievements: [
        'Built 15+ client websites with 100% client satisfaction',
        'Developed a real-time chat application with 10,000+ daily users',
        'Created reusable component library used across 20+ projects',
        'Improved page load speeds by 45% through optimization',
      ],
      technologies: [
        'Vue.js',
        'Express.js',
        'MongoDB',
        'Socket.io',
        'Tailwind CSS',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'StartupHub',
      location: 'Remote',
      period: '2019 - 2020',
      type: 'Full-time',
      description:
        'Focused on creating responsive and interactive user interfaces for early-stage startups. Worked closely with product managers and designers.',
      achievements: [
        'Developed mobile-first responsive designs for 8 startup projects',
        'Implemented PWA features increasing user engagement by 30%',
        'Created design system used across all company products',
        'Reduced bundle size by 35% through code splitting',
      ],
      technologies: [
        'React',
        'TypeScript',
        'Styled Components',
        'Framer Motion',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 4,
      title: 'Junior Web Developer',
      company: 'WebCraft Agency',
      location: 'Chicago, IL',
      period: '2018 - 2019',
      type: 'Full-time',
      description:
        'Started my professional journey building websites for small businesses and learning modern web development practices.',
      achievements: [
        'Built 25+ small business websites from scratch',
        'Learned modern JavaScript frameworks and best practices',
        'Collaborated with senior developers on complex projects',
        'Maintained 100% uptime for all client websites',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'MySQL'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Computer Science',
      institution: 'University of Technology',
      location: 'California, USA',
      period: '2014 - 2018',
      description:
        'Graduated with honors, focusing on software engineering and web development. Completed several projects including a capstone project on machine learning applications.',
      achievements: [
        'Graduated Magna Cum Laude (GPA: 3.8/4.0)',
        "Dean's List for 6 consecutive semesters",
        'Capstone project: AI-powered recommendation system',
        'President of Computer Science Club',
      ],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      id: 2,
      degree: 'Full Stack Web Development',
      institution: 'Tech Academy Bootcamp',
      location: 'Online',
      period: '2018',
      description:
        'Intensive 6-month bootcamp covering modern web development technologies and best practices.',
      achievements: [
        'Completed 20+ hands-on projects',
        'Built 5 full-stack applications',
        'Learned agile development methodologies',
        'Received certification with distinction',
      ],
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  const certifications = [
    {
      id: 1,
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credential: 'AWS-SAA-001',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      id: 2,
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      credential: 'GCP-PD-002',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2021',
      credential: 'META-REACT-003',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      id: 4,
      name: 'Node.js Application Developer',
      issuer: 'OpenJS Foundation',
      date: '2020',
      credential: 'NODE-AD-004',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-slate-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-full text-green-300 text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Trophy size={16} />
            Professional Journey
            <Star size={16} />
          </motion.div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and educational background that shaped my
            expertise in creating extraordinary digital solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Briefcase className="text-blue-400" size={32} />
                Work Experience
              </h3>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    {/* Timeline Line */}
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent"></div>

                    {/* Timeline Node */}
                    <div className="absolute left-4 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-slate-900 group-hover:scale-125 transition-transform duration-300"></div>

                    <div className="ml-16 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h4 className="text-2xl font-bold text-white mb-2 sm:mb-0 group-hover:text-blue-400 transition-colors duration-300">
                          {exp.title}
                        </h4>
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
                          <Zap size={16} />
                          {exp.type}
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                        <span className="text-xl font-semibold text-blue-300">
                          {exp.company}
                        </span>
                        <div className="flex items-center gap-1 text-gray-400">
                          <MapPin size={16} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-400">
                          <Calendar size={16} />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                        {exp.description}
                      </p>

                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Star size={20} className="text-yellow-400" />
                          Key Achievements:
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="text-gray-300 flex items-start gap-3"
                            >
                              <span className="text-blue-400 mt-1 text-lg">
                                •
                              </span>
                              <span className="text-sm leading-relaxed">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <GraduationCap className="text-purple-400" size={32} />
                Education
              </h3>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
                  >
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      {edu.degree}
                    </h4>
                    <p className="text-purple-300 font-semibold mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-1 text-gray-400 mb-3">
                      <MapPin size={14} />
                      <span className="text-sm">{edu.location}</span>
                      <span className="text-sm mx-2">•</span>
                      <Calendar size={14} />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-gray-400 flex items-start gap-2"
                        >
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="text-green-400" size={32} />
                Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                  >
                    <h4 className="text-sm font-bold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">
                      {cert.name}
                    </h4>
                    <p className="text-green-300 text-xs font-medium mb-1">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-xs">{cert.date}</span>
                      <span className="text-gray-500 text-xs font-mono">
                        {cert.credential}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
