"use client";

import { motion } from "framer-motion";
import { Users, Target, Shield, Heart } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col w-full pt-32 pb-24">
      {/* Mission Section */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-32">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-8"
        >
          To empower, uplift, and sustain. We are Student Union For Nation.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Serving since 2014. We believe that every human being deserves access to basic rights, education, and healthcare. Our mission is to bridge the gap between resources and those who need them most, creating a world where no one is left behind.
        </motion.p>
      </section>

      {/* Founder Story + Values */}
      <section className="bg-surface py-24 mb-24 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="aspect-square bg-muted rounded-2xl relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-secondary/10"></div>
            </div>
            <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Our Genesis: &quot;The Spark&quot;</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The foundation of SUN was sparked in 2014 by a simple yet profound moment. During a visit to a local school, the principal unexpectedly asked our founders a question that changed everything: <strong>&quot;Who are you?&quot;</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                That single question sparked a lifelong mission to define ourselves not by our titles, but by our service to others. Today, Student Union For Nation operates across 15+ states, focusing on a holistic approach that combines education, health, and economic empowerment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-foreground">Our Core Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Transparency", icon: Shield, desc: "Every rupee is tracked and openly reported." },
            { title: "Empathy", icon: Heart, desc: "We lead with compassion and humility." },
            { title: "Action", icon: Target, desc: "Ideas without execution are just thoughts." },
            { title: "Community", icon: Users, desc: "We are stronger together." },
          ].map((value, i) => (
            <div key={i} className="p-8 bg-background rounded-2xl shadow-soft border border-border text-center hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                <value.icon size={32} />
              </div>
              <h3 className="font-bold text-xl mb-4 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Teams & Pillars */}
      <section className="bg-[#f8fafc] py-24 mb-24 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#14b8a6] text-xs uppercase tracking-[0.3em] font-bold">How We Operate</span>
            <h2 className="font-serif text-4xl font-bold text-[#0f172a] mt-2">Our Core Teams</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Feeding Hands", focus: "Nutrition & Hunger", stats: "500+ daily meals across 15 locations." },
              { name: "Life Saviours", focus: "Healthcare", stats: "1000+ patients served via 8 clinics." },
              { name: "Tech Saala", focus: "Digital Literacy", stats: "500+ students across 10 centers." },
              { name: "Guiding Lights", focus: "Education/Mentorship", stats: "2000+ students in 25 schools." },
              { name: "Elite Queens", focus: "Women Empowerment", stats: "200+ women in 12 development programs." },
              { name: "Visual Vibes", focus: "Media & Awareness", stats: "1000+ videos and 500+ designs created." },
            ].map((team, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
                <h3 className="font-bold text-xl text-[#0f172a] mb-2">{team.name}</h3>
                <p className="text-[#14b8a6] text-sm font-semibold mb-4">{team.focus}</p>
                <p className="text-muted-foreground italic text-sm">{team.stats}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-serif text-4xl font-bold text-foreground">Our Founders</h2>
          <Link href="/volunteer" className="text-primary font-semibold hover:underline hidden md:block">Join our movement →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { name: "Yashwanth", role: "Co-Founder" },
            { name: "Krishnaprasad", role: "Co-Founder" },
            { name: "Pavan", role: "Co-Founder" },
          ].map((founder, idx) => (
            <div key={idx} className="group cursor-pointer text-center">
              <div className="aspect-square bg-[#f1f5f9] rounded-full mb-6 mx-auto w-48 h-48 overflow-hidden relative shadow-sm group-hover:shadow-lg transition-all">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/20 transition-colors flex items-center justify-center text-4xl text-[#0f172a]/20 font-serif">
                  {founder.name[0]}
                </div>
              </div>
              <h4 className="font-bold text-xl text-foreground">{founder.name}</h4>
              <p className="text-primary text-sm font-semibold mb-2">{founder.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
