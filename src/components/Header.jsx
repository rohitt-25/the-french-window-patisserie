import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FEF2F2]/90 backdrop-blur-md border-b border-[#FECACA]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Branding */}
        <div className="flex items-center">
          <a
            href="/"
            className="font-['Calistoga'] text-xl md:text-2xl text-[#450A0A] tracking-tight hover:opacity-80 transition-opacity focus:outline-2 focus:outline-offset-2 focus:outline-[#DC2626] rounded-sm min-h-[44px] flex items-center"
          >
            The French Window
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <span className="font-['JetBrains_Mono'] text-sm text-[#57606F]">
            Lane 5, Koregaon Park
          </span>
          <a
            href="tel:+919766644202"
            className="font-['JetBrains_Mono'] text-sm text-[#450A0A] hover:text-[#DC2626] transition-colors whitespace-nowrap focus:outline-2 focus:outline-offset-2 focus:outline-[#DC2626] rounded-sm min-h-[44px] flex items-center"
          >
            +91 97666 44202
          </a>
          <a 
            href="https://wa.me/919766644202" 
            className="bg-[#DC2626] text-[#FFFFFF] px-6 py-3 font-['Inter'] text-sm font-medium hover:bg-[#B91C1C] transition-colors whitespace-nowrap focus:outline-2 focus:outline-offset-2 focus:outline-[#DC2626] rounded-sm"
          >
            Book Table
          </a>
        </nav>

        {/* Mobile: calling is the primary action for a cafe, so the number is a
            visible tappable control here — never hidden behind a breakpoint. */}
        <div className="md:hidden flex items-center gap-1">
          <a
            href="tel:+919766644202"
            aria-label="Call The French Window Patisserie on +91 97666 44202"
            className="min-h-[44px] min-w-[44px] flex items-center justify-center px-2 text-[#450A0A] hover:text-[#DC2626] transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-[#DC2626] rounded-sm"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          <a
            href="https://wa.me/919766644202"
            className="bg-[#DC2626] text-[#FFFFFF] px-4 font-['Inter'] text-xs font-bold uppercase tracking-wider shadow-sm min-h-[44px] flex items-center justify-center focus:outline-2 focus:outline-offset-2 focus:outline-[#DC2626] rounded-sm whitespace-nowrap"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
