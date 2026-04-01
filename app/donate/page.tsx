"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Lock, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const PRESETS = [
  { amount: 100, impact: "Provides 1 week of stationery for a child" },
  { amount: 500, impact: "Feeds 5 children for a week" },
  { amount: 1000, impact: "Sponsors a medical camp for 50 people" },
];

export default function Donate() {
  const [amount, setAmount] = useState<number | "custom">(500);
  const [customAmount, setCustomAmount] = useState("");
  const [cause, setCause] = useState("general");

  const displayImpact = amount !== "custom" 
    ? PRESETS.find(p => p.amount === amount)?.impact 
    : "Every contribution makes a tangible difference.";

  return (
    <div className="flex flex-col w-full pt-32 pb-24 min-h-screen bg-surface">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <div className="text-center mb-12">
          <span className="inline-flex items-center justify-center p-3 bg-accent/10 text-accent rounded-full mb-6 shadow-soft">
            <Heart fill="currentColor" size={24} />
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Invest in Humanity</h1>
          <p className="text-xl text-muted-foreground font-sans">100% of your donation directly funds our initiatives on the ground.</p>
        </div>

        <div className="bg-background rounded-3xl shadow-xl border border-border overflow-hidden">
          <div className="p-8 md:p-12">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              {/* Amount Selection */}
              <div>
                <label className="block text-lg font-bold mb-4 text-foreground">Select Amount (₹)</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {PRESETS.map((p) => (
                    <button
                      key={p.amount}
                      type="button"
                      onClick={() => setAmount(p.amount)}
                      className={cn(
                        "py-4 rounded-xl font-mono text-xl font-bold transition-all border-2",
                        amount === p.amount 
                          ? "border-accent bg-accent/5 text-accent shadow-sm"
                          : "border-border bg-surface text-foreground hover:border-accent/30"
                      )}
                    >
                      ₹{p.amount}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setAmount("custom")}
                    className={cn(
                      "py-4 rounded-xl font-sans text-lg font-bold transition-all border-2",
                      amount === "custom" 
                        ? "border-accent bg-accent/5 text-accent shadow-sm"
                        : "border-border bg-surface text-foreground hover:border-accent/30"
                    )}
                  >
                    Custom
                  </button>
                </div>
                
                {amount === "custom" && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mb-4">
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-mono text-muted-foreground">₹</span>
                      <input 
                        type="number" 
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="w-full bg-surface border-2 border-border rounded-xl pl-10 pr-4 py-4 text-xl font-mono focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      />
                    </div>
                  </motion.div>
                )}

                <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 flex items-start gap-3">
                  <ShieldCheck className="text-primary mt-0.5 min-w-[20px]" size={20} />
                  <p className="text-primary font-medium">{displayImpact}</p>
                </div>
              </div>

              {/* Cause Selection */}
              <div>
                <label className="block text-lg font-bold mb-4 text-foreground">Designate Donation</label>
                <select 
                  value={cause}
                  onChange={(e) => setCause(e.target.value)}
                  className="w-full bg-surface border-2 border-border rounded-xl px-4 py-4 text-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none font-medium"
                >
                  <option value="general">Area of Greatest Need (General Fund)</option>
                  <option value="education">Lighting Up Futures (Education)</option>
                  <option value="health">Mobile Health Clinics (Healthcare)</option>
                  <option value="environment">Green Canopy Initiative (Environment)</option>
                </select>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border">
                <div>
                  <label className="block text-sm font-bold mb-2 text-foreground">Full Name</label>
                  <input required type="text" className="w-full bg-surface border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-foreground">Email Address</label>
                  <input required type="email" className="w-full bg-surface border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-foreground">Phone (For 80G Receipt)</label>
                  <input required type="tel" className="w-full bg-surface border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-foreground">PAN Number (Optional)</label>
                  <input type="text" className="w-full bg-surface border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary uppercase transition-colors" placeholder="ABCDE1234F" />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6 border-t border-border">
                <button type="submit" className="w-full py-5 bg-accent text-white font-bold text-xl rounded-xl shadow-lg hover:bg-accent/90 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                  <Lock size={20} /> Donate Securely
                </button>
                <p className="text-center text-sm text-muted-foreground mt-4 font-mono">Payments are secured by 256-bit encryption. Eligible for 80G tax exemption.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
