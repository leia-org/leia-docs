import React from 'react'
import { ArrowRight } from 'lucide-react'
import ScrollRevealParagraph from './ScrollRevealParagraph'

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center bg-white">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-semibold text-black leading-[1.1] tracking-tight">
                Create your Custom
                <span className="text-gray-600 block">AI Assistant</span>
              </h1>
              <div className="max-w-2xl mx-auto">
                <ScrollRevealParagraph 
                  paragraph="LEIA allows you to create unique artificial intelligence assistants that understand exactly what you need. Customize personality, behavior, and purpose to have the perfect assistant for you."
                  className="text-xl text-gray-500"
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/docs/intro" 
                className="modern-button modern-button--dark px-8 py-4 flex items-center justify-center gap-2 no-underline hover:no-underline"
              >
                Get Started Now
                <ArrowRight size={20} />
              </a>
              <button className="modern-button px-8 py-4">
                View Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-semibold text-black">3</div>
                <div className="text-sm text-gray-500">Simple Steps</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-black">∞</div>
                <div className="text-sm text-gray-500">Customizations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-black">24/7</div>
                <div className="text-sm text-gray-500">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
