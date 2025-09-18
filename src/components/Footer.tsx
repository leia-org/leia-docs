import React from 'react'
import { Mail, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    producto: [
      { name: 'Features', href: '#caracteristicas' },
      { name: 'Documentation', href: '/docs/intro' },
      { name: 'API', href: '/docs/api' },
      { name: 'Tutorials', href: '/docs/tutorial-basics/create-a-document' }
    ],
    empresa: [
      { name: 'About', href: '#acerca' },
      { name: 'Blog', href: '/blog' },
      { name: 'Team', href: '#team' },
      { name: 'Contact', href: '#contacto' }
    ],
    soporte: [
      { name: 'Help Center', href: '/docs/intro' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Community', href: '#comunidad' },
      { name: 'Contact', href: '#contacto' }
    ],
    legal: [
      { name: 'Privacy', href: '#privacidad' },
      { name: 'Terms', href: '#terminos' },
      { name: 'Cookies', href: '#cookies' },
      { name: 'Security', href: '#seguridad' }
    ]
  }

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' }
  ]

  return (
    <footer id="contacto" className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container-max py-24">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="/img/LEIALogo.png"
                alt="LEIA Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-semibold text-white">LEIA</span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              The most advanced artificial intelligence platform, 
              designed to boost your productivity and transform your digital experience.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={18} />
                <span>contacto@leia.ovh</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} />
                <span>Seville, Spain</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.producto.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors no-underline hover:no-underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors no-underline hover:no-underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Support
            </h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.soporte.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors no-underline hover:no-underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors no-underline hover:no-underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-900 rounded-2xl p-12 mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-semibold text-white mb-4">
              Stay updated
            </h3>
            <p className="text-gray-400 mb-8 text-lg">
              Receive the latest news, updates, and AI tips directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="contacto@leia.ovh"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-gray-500 focus:outline-none"
              />
              <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} LEIA. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors no-underline hover:no-underline"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
