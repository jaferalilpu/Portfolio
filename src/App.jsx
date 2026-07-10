import React, { Suspense, lazy } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Lazy load components below the fold to keep the initial bundle lightweight
const About = lazy(() => import('./components/About'))
const Expertise = lazy(() => import('./components/Expertise'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Certifications = lazy(() => import('./components/Certifications'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

// A simple, invisible loader skeleton to maintain smooth page layouts while chunks resolve
const SectionFallback = () => <div style={{ minHeight: '400px', contentVisibility: 'auto' }} />

function App() {
  return (
    <>
      {/* Critical components needed for immediate visual feedback render instantly */}
      <Preloader />
      <Navbar />
      <Hero />
      
      {/* Heavy content layers download asynchronously without blocking the user's view of the Hero */}
      <Suspense fallback={<SectionFallback />}>
        <About />
        <Expertise />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </Suspense>
    </>
  )
}

export default App