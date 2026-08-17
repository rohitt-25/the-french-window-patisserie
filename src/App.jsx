import React from 'react';
import MotionRoot from './components/MotionRoot';
import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Story from './components/Story';
import Orders from './components/Orders';
import Quote from './components/Quote';
import Voices from './components/Voices';
import Visit from './components/Visit';
import Footer from './components/Footer';

/**
 * Composition only — every child owns its own <section>, container and padding.
 *
 * Order follows the database's "Hero + Testimonials + CTA" conversion pattern:
 * social proof earns the ask, so Voices sits immediately before Visit rather
 * than being buried at the bottom.
 */
export default function App() {
  return (
    <div className="bg-cream text-ink">
      <a
        href="#story"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-5 focus:py-3 focus:text-cream"
      >
        Skip to content
      </a>

      <MotionRoot />
      <Header />

      <main>
        <Hero />
        <Ticker />
        <Story />
        <Orders />
        <Quote />
        <Voices />
        <Visit />
      </main>

      <Footer />
    </div>
  );
}
