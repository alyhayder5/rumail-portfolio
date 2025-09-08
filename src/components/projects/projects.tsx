'use client';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  ArrowRight,
  Star,
  Zap,
  Code2,
  CreditCard,
  Utensils,
  Heart,
  Cloud,
  Wrench,
  Trophy,
  Building,
} from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      id: 2,
      title: 'Check QR Pay',
      description:
        'Increase productivity and reduce costs with Check, the comprehensive solution for ordering and paying from any QR code without registration.',
      image: '/api/placeholder/600/400',
      technologies: [
        'Javascript',
        'React',
        'Stripe',
        'Typescript',
        'Freedom Pay',
        'PostgreSQL',
        'Firebase',
        'Docker',
        'Kubernetes',
        'Github Actions',
        'AWS',
        'Sentry',
      ],
      featured: true,
      category: 'Digital Payment',
      liveUrl: 'https://checkqrpay.com/',
    },
    {
      id: 6,
      title: 'BiitTasker',
      description:
        'We help people own their time, their money, and their future by enabling direct, censorship resistant earning — in BTC, USDT, or fiat.',
      image: '/api/placeholder/600/400',
      technologies: [
        'Bitcoin',
        'Nest',
        'Noster',
        'Web3.js',
        'Svelte',
        'Ethereum',
        'MetaMask',
        'Biometric',
        'Docker',
        'AWS',
      ],
      featured: true,
      category: 'Web3',
      liveUrl: 'https://bittasker.com',
    },
    {
      id: 1,
      title: 'Go! Sushing',
      description:
        'Go! Sushing, the first sushi delivery restaurant in Madrid! Immerse yourself in the authentic Japanese sushi experience, where quality and tradition come together in every dish.',
      image: '/api/placeholder/600/400',
      technologies: [
        'React',
        'Primsa',
        'Nest',
        'Prisma',
        'TypeScript',
        'Tailwind CSS',
        'Node.js',
        'mongoDB',
        'AWS',
        'Nest.js',
      ],
      featured: false,
      category: 'Food Delivery',
      liveUrl: 'https://gosushing.com',
    },
    {
      id: 3,
      title: 'Moonbliss',
      description:
        'The First Social Network for Spiritual Souls. At Moonbliss, we are part of the New Earth, a community committed to promoting peace, happiness.',
      image: '/api/placeholder/600/400',
      technologies: [
        'Svelte',
        'Nest',
        'Stripe',
        'MongoDB',
        'Redis',
        'Docker',
        'Kubernetes',
      ],
      featured: false,
      category: 'spirituality',
      liveUrl: 'https://www.moonblissapp.com/en',
    },
    {
      id: 4,
      title: 'Picnic',
      description:
        'Picnic is built with privacy in mind. With Picnic app, your photos stay on your device, fully private and secure. We don’t upload to the cloud or store your media elsewhere. No ads, no tracking, no selling your data ever.',
      image: '/api/placeholder/600/400',
      technologies: [
        'Flutter',
        'Node.js',
        'AWS',
        'JWT',
        'Biometric Auth',
        'AWS',
      ],
      featured: false,
      category: 'Cloud Storage',
      liveUrl: 'https://picnic.photos',
    },
    {
      id: 5,
      title: 'Manitas',
      description:
        'Handyman at Home is here to help you. We offer a wide range of services in Barcelona. Choose the service, the day, the time and pay a fixed price, without last minute surprises.',
      image: '/api/placeholder/600/400',
      technologies: [
        'Typescript',
        'GraphQL',
        'React Native',
        'Python',
        'FastAPI',
        'Redis',
        'MongoDB',
      ],
      featured: false,
      category: 'Services',
      liveUrl: 'https://manitasapp.com/',
    },
    {
      id: 7,
      title: 'Padelmit',
      description:
        "Padelmit is the app for padel lovers. We'll be revealing everything you can do with the app soon. I'm sure you'll love it!",
      image: '/api/placeholder/600/400',
      technologies: [
        'React',
        'Socket IO',
        'Nest',
        'Web3.js',
        'Svelte',
        'Ethereum',
        'MetaMask',
        'Biometric',
        'Docker',
        'AWS',
      ],
      featured: false,
      category: 'Sports',
      liveUrl: 'https://padelmit.com',
    },
    {
      id: 8,
      title: 'CulturApp',
      description:
        'CulturApp is the platform that connects people with local culture. Discover cultural events, venues, and experiences near you.',
      image: '/api/placeholder/600/400',
      technologies: [
        'Next.js',
        'PostgreSQL',
        'Redis',
        'Web3.js',
        'Svelte',
        'Ethereum',
        'MetaMask',
        'Biometric',
        'Docker',
        'AWS',
      ],
      featured: false,
      category: 'Heritage',
      liveUrl: 'https://culturapp.es/',
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Digital Payment':
        return CreditCard;
      case 'Web3':
        return Zap;
      case 'Food Delivery':
        return Utensils;
      case 'spirituality':
        return Heart;
      case 'Cloud Storage':
        return Cloud;
      case 'Services':
        return Wrench;
      case 'Sports':
        return Trophy;
      case 'Heritage':
        return Building;
      default:
        return Code2;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Digital Payment':
        return 'from-green-500 to-emerald-500';
      case 'Web3':
        return 'from-yellow-500 to-orange-500';
      case 'Food Delivery':
        return 'from-red-500 to-pink-500';
      case 'spirituality':
        return 'from-purple-500 to-pink-500';
      case 'Cloud Storage':
        return 'from-blue-500 to-cyan-500';
      case 'Services':
        return 'from-orange-500 to-red-500';
      case 'Sports':
        return 'from-indigo-500 to-purple-500';
      case 'Heritage':
        return 'from-amber-500 to-yellow-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-slate-800 relative overflow-hidden"
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Star size={16} />
            Featured Work
            <Zap size={16} />
          </motion.div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I’ve worked on each one a mix of
            creativity, problem solving & a lot of late night coding sessions.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            const categoryColor = getCategoryColor(project.category);

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                  {/* Project Image */}
                  <div className="relative h-80 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="text-center text-white/60">
                        <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                          <CategoryIcon size={32} />
                        </div>
                        <p className="text-lg font-medium">Project Preview</p>
                      </div>
                    </div>

                    {/* Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Action Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={24} className="text-white" />
                      </motion.a>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${categoryColor} rounded-full text-white text-sm font-medium backdrop-blur-sm`}
                      >
                        <CategoryIcon size={16} />
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 rounded-full text-sm font-medium backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              More Projects
            </span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);
              const categoryColor = getCategoryColor(project.category);

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <div className="text-center text-white/60">
                        <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                          <CategoryIcon size={24} />
                        </div>
                        <p className="text-sm font-medium">Project Preview</p>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${categoryColor} rounded-full text-white text-xs font-medium backdrop-blur-sm`}
                      >
                        <CategoryIcon size={12} />
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} className="text-white" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs font-medium">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white font-bold rounded-xl hover:from-purple-500 hover:via-pink-500 hover:to-red-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Star size={20} />
            View All Projects
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
