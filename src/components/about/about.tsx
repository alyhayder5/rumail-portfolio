'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import {
  Code,
  Palette,
  Database,
  Smartphone,
  Globe,
  Zap,
  Star,
  Trophy,
  Target,
  Rocket,
} from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);

  const skills = [
    {
      name: 'Frontend Development',
      icon: Code,
      level: 95,
      color: 'from-blue-500 to-cyan-500',
      description: 'React, Next.js, Vue.js, TypeScript',
    },
    {
      name: 'UI/UX Design',
      icon: Palette,
      level: 90,
      color: 'from-purple-500 to-pink-500',
      description: 'Figma, Adobe XD, User Research',
    },
    {
      name: 'Backend Development',
      icon: Database,
      level: 88,
      color: 'from-green-500 to-emerald-500',
      description: 'Node.js, Python, PostgreSQL, MongoDB',
    },
    {
      name: 'Mobile Development',
      icon: Smartphone,
      level: 85,
      color: 'from-orange-500 to-red-500',
      description: 'React Native, Flutter, iOS, Android',
    },
    {
      name: 'Web Applications',
      icon: Globe,
      level: 92,
      color: 'from-indigo-500 to-purple-500',
      description: 'PWA, Microservices, Cloud Architecture',
    },
    {
      name: 'Performance Optimization',
      icon: Zap,
      level: 87,
      color: 'from-yellow-500 to-orange-500',
      description: 'Core Web Vitals, CDN, Caching',
    },
  ];

  const technologies = [
    // Frontend (JavaScript Ecosystem)
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Vue.js',
    'Nuxt.js',
    'Angular',
    'Svelte',
    'Redux',
    'Tailwind CSS',
    'Bootstrap',
    'Material UI',

    // Backend (Node.js & Ecosystem)
    'Node.js',
    'Express.js',
    'NestJS',
    'Fastify',
    'GraphQL',
    'Apollo Server',
    'REST APIs',
    'Socket.IO',

    // Databases
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'SQLite',
    'Redis',
    'Cassandra',
    'Firebase',
    'Supabase',

    // DevOps & Cloud
    'Docker',
    'Kubernetes',
    'AWS',
    'Google Cloud',
    'Azure',
    'NGINX',
    'CI/CD',
    'GitHub Actions',
    'Terraform',
    'Ansible',

    // Other Tools
    'Git',
    'Figma',
    'ESLint',
    'Prettier',
    'Jest',
    'Cypress',
    'Playwright',
  ];

  return (
    <section
      ref={ref}
      id="about"
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Star size={16} />
            About Me
            <Trophy size={16} />
          </motion.div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming ideas into extraordinary digital experiences through
            innovative design and cutting-edge development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Rocket size={24} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">My Journey</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                {' '}
                With{' '}
                <span className="text-blue-400 font-semibold">
                  7+ years of full stack experience
                </span>
                , I’ve partnered with startups and established teams to bring
                ideas from concept to launch. I enjoy building{' '}
                <span className="text-purple-400 font-semibold">
                  fast, seamless, and human-focused
                </span>{' '}
                applications that actually make a difference.{' '}
              </p>{' '}
              <p className="text-gray-300 leading-relaxed text-lg">
                {' '}
                I’m always curious about new tech and love exploring better ways
                to solve problems. Outside of coding, you’ll usually find me
                diving into design trends, contributing to open source, or
                sharing what I’ve learned with other developers.{' '}
              </p>
              {/* Enhanced Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <motion.div
                  className="group text-center p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl hover:from-blue-500/20 hover:to-cyan-500/20 transition-all duration-300 hover:scale-105"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                    300+
                  </div>
                  <div className="text-gray-300 font-medium">
                    Projects Completed
                  </div>
                </motion.div>
                <motion.div
                  className="group text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 hover:scale-105"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">
                    7+
                  </div>
                  <div className="text-gray-300 font-medium">
                    Years Experience
                  </div>
                </motion.div>
                <motion.div
                  className="group text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl hover:from-green-500/20 hover:to-emerald-500/20 transition-all duration-300 hover:scale-105"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">
                    100%
                  </div>
                  <div className="text-gray-300 font-medium">
                    Client Satisfaction
                  </div>
                </motion.div>
                <motion.div
                  className="group text-center p-6 bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/20 rounded-xl hover:from-orange-500/20 hover:to-red-500/20 transition-all duration-300 hover:scale-105"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl font-bold text-orange-400 mb-2 group-hover:text-orange-300 transition-colors">
                    24/7
                  </div>
                  <div className="text-gray-300 font-medium">
                    Support Available
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Target size={32} className="text-purple-400" />
              Skills & Expertise
            </h3>

            {/* Skill Bars */}
            <div className="space-y-6 mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <skill.icon size={20} className="text-blue-400" />
                      </div>
                      <div>
                        <span className="text-white font-semibold text-lg">
                          {skill.name}
                        </span>
                        <p className="text-gray-400 text-sm">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-gray-400 font-bold text-lg">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-800/50 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color} relative`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.1,
                        ease: 'easeOut',
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Code size={24} className="text-cyan-400" />
                Technologies I Work With
              </h4>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    viewport={{ once: true }}
                    className="group px-4 py-2 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 text-gray-300 rounded-lg text-sm font-medium hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-500/50 hover:text-white transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
