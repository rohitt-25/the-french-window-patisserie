import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    tag: "ARTISANAL PATISSERIE",
    desc: "Delicate, hand-crafted macarons, tarts, and croissants baked fresh daily.",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm9Ti9C1UQlRicXkQuRmLeDZtNF-NBQrNdWk8I38eJ6jhI5T2g_r1ioVaPi56QGF-LhRSItEI_iJuZ-xqtTZ_nz4ZtaGxA0p4n8DgV1-aBAYWOHYZaGKkeNOP8fd5wwypYGX0ewpexoO5Bo=w1920-h1080-k-no",
    alt: "Artisanal French pastries on display at the patisserie"
  },
  {
    tag: "CLASSIC FRENCH BISTRO",
    desc: "Savour authentic quiches, croque monsieurs, and gourmet mains.",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkvrkv_kTX6vIbgYTxZvfFbSTVrUAzpA-w16mbziqEFtCfBM_6OW5Ev0EjhpS-fd-tKTpHRZksjXc7Nd-xAraKz69og8Ug7b3nyNX6g1JDsyyDiZcf6PNlyjfIifHKLJtv7REfslh6sonY=w1920-h1080-k-no",
    alt: "Freshly prepared classic European breakfast plate"
  },
  {
    tag: "COURTYARD HIGH TEA",
    desc: "An elegant afternoon tea experience under the Koregaon Park canopy.",
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkzYzJss_jk0CTwkd0A82MVXqL_rVC2azbmSGU8pk9tbATCVdqI8Hai0ZeveaoGNy0k5ehOIAArRAYQq5TCHu977tYSm5i8eWugd2RlHhg2jcriGlZZl33gLVk0PfznMOyUUT0ja7sgCP9T=w1920-h1080-k-no",
    alt: "Warm, freshly brewed pour-over coffee on an outdoor table"
  }
];

export default function Services() {
  const sectionRef = useRef(null);
  // Reveal is owned by this section rather than a shared hook — the animation
  // is scoped to it, so its lifecycle should be too.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.from('.reveal', {
        opacity: 0,
        y: 16,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-16 md:py-24 bg-[#FEF2F2] px-5 sm:px-6 md:px-12 w-full overflow-hidden"
      aria-label="Our Services"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="reveal mb-12 md:mb-16">
          <h2 className="font-['Calistoga'] text-4xl md:text-6xl text-[#450A0A] mb-6">
            Our Services
          </h2>
          <p className="font-['Inter'] text-[#57606F] text-lg max-w-2xl">
            Experience the intersection of Parisian tradition and local artistry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 w-full">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`reveal flex flex-col w-full ${
                index === 0 ? 'md:col-span-7' : 
                index === 1 ? 'md:col-span-5' : 'md:col-span-12'
              }`}
            >
              <article className="bg-[#FFFFFF] border border-[#FECACA] p-4 h-full flex flex-col focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#DC2626]">
                <div className="overflow-hidden mb-6 w-full">
                  <img 
                    src={service.image} 
                    alt={service.alt}
                    className="w-full aspect-[16/10] object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                    width="600"
                    height="375"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-['JetBrains_Mono'] text-xs text-[#57606F] tracking-wider block mb-3 uppercase">
                    {`0${index + 1} / ${service.tag}`}
                  </h3>
                  <p className="font-['Inter'] text-[#450A0A] text-lg leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
