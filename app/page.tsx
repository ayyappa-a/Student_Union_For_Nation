"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Real Unsplash Indian people images
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1800&q=90&auto=format&fit=crop",
  cause1: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=600&q=80&auto=format&fit=crop",
  cause2: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80&auto=format&fit=crop",
  cause3: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80&auto=format&fit=crop",
  about1: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=700&q=80&auto=format&fit=crop",
  about2: "https://images.unsplash.com/photo-1597733336794-12d05021d510?w=700&q=80&auto=format&fit=crop",
  social1: "https://images.unsplash.com/photo-1608111149732-8b8f16c8a7df?w=600&q=80&auto=format&fit=crop",
  social2: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80&auto=format&fit=crop",
  social3: "https://images.unsplash.com/photo-1508433957232-3107f5fd5995?w=600&q=80&auto=format&fit=crop",
  social4: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=600&q=80&auto=format&fit=crop",
};

const GALLERY_IMAGES = [
  "IMG_20260401_163121.jpg", "IMG_20260401_163132.jpg", "IMG_20260401_163146.jpg", "IMG_20260401_163158.jpg",
  "IMG_20260401_163215.jpg", "IMG_20260401_163227.jpg", "IMG_20260401_163240.jpg", "IMG_20260401_163250.jpg",
  "IMG_20260401_163302.jpg", "IMG_20260401_163327.jpg", "IMG_20260401_163337.jpg", "IMG_20260401_163348.jpg",
  "IMG_20260401_163358.jpg", "IMG_20260401_163412.jpg", "IMG_20260401_163425.jpg", "IMG_20260401_163436.jpg",
  "IMG_20260401_163445.jpg", "IMG_20260401_163457.jpg"
];

