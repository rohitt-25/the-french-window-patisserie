import React from 'react';

export default function Footer() {
  const hours = [
    { day: 'Monday', time: '9 AM to 11 PM' },
    { day: 'Tuesday', time: '9 AM to 11 PM' },
    { day: 'Wednesday', time: '9 AM to 11 PM' },
    { day: 'Thursday', time: '9 AM to 11 PM' },
    { day: 'Friday', time: '8 AM to 11 PM' },
    { day: 'Saturday', time: '8 AM to 11 PM' },
    { day: 'Sunday', time: '8 AM to 11 PM' },
  ];

  return (
    <footer className="bg-[#450A0A] text-[#FEF2F2] pt-24 pb-12 px-6 border-t-4 border-[#A16207]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        
        <section>
          <h3 className="font-['JetBrains_Mono'] text-sm text-[#F87171] uppercase tracking-widest mb-8">Opening Hours</h3>
          <table className="w-full font-['Inter'] text-[#FEF2F2]">
            <tbody>
              {hours.map((row) => (
                <tr key={row.day} className="border-b border-[#A16207]/30">
                  <td className="py-2">{row.day}</td>
                  <td className="py-2 text-right">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="flex flex-col justify-between">
          <div>
            <h3 className="font-['JetBrains_Mono'] text-sm text-[#F87171] uppercase tracking-widest mb-8">Location</h3>
            <address className="font-['Inter'] text-lg leading-relaxed not-italic mb-16">
              Lane Number 5, next to Malaka Spice,<br />
              Koregaon Park, Pune,<br />
              Maharashtra 411001, India
            </address>
            <a
              href="https://www.google.com/maps/search/?api=1&query=The%20French%20Window%20Patisserie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-[44px] font-['JetBrains_Mono'] text-sm text-[#E0A93A] hover:text-[#FFFFFF] underline underline-offset-4 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-[#E0A93A] rounded-sm"
            >
              Get Directions
            </a>

            {/* Calling is how most people actually book a table here, so the
                number is full-size text rather than an icon or a link label. */}
            <div className="mt-12">
              <h3 className="font-['JetBrains_Mono'] text-sm text-[#F87171] uppercase tracking-widest mb-4">
                Call Us
              </h3>
              <a
                href="tel:+919766644202"
                className="inline-flex items-center min-h-[44px] font-['Calistoga'] text-2xl md:text-3xl text-[#FEF2F2] hover:text-[#E0A93A] transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-[#E0A93A] rounded-sm"
              >
                +91 97666 44202
              </a>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="font-['JetBrains_Mono'] text-sm text-[#F87171] uppercase tracking-widest mb-6">Secure Your Table</h3>
            <a 
              href="https://wa.me/919766644202" 
              className="inline-flex items-center justify-center h-[48px] px-12 bg-[#DC2626] text-[#FFFFFF] font-['Inter'] font-bold hover:bg-[#B91C1C] transition-colors w-full md:w-auto"
            >
              Reserve via WhatsApp
            </a>
          </div>
        </section>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-[#A16207]/30 font-['JetBrains_Mono'] text-[11px] text-[#E0A93A] flex flex-col md:flex-row justify-between gap-6">
        <p>© {new Date().getFullYear()} The French Window Patisserie. All rights reserved.</p>
        <p>Pune's Premier French Dining Experience</p>
      </div>

    </footer>
  );
}
