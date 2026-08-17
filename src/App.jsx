import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      revealElements.forEach((el) => {
        gsap.fromTo(el, 
          { opacity: 0, y: 16 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.6, 
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    });

    /**
     * Reveals start hidden, so any failure to fire renders as a blank page.
     * Match on the actual computed state rather than a class name — each
     * section animates its own elements with its own selectors, and a failsafe
     * keyed to one agreed class silently protects nothing when they diverge.
     */
    const failsafe = setTimeout(() => {
      const stuck = Array.from(document.querySelectorAll('main *, footer *')).filter((el) => {
        const cs = getComputedStyle(el);
        if (parseFloat(cs.opacity) >= 0.1) return false;
        const r = el.getBoundingClientRect();
        return r.width > 0 && r.height > 0;
      });
      if (stuck.length) gsap.set(stuck, { clearProps: 'opacity,transform,y,yPercent' });
    }, 2000);

    return () => {
      mm.revert();
      clearTimeout(failsafe);
    };
  }, []);

  return (
    <div className="min-h-[100dvh] bg-[#FEF2F2] text-[#450A0A] font-['Inter'] selection:bg-[#DC2626] selection:text-white">

      {/* Grain lives in index.html as a static data-URI layer. A live
          feTurbulence filter over the full viewport repaints on every scroll
          frame and is the single most expensive thing on a mid-range phone. */}

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Services />
          <Reviews />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
