"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

export default function Volunteer() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    city: "",
    area: "",
    weekdays: false,
    weekends: false,
    message: ""
  });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const SHEET_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;
      
      const payload = {
        firstName: formData.firstName,
        lastName: "", // combined in firstName for now
        email: formData.email,
        phone: formData.phone,
        area: formData.area + (formData.weekdays ? " (Weekdays)" : "") + (formData.weekends ? " (Weekends)" : ""),
        message: formData.message,
        timestamp: new Date().toISOString(),
      };

      if (!SHEET_URL) {
        // Fallback simulation if user hasn't configured the .env URL yet
        console.warn("No Google Sheet URL provided. Simulating success.");
        await new Promise((r) => setTimeout(r, 1500));
        setSubmitStatus("success");
      } else {
        const response = await fetch(SHEET_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          setSubmitStatus("success");
        } else {
          setSubmitStatus("error");
        }
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Info */}
          <div>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Get Involved</span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">Your time is our greatest resource.</h1>
            <p className="text-xl text-muted-foreground font-sans mb-12">Join a network of over 1,200 passionate individuals dedicating their time to drive real change on the ground.</p>
            
            <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">Open Roles</h3>
            <div className="space-y-4">
              {[
                { role: "Community Educator", location: "Bangalore (On-field)", time: "Weekends" },
                { role: "Social Media Advocate", location: "Remote", time: "Flexible" },
                { role: "Medical Camp Coordinator", location: "Mumbai", time: "Bi-weekly" }
              ].map((role, i) => (
                <div key={i} className="p-5 border border-border rounded-xl bg-surface shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg text-foreground mb-2">{role.role}</h4>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin size={16} />{role.location}</span>
                    <span className="flex items-center gap-1"><Clock size={16} />{role.time}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* PERKS SECTION */}
            <div className="mt-14">
              <h3 className="font-serif text-2xl font-bold mb-2 text-foreground">Why Volunteer With Us?</h3>
              <p className="text-muted-foreground text-sm mb-8">Joining SUN Foundation is more than giving time — it&apos;s a transformative journey.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    emoji: "🌱",
                    color: "#14b8a6",
                    glow: "rgba(20,184,166,0.15)",
                    title: "Make Real Impact",
                    desc: "See the direct results of your efforts in transformed communities.",
                  },
                  {
                    emoji: "🔗",
                    color: "#f59e0b",
                    glow: "rgba(245,158,11,0.15)",
                    title: "Build Networks",
                    desc: "Connect with like-minded individuals and build lasting friendships.",
                  },
                  {
                    emoji: "💼",
                    color: "#8b5cf6",
                    glow: "rgba(139,92,246,0.15)",
                    title: "Develop Skills",
                    desc: "Gain valuable experience and develop new professional skills.",
                  },
                  {
                    emoji: "🏅",
                    color: "#ec4899",
                    glow: "rgba(236,72,153,0.15)",
                    title: "Recognition",
                    desc: "Receive certificates and recognition for your valuable contributions.",
                  },
                ].map((perk, i) => (
                  <div
                    key={i}
                    className="group relative p-5 rounded-2xl border border-border bg-surface shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 overflow-hidden"
                    style={{ boxShadow: `0 0 0 1px rgba(0,0,0,0.05)` }}
                  >
                    {/* Subtle gradient accent corner */}
                    <div
                      className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
                      style={{ backgroundColor: perk.color }}
                    />
                    {/* Glow bg on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                      style={{ background: `radial-gradient(circle at top left, ${perk.glow}, transparent 70%)` }}
                    />
                    <div className="relative">
                      <div className="text-2xl mb-3">{perk.emoji}</div>
                      <h4 className="font-bold text-foreground text-base mb-1.5" style={{ color: perk.color }}>{perk.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{perk.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="bg-surface border border-border rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-muted">
               <div className="h-full bg-primary transition-all duration-500 rounded-r-full" style={{ width: `${(step / 3) * 100}%` }}></div>
            </div>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-2 mt-4">Volunteer Application</h2>
            <p className="text-muted-foreground mb-8">Step {step} of 3</p>

            <form className="space-y-6" onSubmit={step === 3 ? handleSubmit : handleNext}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground">Full Name</label>
                      <input required type="text" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all" placeholder="Jane Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground">Email Address</label>
                      <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all" placeholder="jane@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground">Phone Number</label>
                      <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all" placeholder="+91 98765 43210" />
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                     <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground">City</label>
                      <input required type="text" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all" placeholder="e.g. Bangalore" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground">Area of Interest</label>
                      <select required value={formData.area} onChange={e => setFormData({...formData, area: e.target.value})} className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all">
                        <option value="">Select an area...</option>
                        <option value="Education">Education & Teaching</option>
                        <option value="Healthcare">Healthcare Support</option>
                        <option value="Environment">Environment & Tech</option>
                        <option value="On-field">General On-field Support</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground">Availability</label>
                      <div className="grid grid-cols-2 gap-3">
                        <label className="flex items-center gap-2 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                          <input type="checkbox" checked={formData.weekdays} onChange={e => setFormData({...formData, weekdays: e.target.checked})} className="w-4 h-4 text-primary" /> Weekdays
                        </label>
                        <label className="flex items-center gap-2 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                          <input type="checkbox" checked={formData.weekends} onChange={e => setFormData({...formData, weekends: e.target.checked})} className="w-4 h-4 text-primary" /> Weekends
                        </label>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground">Why do you want to volunteer with us?</label>
                      <textarea required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={4} className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all resize-none" placeholder="Share your motivation..." />
                    </div>

                    {submitStatus === "success" && (
                      <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm font-medium mt-4">
                        Thank you! Your application has been successfully submitted to Student Union For Nation.
                      </div>
                    )}
                    {submitStatus === "error" && (
                      <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm font-medium mt-4">
                        Failed to submit application. Please verify the API connection.
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex gap-4 pt-4 mt-6">
                {step > 1 && (
                  <button type="button" disabled={isSubmitting} onClick={() => setStep(step - 1)} className="px-6 py-3 border border-border rounded-lg font-semibold text-foreground hover:bg-muted/50 transition-colors disabled:opacity-50">Back</button>
                )}
                {step < 3 ? (
                  <button type="submit" className="flex-1 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary/90 transition-colors">
                    Continue
                  </button>
                ) : (
                  <button type="submit" disabled={isSubmitting || submitStatus === "success"} className="flex-1 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary/90 transition-colors disabled:opacity-50">
                    {isSubmitting ? "Submitting..." : submitStatus === "success" ? "Submitted" : "Submit Application"}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