const CAUSES = [
  { title: "Education Support", tag: "Education", img: IMAGES.cause1, raised: "₹6,50,000", goal: "₹10,00,000", pct: 65, color: "#14b8a6" },
  { title: "Health Camps", tag: "Healthcare", img: IMAGES.cause2, raised: "₹12,00,000", goal: "₹15,00,000", pct: 80, color: "#f59e0b" },
  { title: "Environment Drives", tag: "Environment", img: IMAGES.cause3, raised: "₹5,00,000", goal: "₹5,00,000", pct: 100, color: "#ef4444" },
];

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. BANNER (Hero) */}
      <section className="relative h-screen min-h-[600px] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image src={IMAGES.hero} alt="Student Union For Nation" fill className="object-cover" priority unoptimized />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/70 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
            <span className="text-[#14b8a6] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Help Us Change Lives
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 shadow-sm">
              EMPOWERING THE NATION,
              <br />
              <span className="text-[#f59e0b]">ONE STEP AT A TIME</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-xl">
              Every contribution sparks real change in the lives of families across India. Together we uplift communities, one rupee at a time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/volunteer" className="px-8 py-4 bg-[#14b8a6] hover:bg-[#0d9488] text-white font-bold rounded uppercase tracking-wider transition-all hover:scale-105 shadow-lg">
                Join As Volunteer
              </Link>
              <Link href="/works" className="px-8 py-4 border border-white/30 hover:border-white hover:bg-white/10 text-white font-bold rounded uppercase tracking-wider transition-all">
                Our Works
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 1.5 NUMBERS (Impact Counters) */}
      <section className="bg-[#0f172a] text-white py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="pt-6 md:pt-0">
              <div className="font-serif text-5xl font-bold text-[#14b8a6] mb-2 tracking-tighter">50,000+</div>
              <div className="text-white/70 font-bold uppercase tracking-widest text-xs">Lives Impacted</div>
            </div>
            <div className="pt-6 md:pt-0">
              <div className="font-serif text-5xl font-bold text-[#14b8a6] mb-2 tracking-tighter">25k+</div>
              <div className="text-white/70 font-bold uppercase tracking-widest text-xs">Lives Touched via Events</div>
            </div>
            <div className="pt-6 md:pt-0">
              <div className="font-serif text-5xl font-bold text-[#14b8a6] mb-2 tracking-tighter">15+</div>
              <div className="text-white/70 font-bold uppercase tracking-widest text-xs">States Active</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MISSION (About Us / Story) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div {...fadeUp}>
              <span className="text-[#14b8a6] text-xs uppercase tracking-[0.3em] font-bold">Our Mission</span>
              <h2 className="font-serif text-4xl font-bold text-[#0f172a] mt-2 mb-6 leading-tight">
                Serving the nation since{" "}
                <span className="text-[#14b8a6]">2014</span>. We believe in creating a lasting impact.
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {[
                  { n: "01", t: "Education Access", d: "Providing free learning kits to rural schools." },
                  { n: "02", t: "Health Camps", d: "Mobile clinics providing free screenings and medicines." },
                  { n: "03", t: "Environment Drives", d: "Tree planting and sustainable ecological programs." },
                  { n: "04", t: "Women Empowerment", d: "Skill training to build financial independence." },
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="font-mono text-2xl font-black text-[#14b8a6] opacity-50 leading-none mt-1">{step.n}</div>
                    <div>
                      <h4 className="font-bold text-[#0f172a] mb-1">{step.t}</h4>
                      <p className="text-[#64748b] text-sm leading-relaxed">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="mt-10 inline-flex items-center px-7 py-3 bg-[#14b8a6] text-white font-bold rounded text-sm uppercase tracking-wider hover:bg-[#0d9488] transition-all shadow hover:-translate-y-0.5">
                Read Our Full Story <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
            {/* Images */}
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image src={IMAGES.about1} alt="Indian children in classroom" fill className="object-cover" unoptimized />
              </div>
              <div className="relative h-64 mt-8 rounded-lg overflow-hidden shadow-lg">
                <Image src={IMAGES.about2} alt="Indian woman helping kids" fill className="object-cover" unoptimized />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. WORKS (Our Projects / Highlights) */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <motion.div {...fadeUp}>
              <span className="text-[#14b8a6] text-xs uppercase tracking-[0.3em] font-bold">What We Do</span>
              <h2 className="font-serif text-4xl font-bold text-[#0f172a] mt-2">Projects & Highlights</h2>
            </motion.div>
            <Link href="/works" className="inline-flex items-center gap-2 px-6 py-3 border border-[#0f172a] text-[#0f172a] font-bold text-sm uppercase tracking-wide rounded hover:bg-[#0f172a] hover:text-white transition-colors">
              VIEW ALL WORKS
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CAUSES.map((c, i) => (
              <motion.div {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} key={i} className="bg-white rounded-lg overflow-hidden shadow-md hover:-translate-y-2 transition-transform duration-300 group">
                <div className="relative h-52 overflow-hidden">
                  <Image src={c.img} alt={c.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded text-white" style={{ backgroundColor: c.color }}>
                    {c.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-[#0f172a] mb-3 group-hover:text-[#14b8a6] transition-colors">{c.title}</h3>
                  <div className="w-full bg-gray-100 h-2 rounded-full mb-3">
                    <div className="h-2 rounded-full transition-all" style={{ width: `${c.pct}%`, backgroundColor: c.color }} />
                  </div>
                  <div className="flex justify-between text-sm mb-4">
                    <span className="font-mono font-bold text-[#0f172a]">{c.raised} raised</span>
                    <span className="text-[#64748b]">of {c.goal}</span>
                  </div>
                  <Link href="/contact" className="inline-flex items-center text-sm font-bold uppercase tracking-wide text-white px-5 py-2 rounded transition-opacity hover:opacity-90" style={{ backgroundColor: c.color }}>
                    Support Us <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA (Join Us / We Need Your Help) */}
      <section className="bg-[#1e293b] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-white max-w-xl">
              <div className="text-[#14b8a6] text-xs uppercase tracking-widest font-bold mb-2">Join Our Mission</div>
              <h2 className="font-serif text-4xl font-bold mb-4">We Need Your Help</h2>
              <p className="text-white/70">Whether it&apos;s by volunteering your time or donating resources, every single action counts towards building a better, stronger nation.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link href="/volunteer" className="px-8 py-4 bg-[#14b8a6] hover:bg-[#0d9488] text-white font-bold rounded text-center uppercase tracking-wide transition-colors">
                Become a Volunteer
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white hover:bg-gray-100 text-[#0f172a] font-bold rounded text-center uppercase tracking-wide transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. IMAGE CAROUSEL */}
      <section className="py-20 bg-[#f8fafc] overflow-hidden border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-10">
          <span className="text-[#14b8a6] text-xs uppercase tracking-[0.3em] font-bold">Moments In Action</span>
          <h2 className="font-serif text-4xl font-bold text-[#0f172a] mt-2">Impact Gallery</h2>
        </div>
        <div className="relative w-full flex overflow-x-hidden group">
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-300px * 18 - 1rem * 18)); }
            }
            .animate-scroll {
              display: flex;
              width: calc((300px * 36) + (1rem * 36));
              animation: scroll 40s linear infinite;
            }
            .group:hover .animate-scroll {
              animation-play-state: paused;
            }
          `}} />
          <div className="animate-scroll gap-4 px-2">
            {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((src, i) => (
              <div key={i} className="relative w-[300px] h-[350px] shrink-0 rounded-2xl overflow-hidden shadow-lg border border-black/5">
                <Image src={'/gallery/' + src} alt="Gallery moment" fill className="object-cover hover:scale-105 transition-transform duration-700" unoptimized />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SOCIAL MEDIA (Instagram/Facebook/Youtube Feed Preview) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-[#14b8a6] text-xs uppercase tracking-[0.3em] font-bold">Connect With Us</span>
          <h2 className="font-serif text-4xl font-bold text-[#0f172a] mt-2 mb-6">Social Media</h2>
          <p className="text-[#64748b] max-w-2xl mx-auto mb-10">Follow our daily activities and see our latest social media posts.</p>
          
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://www.instagram.com/student_union_for_nation/" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.facebook.com/p/Student-Union-for-Nation-SUN-100067494638158/" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-[#1877F2] flex items-center justify-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://www.youtube.com/channel/UCgnDBij5skvCSfHEMBcUYKQ" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-[#FF0000] flex items-center justify-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["/gallery/IMG_20260401_163158.jpg", "/gallery/IMG_20260401_163215.jpg", "/gallery/IMG_20260401_163358.jpg", "/gallery/IMG_20260401_163436.jpg"].map((src, i) => (
              <a href="https://www.instagram.com/student_union_for_nation/" target="_blank" rel="noreferrer" key={i} className="relative aspect-square rounded-xl overflow-hidden group shadow-md block">
                <Image src={src} alt="Latest Social media post - Indian children" fill className="object-cover group-hover:scale-110 transition-transform duration-500" unoptimized />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="scale-75 group-hover:scale-100 transition-transform bg-white/20 p-3 rounded-full backdrop-blur-sm">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
