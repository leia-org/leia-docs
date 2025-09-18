import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Hero from '@site/src/components/Hero';
import Features from '@site/src/components/Features';
import About from '@site/src/components/About';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Create your Custom AI Assistant`}
      description="LEIA allows you to create unique artificial intelligence assistants that understand exactly what you need. Customize personality, behavior, and purpose to have the perfect assistant for you."
      wrapperClassName="homepage"
    >
      <div className="min-h-screen bg-white">
        <main>
          <Hero />
          <Features />
          <About />
        </main>
      </div>
    </Layout>
  );
}
