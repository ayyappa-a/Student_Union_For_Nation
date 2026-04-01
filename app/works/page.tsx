"use client";

import { useState } from "react";
import { ArrowRight, MapPin, Users } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Education", "Healthcare", "Environment", "Women Empowerment"];
const CAUSES = [
  { id: 1, title: "Lighting Up Futures", category: "Education", location: "Rural Rajasthan", status: "Active", impact: "500+ children", raised: "₹6.5L", goal: "₹10L", desc: "Building solar-powered digital classrooms." },
  { id: 2, title: "Mobile Health Clinics", category: "Healthcare", location: "Urban Slums, Mumbai", status: "Active", impact: "12,000+ patients", raised: "₹12L", goal: "₹15L", desc: "Providing accessible primary healthcare." },
  { id: 3, title: "Green Canopy Initiative", category: "Environment", location: "Western Ghats", status: "Completed", impact: "50,000 trees", raised: "₹5L", goal: "₹5L", desc: "Reforestation drive with local tribal communities." },
  { id: 4, title: "Skill Up", category: "Women Empowerment", location: "Delhi NCR", status: "Active", impact: "200 women", raised: "₹2L", goal: "₹8L", desc: "Vocational training for financial independence." },
];

export default function Causes() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCauses = CAUSES.filter(c => activeFilter === "All" || c.category === activeFilter);

  return (
    <div className="flex flex-col w-full pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">Our Work</h1>
          <p className="text-xl text-muted-foreground font-sans max-w-2xl mx-auto">Explore the active initiatives transforming communities. Your support makes these projects possible.</p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={cn("px-6 py-2.5 rounded-full text-sm font-bold transition-all", activeFilter === f ? "bg-primary text-white shadow-md shadow-primary/20" : "bg-surface border border-border text-muted-foreground hover:border-primary/50 hover:text-primary")}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 select-none md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCauses.map((cause) => (
            <div key={cause.id} className="group bg-surface rounded-2xl overflow-hidden shadow-soft transition-all hover:-translate-y-2 hover:shadow-xl border border-border/50 flex flex-col">
              <div className="h-56 bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur pt-1 pb-1 px-3 rounded-full text-xs font-bold text-primary uppercase tracking-wide shadow-sm">{cause.category}</div>
                <div className={cn("absolute top-4 right-4 bg-black/60 backdrop-blur pt-1 pb-1 px-3 rounded-full text-xs font-bold uppercase tracking-wide text-white", cause.status === 'Completed' && "bg-secondary/90")}>
                  {cause.status}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{cause.title}</h3>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1"><MapPin size={16} /> {cause.location}</div>
                  <div className="flex items-center gap-1"><Users size={16} /> {cause.impact}</div>
                </div>

                <p className="text-muted-foreground mb-6 flex-1">{cause.desc}</p>
                
                <div className="w-full bg-border h-2 rounded-full mb-3 overflow-hidden">
                  <div className="bg-primary h-full rounded-full transition-all duration-1000" style={{ width: cause.status === 'Completed' ? '100%' : '65%' }}></div>
                </div>
                <div className="flex justify-between text-sm mb-6 font-mono">
                  <span className="font-bold text-foreground">{cause.raised} raised</span>
                  <span className="text-muted-foreground">of {cause.goal}</span>
                </div>
                
                <Link href={`/donate?cause=${cause.id}`} className={cn("w-full py-3 font-semibold rounded-lg flex items-center justify-center transition-colors shadow-sm", cause.status === 'Completed' ? "bg-surface border border-border text-muted-foreground cursor-not-allowed pointer-events-none" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white pointer-events-auto")}>
                  {cause.status === 'Completed' ? 'Fully Funded' : 'Support This Initiative'}
                  {cause.status !== 'Completed' && <ArrowRight className="w-4 h-4 ml-2" />}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
