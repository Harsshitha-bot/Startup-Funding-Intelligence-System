import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ProblemStatement from './components/ProblemStatement';
import Features from './components/Features';
import Languages from './components/Languages';
import QuerySection from './components/QuerySection';
import About from './components/About';
import Footer from './components/Footer';


export default function App() {
  const featuresRef = useRef(null);
  const languagesRef = useRef(null);
  const queryRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full opacity-10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Components */}
      <Header 
        scrollToFeatures={() => scrollToSection(featuresRef)}
        scrollToLanguages={() => scrollToSection(languagesRef)}
        scrollToQuery={() => scrollToSection(queryRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
      />
      
      <Hero scrollToQuery={() => scrollToSection(queryRef)} />
      <Stats />
      <ProblemStatement />
      
      <div ref={featuresRef}>
        <Features />
      </div>
      
      <div ref={languagesRef}>
        <Languages />
      </div>
      
      <div ref={queryRef}>
        <QuerySection />
      </div>
      
      <div ref={aboutRef}>
        <About />
      </div>
      
      <Footer 
        scrollToFeatures={() => scrollToSection(featuresRef)}
        scrollToLanguages={() => scrollToSection(languagesRef)}
        scrollToQuery={() => scrollToSection(queryRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
      />
    </div>
  );
}