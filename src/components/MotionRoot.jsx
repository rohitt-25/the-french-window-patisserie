import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Global motion. Sections opt in with data attributes rather than importing
 * GSAP themselves, so there is one place where timing and failure are handled.
 *
 * Presets are the database's (ui-ux-pro-max gsap.csv):
 *   Scroll Reveal  — 300-400ms, power1.out, y 8-16px so it reads as a fade
 *   Stagger List   — back.out(1.4), each 0.06, grid 'auto'
 *   Parallax       — small yPercent, scrub, decorative layers only
 */
export default function MotionRoot() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /**
     * Images fade in once decoded rather than flashing in half-loaded.
     *
     * `img[data-fade]` is opacity 0 in CSS, which means a photo that fails or
     * stalls would sit there as an invisible hole — and the GSAP failsafe below
     * cannot rescue it, since the hidden state is a stylesheet rule rather than
     * an inline style. So reveal on error too, and force everything visible
     * after 2.5s regardless: a broken photo must degrade to its alt text.
     */
    const images = Array.from(document.querySelectorAll('img[data-fade]'));
    const show = (img) => img.classList.add('is-in');
    images.forEach((img) => {
      if (img.complete && img.naturalWidth > 0) return show(img);
      img.addEventListener('load', () => show(img), { once: true });
      img.addEventListener('error', () => show(img), { once: true });
    });
    const imageFailsafe = setTimeout(() => images.forEach(show), 2500);

    if (reduce) {
      // Reveals start hidden in CSS-free markup only via GSAP, but be explicit:
      // with motion off, everything must simply be visible.
      gsap.set('[data-reveal], [data-stagger] > *, [data-word] > span', {
        clearProps: 'all',
      });
      return () => clearTimeout(imageFailsafe);
    }

    let lenis;
    let tickerFn;

    import('lenis')
      .then(({ default: Lenis }) => {
        lenis = new Lenis({ duration: 1.1, smoothWheel: true });
        // These three lines are load-bearing. Lenis takes over scrolling, so
        // without them ScrollTrigger never recalculates and every reveal stays
        // frozen at opacity 0 — the whole page below the hero goes invisible.
        lenis.on('scroll', ScrollTrigger.update);
        tickerFn = (time) => {
          try {
            lenis.raf(time * 1000);
          } catch {
            // A throw inside a ticker callback kills GSAP's entire tick loop.
            gsap.ticker.remove(tickerFn);
          }
        };
        gsap.ticker.add(tickerFn);
        gsap.ticker.lagSmoothing(0);
        ScrollTrigger.refresh();
      })
      .catch(() => ScrollTrigger.refresh());

    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 14,
          duration: 0.4,
          ease: 'power1.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
        });
      });

      gsap.utils.toArray('[data-stagger]').forEach((group) => {
        gsap.from(group.children, {
          opacity: 0,
          scale: 0.96,
          y: 16,
          duration: 0.45,
          ease: 'back.out(1.4)',
          stagger: { each: 0.06, from: 'start', grid: 'auto' },
          scrollTrigger: { trigger: group, start: 'top 85%' },
        });
      });

      gsap.utils.toArray('[data-rule]').forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          duration: 0.9,
          ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 92%' },
        });
      });

      // Decorative layers only — never text, never controls.
      gsap.utils.toArray('[data-parallax]').forEach((layer) => {
        gsap.to(layer, {
          yPercent: Number(layer.dataset.parallax) || -8,
          ease: 'none',
          scrollTrigger: { trigger: layer.parentElement, scrub: 0.5 },
        });
      });
    });

    /**
     * Failsafe. Reveals start hidden, so any motion failure renders as blank
     * sections — the worst outcome. Match on computed opacity rather than a
     * class name: each section uses its own selectors, and a net keyed to one
     * agreed class silently protects nothing once they drift apart.
     */
    const failsafe = setTimeout(() => {
      const stuck = Array.from(document.querySelectorAll('main *, footer *')).filter((el) => {
        if (parseFloat(getComputedStyle(el).opacity) >= 0.1) return false;
        const r = el.getBoundingClientRect();
        return r.width > 0 && r.height > 0;
      });
      if (stuck.length) gsap.set(stuck, { clearProps: 'opacity,transform,y,yPercent,scale' });
    }, 2000);

    return () => {
      clearTimeout(failsafe);
      clearTimeout(imageFailsafe);
      ctx.revert();
      if (tickerFn) gsap.ticker.remove(tickerFn);
      lenis?.destroy();
    };
  }, []);

  return null;
}
