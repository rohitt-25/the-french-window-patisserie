import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const reviews = [
    {
      text: "I have heard about this place a lot but being a north indian we prefer our desi breakfast but this time me and my wife decided to give this place a visit. Vibe of this place is very chill. Even in the weekdays it was 80% full and people were working and enjoying food. Aesthetic of this place is brilliant, it's very simple yet classy.",
      author: "Sunil Bhati",
      rating: 5
    },
    {
      text: "Had an amazing experience at The French window Patisserie! The food was absolutely delicious, full of flavor, and served fresh. The atmosphere was warm, cozy, and perfect for relaxing with friends or family. The staff was friendly and attentive, making the whole visit even better.",
      author: "R M",
      rating: 5
    },
    {
      text: "Holllyyyyyy guacamole! The croissants are INSANE!! The crispy flaky layers are just amazing. Recommendation: - Aztec hot chocolate - Smoked Salmon Croissant... The combination of sweet spicy hot choco and the tasty yummy croissant is SO deadly...",
      author: "Kshitij Saxena",
      rating: 5
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(cardsRef.current, 
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-[#FEF2F2] px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <h2 className="font-['Calistoga'] text-3xl sm:text-5xl text-[#450A0A] mb-8 tracking-tight">
            Loved by 1,700+ Pune Diners
          </h2>
          <a 
            href="https://www.google.com/maps/search/?api=1&query=The%20French%20Window%20Patisserie&query_place_id=ChIJE4OEVQbBwjsRlB1PY4DXeF0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#A16207] text-[#FFFFFF] px-6 py-3 font-['JetBrains_Mono'] text-xs sm:text-sm hover:bg-[#855206] transition-colors duration-200 focus:outline-2 focus:outline-offset-2 focus:outline-[#DC2626] whitespace-nowrap min-h-[44px] flex items-center justify-center w-fit mx-auto"
          >
            4.3 STARS / 1,749 VERIFIED REVIEWS
          </a>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <article 
              key={idx} 
              ref={(el) => (cardsRef.current[idx] = el)}
              className="bg-[#FFFFFF] border border-[#FECACA] p-6 sm:p-8 flex flex-col justify-between"
            >
              <p className="font-['Inter'] text-[#450A0A] mb-8 leading-relaxed italic text-sm sm:text-base">
                "{review.text}"
              </p>
              <footer>
                <h3 className="font-['Calistoga'] text-[#450A0A] text-lg sm:text-xl">— {review.author}</h3>
                <p className="font-['JetBrains_Mono'] text-[#A16207] text-[10px] sm:text-xs mt-2 uppercase tracking-wider">
                  {review.rating} STARS
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
