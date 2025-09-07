'use client';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Star,
  Zap,
  Rocket,
  Heart,
} from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Suspense, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 3D Particle System for Contact
function ContactParticles({ count = 1000 }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const tempObject = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = new Array(count).fill(0).map(() => ({
      position: [
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
      ],
      scale: Math.random() * 0.3 + 0.1,
      speed: Math.random() * 0.01 + 0.005,
    }));
    return temp;
  }, [count]);

  useFrame(() => {
    if (mesh.current) {
      particles.forEach((particle, i) => {
        particle.position[2] += particle.speed;
        if (particle.position[2] > 25) {
          particle.position[2] = -25;
        }

        tempObject.position.set(
          particle.position[0],
          particle.position[1],
          particle.position[2]
        );
        tempObject.scale.setScalar(particle.scale);
        tempObject.updateMatrix();
        mesh.current!.setMatrixAt(i, tempObject.matrix);
      });
      mesh.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color="#8b5cf6" transparent opacity={0.6} />
    </instancedMesh>
  );
}

// 3D Floating Icons
function FloatingIcons() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.1;
      group.current.children.forEach((child, i) => {
        child.position.y = Math.sin(state.clock.elapsedTime + i) * 0.3;
        child.rotation.x = state.clock.elapsedTime * 0.2;
      });
    }
  });

  return (
    <group ref={group}>
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 6) * Math.PI * 2) * 4,
            Math.sin((i / 6) * Math.PI * 2) * 0.5,
            Math.sin((i / 6) * Math.PI * 2) * 4,
          ]}
        >
          <boxGeometry args={[0.2, 0.2, 0.2]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? '#3b82f6' : '#8b5cf6'}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

// 3D Contact Scene
function ContactScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <pointLight position={[-10, -10, -5]} color="#3b82f6" intensity={0.3} />
      <pointLight position={[10, -10, 5]} color="#8b5cf6" intensity={0.3} />
      <ContactParticles count={800} />
      <FloatingIcons />
    </>
  );
}

export default function ContactSection() {
  const ref = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'rumail.abbas@example.com',
      href: 'mailto:rumail.abbas@example.com',
      color: 'from-blue-500 to-cyan-500',
      description: 'Send me an email anytime',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      color: 'from-green-500 to-emerald-500',
      description: 'Call me for urgent matters',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      href: '#',
      color: 'from-purple-500 to-pink-500',
      description: 'Available for remote work',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+1 (555) 123-4567',
      href: 'https://wa.me/15551234567',
      color: 'from-green-600 to-emerald-600',
      description: 'Quick chat on WhatsApp',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub',
      color: 'hover:text-gray-300',
      description: 'Check out my code',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
      color: 'hover:text-blue-400',
      description: 'Connect professionally',
    },
    {
      icon: Twitter,
      href: 'https://twitter.com',
      label: 'Twitter',
      color: 'hover:text-blue-300',
      description: 'Follow for updates',
    },
    {
      icon: Mail,
      href: 'mailto:rumail.abbas@example.com',
      label: 'Email',
      color: 'hover:text-red-400',
      description: 'Send me a message',
    },
  ];

  return (
    <section
      ref={ref}
      id="contact"
      className="py-20 bg-slate-800 relative overflow-hidden"
    >
      {/* 3D Background Canvas */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
          <Suspense fallback={null}>
            <ContactScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

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
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500/20 to-red-500/20 backdrop-blur-sm border border-pink-500/30 rounded-full text-pink-300 text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Heart size={16} />
            Let's Connect
            <Rocket size={16} />
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-white via-pink-100 to-red-100 bg-clip-text text-transparent">
              Ready to Build
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
              Something Amazing?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss your next project and create something extraordinary
            together. I'm always excited to work on new challenges!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Star className="text-yellow-400" size={32} />
              Get In Touch
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question, want to collaborate, or just want to
              say hi, feel free to reach out! I typically respond within 24
              hours.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-6 p-6 bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
                >
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-r ${info.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-gray-300 font-medium mb-1">
                      {info.value}
                    </p>
                    <p className="text-gray-400 text-sm">{info.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Zap className="text-cyan-400" size={28} />
                Follow Me
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`group p-4 bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm rounded-xl text-gray-400 ${social.color} transition-all duration-300 hover:scale-105 hover:shadow-lg border border-slate-700/50 hover:border-blue-500/50`}
                  >
                    <div className="flex items-center gap-3">
                      <social.icon size={20} />
                      <div>
                        <p className="font-semibold">{social.label}</p>
                        <p className="text-xs text-gray-500">
                          {social.description}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Send className="text-purple-400" size={32} />
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-300 mb-3"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-300 mb-3"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-300 mb-3"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-300 mb-3"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white font-bold py-4 px-6 rounded-xl hover:from-purple-500 hover:via-pink-500 hover:to-red-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                    <Rocket size={20} />
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300 text-center backdrop-blur-sm"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Heart size={20} className="text-green-400" />
                    Message sent successfully! I'll get back to you soon.
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300 text-center backdrop-blur-sm"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Zap size={20} className="text-red-400" />
                    Something went wrong. Please try again.
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
