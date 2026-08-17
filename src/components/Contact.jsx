import React from 'react';

const Contact = () => {
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
    <section className="bg-[#FEF2F2] py-16 px-6 md:px-12" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Opening Hours */}
        <div>
          <h2 id="contact-heading" className="font-['Calistoga'] text-4xl text-[#450A0A] mb-8">Opening Hours</h2>
          <div className="border border-[#FECACA] bg-[#FFFFFF] overflow-hidden">
            <table className="w-full text-left" aria-label="Weekly opening hours">
              <tbody>
                {hours.map((item, index) => (
                  <tr key={item.day} className={index !== hours.length - 1 ? "border-b border-[#FECACA]" : ""}>
                    <td className="py-4 px-6 text-[#57606F] font-['JetBrains_Mono'] text-sm uppercase tracking-wider">{item.day}</td>
                    <td className="py-4 px-6 text-[#450A0A] font-['Inter'] font-medium">{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Conversion CTA */}
        <div className="flex flex-col justify-center">
          <h2 className="font-['Calistoga'] text-4xl text-[#450A0A] mb-4">Secure Your Table</h2>
          <p className="font-['Inter'] text-[#57606F] text-lg mb-8 leading-relaxed">
            Experience the finest French patisserie in Pune. Join us at Lane Number 5, next to Malaka Spice, Koregaon Park, Pune, Maharashtra 411001.
          </p>
          
          <div className="flex flex-col gap-4">
            <a 
              href="https://wa.me/919766644202" 
              className="bg-[#DC2626] text-[#FFFFFF] py-4 px-8 text-center font-['Inter'] font-semibold hover:bg-[#B91C1C] transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-[#DC2626] min-h-[44px] flex items-center justify-center whitespace-nowrap"
            >
              Reserve via WhatsApp
            </a>
            <a 
              href="tel:+919766644202" 
              className="bg-[#FFFFFF] text-[#DC2626] border-2 border-[#DC2626] py-4 px-8 text-center font-['Inter'] font-semibold hover:bg-[#FEF2F2] transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-[#DC2626] min-h-[44px] flex items-center justify-center whitespace-nowrap"
            >
              Call Direct
            </a>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=The+French+Window+Patisserie+Koregaon+Park" 
              className="text-[#A16207] py-4 text-center font-['JetBrains_Mono'] border-b-2 border-[#A16207] w-fit mx-auto min-h-[44px] focus:outline-2 focus:outline-offset-2 focus:outline-[#DC2626]"
            >
              Get Directions
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
