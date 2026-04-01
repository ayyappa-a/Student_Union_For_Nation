import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-full bg-white relative overflow-hidden">
                <Image src="/logo.jpeg" alt="SUN Logo" fill className="object-cover" unoptimized />
              </div>
              <span className="font-serif text-xl font-bold text-white tracking-tight leading-tight">Student Union For Nation</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Serving the nation since 2014. Empowering underprivileged communities through sustainable healthcare, education, and economic opportunities across India.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/student_union_for_nation/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:scale-110 transition-transform flex items-center justify-center shadow-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.facebook.com/p/Student-Union-for-Nation-SUN-100067494638158/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#1877F2] hover:scale-110 transition-transform flex items-center justify-center shadow-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.youtube.com/channel/UCgnDBij5skvCSfHEMBcUYKQ" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#FF0000] hover:scale-110 transition-transform flex items-center justify-center shadow-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          {/* Our Partners */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-5 text-white/60">Our Initiatives</h3>
            <ul className="space-y-3">
              {["Education Support", "Health Camps", "Environment Drives", "Women Empowerment", "Emergency Relief"].map((p) => (
                <li key={p}>
                  <Link href="/works" className="text-white/50 text-sm hover:text-[#14b8a6] transition-colors cursor-pointer">{p}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-5 text-white/60">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Works", href: "/works" },
                { name: "Volunteer", href: "/volunteer" },
                { name: "Photo Gallery", href: "/gallery" },
                { name: "Contact Us", href: "/contact" },
              ].map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-white/50 text-sm hover:text-[#14b8a6] transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-5 text-white/60">Contact Us</h3>
            <p className="text-white/50 text-sm mb-6">Reach out to us for any queries, collaborations, or support.</p>
            
            <div className="space-y-4">
              <a href="tel:9494808589" className="flex items-center gap-3 text-white/70 hover:text-[#14b8a6] text-sm transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone size={14} />
                </div>
                <span>+91 94948 08589 / 866 123 4567</span>
              </a>
              <a href="mailto:studentunionfornation@gmail.com" className="flex items-center gap-3 text-white/70 hover:text-[#14b8a6] text-sm transition-colors break-all">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Mail size={14} />
                </div>
                <span>studentunionfornation@<br/>gmail.com</span>
              </a>
              <a href="https://maps.app.goo.gl/YGB56izum2qRZshn6" target="_blank" rel="noreferrer" className="flex items-start gap-3 text-white/70 hover:text-[#14b8a6] text-sm transition-colors pt-1">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={14} />
                </div>
                <span>123 Gandhi Road, Vijayawada,<br/>AP 520001, India</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs font-mono text-center md:text-left">
            © {new Date().getFullYear()} Student Union For Nation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
