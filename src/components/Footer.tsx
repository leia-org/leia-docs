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
                placeholder="contact@leia.ovh"
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
              © {currentYear} LEIA Team. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
