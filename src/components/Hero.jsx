import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.to(imageRef.current, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100dvh] flex flex-col md:flex-row items-center bg-[#FEF2F2] pt-28 pb-16 px-6 md:px-12 lg:px-24"
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8 z-10">
        <h1 className="font-['Calistoga'] text-[clamp(3rem,8vw,5rem)] leading-[1.1] text-[#450A0A] tracking-[-1.5px]">
          Parisian romance, baked fresh in Koregaon Park.
        </h1>
        
        <p className="font-['Inter'] text-lg md:text-xl text-[#57606F] max-w-lg leading-relaxed">
          Pune’s beloved French escape with over 1,700 five-star dining reviews on Lane 5.
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
          <a
            href="https://wa.me/919766644202"
            className="h-[44px] px-8 flex items-center justify-center bg-[#DC2626] text-[#FFFFFF] font-['JetBrains_Mono'] text-sm uppercase tracking-wider hover:bg-[#B91C1C] focus:outline-2 focus:outline-offset-2 focus:outline-[#DC2626] transition-colors duration-200 whitespace-nowrap"
          >
            Reserve via WhatsApp
          </a>
          <a
            href="tel:+919766644202"
            className="h-[44px] px-2 flex items-center justify-center border-b-2 border-[#A16207] text-[#A16207] font-['JetBrains_Mono'] text-sm uppercase tracking-wider hover:opacity-80 focus:outline-2 focus:outline-offset-2 focus:outline-[#DC2626] transition-opacity duration-200 whitespace-nowrap"
          >
            Call Direct
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-16 z-10">
        <div className="relative aspect-[4/3] w-full overflow-hidden shadow-2xl">
          <img
            ref={imageRef}
            src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkmLlVdH3YJdzd6f5VK9DxLT0dCp5R7_H8e2eBLeKYa_yt1Y1Hwlcl6TciwePboOOKJ8zbv7D20oE3TZwX63IGx51AU03D6OIe3-4Jz-15HD6b66y0VUMa7eMfc8ccgcIgpsfF73i-Gpva6=w1920-h1080-k-no"
            alt="Charming exterior facade of the French Window Patisserie"
            className="w-full h-full object-cover"
            fetchPriority="high"
            width="960"
            height="720"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
