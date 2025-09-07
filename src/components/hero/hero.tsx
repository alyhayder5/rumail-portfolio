'use client';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
  Zap,
  Code2,
} from 'lucide-react';
import { Image } from '../image';
import Modern3DScene from './components/modern-3d-scene';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Modern 3D Background */}
      <Modern3DScene />

      {/* Subtle gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/60 to-slate-900/80 z-10"></div>

      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium mb-4 hover:scale-105 transition-transform duration-300">
                <Sparkles size={16} className="animate-pulse" />
                Hello, I&apos;m a Digital Architect
                <Zap size={16} className="animate-pulse" />
              </span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Rumail
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Abbas
              </span>
            </motion.h1>

            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 text-sm font-medium">
                  Available for work
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full">
                <Code2 size={16} className="text-purple-300" />
                <span className="text-purple-300 text-sm font-medium">
                  Full Stack Developer
                </span>
              </div>
            </motion.div>

            <motion.p
              className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              I create{' '}
              <span className="text-blue-400 font-semibold">
                websites and apps that feel good to use
              </span>{' '}
              — clean, fast, and thoughtfully designed. I love working on{' '}
              <span className="text-purple-400 font-semibold">
                ideas that bring real value
              </span>{' '}
              to people’s lives.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-xl hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Github
                  size={24}
                  className="text-gray-300 group-hover:text-white transition-colors duration-300"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-xl hover:from-blue-500/20 hover:to-cyan-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Linkedin
                  size={24}
                  className="text-gray-300 group-hover:text-white transition-colors duration-300"
                />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="group p-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-xl hover:from-red-500/20 hover:to-pink-500/20 hover:border-red-500/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25"
              >
                <Mail
                  size={24}
                  className="text-gray-300 group-hover:text-white transition-colors duration-300"
                />
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles size={20} />
                  View My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="group px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  <Zap size={20} />
                  Get In Touch
                </span>
              </button>
              <button className="group px-6 py-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/50 text-white font-bold rounded-xl hover:from-slate-700/50 hover:to-slate-600/50 hover:border-slate-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Download size={20} />
                Resume
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Image Section */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-lg">
              {/* Main Image Container with 3D Effects */}
              <div className="relative group">
                {/* 3D Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-700 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-1">
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      source="hero"
                      alt="hero image"
                      className="w-full h-96 object-cover"
                    />
                    {/* Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* 3D Floating Elements */}
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl -z-10 opacity-30 animate-float group-hover:opacity-50 transition-opacity duration-300"></div>
                <div
                  className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl -z-10 opacity-30 animate-float group-hover:opacity-50 transition-opacity duration-300"
                  style={{ animationDelay: '1s' }}
                ></div>
                <div
                  className="absolute top-1/2 -left-12 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full -z-10 opacity-20 animate-float group-hover:opacity-40 transition-opacity duration-300"
                  style={{ animationDelay: '2s' }}
                ></div>

                {/* Tech Stack Icons with Enhanced Styling */}
                <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 space-y-4">
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-2xl">⚛️</span>
                  </motion.div>
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-2xl">🚀</span>
                  </motion.div>
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-2xl">💻</span>
                  </motion.div>
                </div>

                {/* Additional Floating Tech Icons */}
                <div className="absolute -right-6 top-1/4 space-y-4">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300"
                    whileHover={{ rotate: -360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-xl">🔥</span>
                  </motion.div>
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300"
                    whileHover={{ rotate: -360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-xl">⚡</span>
                  </motion.div>
                </div>

                {/* Glow Effects */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <button
            onClick={() => scrollToSection('about')}
            className="group flex flex-col items-center text-white/60 hover:text-white transition-all duration-300"
          >
            <span className="text-sm mb-3 font-medium group-hover:scale-110 transition-transform duration-300">
              Discover More
            </span>
            <div className="relative">
              <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/60 transition-colors duration-300">
                <motion.div
                  className="w-1 h-3 bg-white/60 rounded-full mt-2 group-hover:bg-white transition-colors duration-300"
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
              <div className="absolute inset-0 w-8 h-12 border-2 border-transparent rounded-full group-hover:border-blue-500/50 group-hover:animate-ping transition-all duration-300"></div>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
