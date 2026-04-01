export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-[#f8fafc] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-[#14b8a6] text-xs uppercase tracking-[0.3em] font-bold">Get In Touch</span>
          <h1 className="font-serif text-5xl font-bold text-[#0f172a] mt-2 mb-4">Contact Us</h1>
          <p className="text-[#64748b] max-w-2xl mx-auto">Have questions or want to collaborate? Fill out the form below or reach us directly at our office.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Form */}
          <div className="p-10 md:p-14">
            <h3 className="font-serif text-3xl font-bold text-[#0f172a] mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#64748b]">First Name</label>
                  <input type="text" className="w-full bg-[#f8fafc] border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-[#14b8a6] focus:ring-1 focus:ring-[#14b8a6]" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#64748b]">Last Name</label>
                  <input type="text" className="w-full bg-[#f8fafc] border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-[#14b8a6] focus:ring-1 focus:ring-[#14b8a6]" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#64748b]">Email Address</label>
                <input type="email" className="w-full bg-[#f8fafc] border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-[#14b8a6] focus:ring-1 focus:ring-[#14b8a6]" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#64748b]">Message</label>
                <textarea rows={5} className="w-full bg-[#f8fafc] border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-[#14b8a6] focus:ring-1 focus:ring-[#14b8a6] resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full py-4 bg-[#14b8a6] text-white font-bold rounded uppercase tracking-wider hover:bg-[#0d9488] transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* Map and Info */}
          <div className="bg-[#0f172a] text-white p-10 md:p-14 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-3xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white/50 uppercase tracking-wider mb-1">Phone</div>
                    <div className="text-sm md:text-md font-medium">+91 94948 08589<br/>+91 866 123 4567</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white/50 uppercase tracking-wider mb-1">Email</div>
                    <div className="text-sm font-medium break-all">studentunionfornation@gmail.com<br/>info@sunfoundation.org</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white/50 uppercase tracking-wider mb-1">Offices</div>
                    <div className="text-sm font-medium leading-relaxed max-w-[200px]">
                      <span className="text-[#14b8a6]">Main:</span> 123 Gandhi Road, Vijayawada, AP 520001<br/>
                      <span className="text-[#14b8a6]">Field:</span> Rural Development Center, Guntur District, AP
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-xl overflow-hidden shadow-lg border border-white/10 relative h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15448.977222137936!2d77.5910385!3d14.6706913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14b0b18fcc1c9%3A0xf6f6959ba0914cd6!2sAnantapur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
