"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TestimonialMarquee from "@/components/ui/testimonial-marquee";

// Real Unsplash Indian people images
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1800&q=90&auto=format&fit=crop",
  cause1: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=600&q=80&auto=format&fit=crop",
  cause2: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80&auto=format&fit=crop",
  cause3: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80&auto=format&fit=crop",
  about1: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=700&q=80&auto=format&fit=crop",
  about2: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=700&q=80&auto=format&fit=crop",
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
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?w=700&q=80&auto=format&fit=crop"
                  alt="Children eating food at donation camp"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="relative h-64 mt-8 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1607453998774-d533f65dac99?w=700&q=80&auto=format&fit=crop"
                  alt="Children holding drawings and pictures"
                  fill
                  className="object-cover"
                  unoptimized
                />
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
                  <Link href="/donate" className="inline-flex items-center text-sm font-bold uppercase tracking-wide text-white px-5 py-2 rounded transition-opacity hover:opacity-90" style={{ backgroundColor: c.color }}>
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

      {/* 5. IMAGE GALLERY — manual horizontal scroll */}
      <section className="py-20 bg-[#f8fafc] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-10">
          <span className="text-[#14b8a6] text-xs uppercase tracking-[0.3em] font-bold">Moments In Action</span>
          <h2 className="font-serif text-4xl font-bold text-[#0f172a] mt-2">Impact Gallery</h2>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .gallery-scroll::-webkit-scrollbar { display: none; }
          .gallery-scroll { -ms-overflow-style: none; scrollbar-width: none; }
          .gallery-card {
            transition: transform 0.35s ease, box-shadow 0.35s ease;
          }
          .gallery-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.13);
          }
        `}} />
        <div className="gallery-scroll flex gap-4 overflow-x-auto scroll-smooth px-6 md:px-12 pb-4">
          {GALLERY_IMAGES.map((src, i) => (
            <div key={i} className="gallery-card relative w-[300px] h-[350px] shrink-0 rounded-2xl overflow-hidden shadow-md border border-black/8 ring-1 ring-white">
              <Image src={'/gallery/' + src} alt="Gallery moment" fill className="object-cover" unoptimized />
            </div>
          ))}
        </div>
      </section>


      {/* 6. TESTIMONIALS (replacing social media connect section) */}
      <TestimonialMarquee />

      {/* 7. SOCIAL MEDIA BENTO (Wild Layout – Awwwards/Dribbble style) */}
      <section className="py-24 bg-[#f8fafc] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-[#14b8a6] text-xs uppercase tracking-[0.3em] font-bold">Live Updates</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0f172a] mt-2 leading-tight">
                We&apos;re out there,<br />
                <span className="text-[#f59e0b]">every single day.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              <a href="https://www.instagram.com/student_union_for_nation/" target="_blank" rel="noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-full text-sm font-bold text-white transition-transform hover:-translate-y-0.5 shadow-lg"
                style={{ background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #bc1888 75%, #833ab4 100%)" }}>
                {/* Instagram official SVG */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                @student_union_for_nation
              </a>
              <a href="https://www.youtube.com/channel/UCgnDBij5skvCSfHEMBcUYKQ" target="_blank" rel="noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#FF0000] text-sm font-bold text-white transition-transform hover:-translate-y-0.5 shadow-lg">
                {/* YouTube official SVG */}
                <svg width="20" height="14" viewBox="0 0 461.001 461.001" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M365.257 67.393H95.744C42.866 67.393 0 110.259 0 163.137v134.728c0 52.878 42.866 95.744 95.744 95.744h269.513c52.878 0 95.744-42.866 95.744-95.744V163.137c0-52.878-42.866-95.744-95.744-95.744zm-64.751 169.663l-126.06 60.123c-3.359 1.602-7.239-.847-7.239-4.568V168.607c0-3.774 3.982-6.22 7.348-4.514l126.06 63.881c3.748 1.899 3.683 7.274-.109 9.082z" /></svg>
                SUN Foundation YouTube
              </a>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-auto gap-4">

            {/* Hero large post */}
            <a href="https://www.instagram.com/student_union_for_nation/" target="_blank" rel="noreferrer"
              className="md:col-span-6 md:row-span-2 relative rounded-3xl overflow-hidden group shadow-xl block" style={{ minHeight: 480 }}>
              <Image src="/gallery/IMG_20260401_163158.jpg" alt="SUN Foundation community event" fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {/* Platform badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md"
                style={{ background: "linear-gradient(135deg, rgba(240,148,51,0.9), rgba(188,24,136,0.9))" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                <span className="text-white text-xs font-semibold">Instagram</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-2">Featured Post</p>
                <p className="text-white text-xl font-bold leading-snug">Lighting up futures — one classroom at a time. ✨📚</p>
                <div className="flex items-center gap-4 mt-3">
                  <span className="text-white/70 text-xs flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    2.4K
                  </span>
                  <span className="text-white/70 text-xs flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    148
                  </span>
                </div>
              </div>
            </a>

            {/* Top right: Facebook wide card */}
            <a href="https://www.facebook.com/p/Student-Union-for-Nation-SUN-100067494638158/" target="_blank" rel="noreferrer"
              className="md:col-span-6 relative rounded-3xl overflow-hidden group shadow-xl block" style={{ minHeight: 228 }}>
              <Image src="/gallery/IMG_20260401_163215.jpg" alt="SUN Foundation Facebook update" fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1877F2]/90 backdrop-blur-md">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                <span className="text-white text-xs font-semibold">Facebook</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-base leading-snug">Health camp day — free check-ups for 500+ villagers. 💊🩺</p>
              </div>
            </a>

            {/* Bottom right: two small square cards */}
            <a href="https://www.instagram.com/student_union_for_nation/" target="_blank" rel="noreferrer"
              className="md:col-span-3 relative rounded-3xl overflow-hidden group shadow-lg block" style={{ minHeight: 228 }}>
              <Image src="/gallery/IMG_20260401_163358.jpg" alt="SUN Foundation Instagram" fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full backdrop-blur-md"
                style={{ background: "linear-gradient(135deg, rgba(240,148,51,0.85), rgba(188,24,136,0.85))" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                <span className="text-white text-[10px] font-semibold">Instagram</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-sm font-bold leading-snug">Tree-planting drive 🌱</p>
              </div>
            </a>

            <a href="https://www.youtube.com/channel/UCgnDBij5skvCSfHEMBcUYKQ" target="_blank" rel="noreferrer"
              className="md:col-span-3 relative rounded-3xl overflow-hidden group shadow-lg block" style={{ minHeight: 228 }}>
              <Image src="/gallery/IMG_20260401_163436.jpg" alt="SUN Foundation YouTube" fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FF0000]/85 backdrop-blur-md">
                <svg width="14" height="10" viewBox="0 0 461 461" fill="white"><path d="M365.257 67.393H95.744C42.866 67.393 0 110.259 0 163.137v134.728c0 52.878 42.866 95.744 95.744 95.744h269.513c52.878 0 95.744-42.866 95.744-95.744V163.137c0-52.878-42.866-95.744-95.744-95.744zm-64.751 169.663l-126.06 60.123c-3.359 1.602-7.239-.847-7.239-4.568V168.607c0-3.774 3.982-6.22 7.348-4.514l126.06 63.881c3.748 1.899 3.683 7.274-.109 9.082z" /></svg>
                <span className="text-white text-[10px] font-semibold">YouTube</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-sm font-bold leading-snug">Watch our story ▶️</p>
              </div>
            </a>

          </div>

          {/* Bottom CTA strip */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 rounded-2xl bg-[#0f172a]">
            <p className="text-white font-bold text-lg">
              Follow us <span className="text-[#14b8a6]">@student_union_for_nation</span> for daily updates
            </p>
            <a href="https://www.instagram.com/student_union_for_nation/" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-sm transition-transform hover:-translate-y-0.5 shadow-lg shrink-0"
              style={{ background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #bc1888 75%, #833ab4 100%)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
