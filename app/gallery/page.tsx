"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Education", "Healthcare", "Environment"];

const ALL_IMAGES = [
  { id: 1, src: "/gallery/IMG_20260401_163121.jpg", category: "Education", cols: "col-span-1 md:col-span-2", rows: "row-span-1 md:row-span-2" },
  { id: 2, src: "/gallery/IMG_20260401_163132.jpg", category: "Healthcare", cols: "col-span-1", rows: "row-span-1" },
  { id: 3, src: "/gallery/IMG_20260401_163146.jpg", category: "Environment", cols: "col-span-1", rows: "row-span-1" },
  { id: 4, src: "/gallery/IMG_20260401_163158.jpg", category: "Education", cols: "col-span-1 md:col-span-2", rows: "row-span-1" },
  { id: 5, src: "/gallery/IMG_20260401_163215.jpg", category: "Healthcare", cols: "col-span-1", rows: "row-span-1 md:row-span-2" },
  { id: 6, src: "/gallery/IMG_20260401_163227.jpg", category: "Environment", cols: "col-span-1", rows: "row-span-1" },
  { id: 7, src: "/gallery/IMG_20260401_163240.jpg", category: "Education", cols: "col-span-1", rows: "row-span-1" },
  { id: 8, src: "/gallery/IMG_20260401_163250.jpg", category: "Healthcare", cols: "col-span-1 md:col-span-2", rows: "row-span-1 md:row-span-2" },
  { id: 9, src: "/gallery/IMG_20260401_163302.jpg", category: "Environment", cols: "col-span-1", rows: "row-span-1" },
  { id: 10, src: "/gallery/IMG_20260401_163327.jpg", category: "Education", cols: "col-span-1", rows: "row-span-1" },
  { id: 11, src: "/gallery/IMG_20260401_163337.jpg", category: "Healthcare", cols: "col-span-1 md:col-span-2", rows: "row-span-1" },
  { id: 12, src: "/gallery/IMG_20260401_163348.jpg", category: "Environment", cols: "col-span-1", rows: "row-span-1" },
  { id: 13, src: "/gallery/IMG_20260401_163358.jpg", category: "Education", cols: "col-span-1", rows: "row-span-1" },
  { id: 14, src: "/gallery/IMG_20260401_163412.jpg", category: "Healthcare", cols: "col-span-1", rows: "row-span-1" },
  { id: 15, src: "/gallery/IMG_20260401_163425.jpg", category: "Environment", cols: "col-span-1", rows: "row-span-1 md:row-span-2" },
  { id: 16, src: "/gallery/IMG_20260401_163436.jpg", category: "Education", cols: "col-span-1 md:col-span-2", rows: "row-span-1" },
  { id: 17, src: "/gallery/IMG_20260401_163445.jpg", category: "Healthcare", cols: "col-span-1", rows: "row-span-1" },
  { id: 18, src: "/gallery/IMG_20260401_163457.jpg", category: "Environment", cols: "col-span-1", rows: "row-span-1" }
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages = ALL_IMAGES.filter(
    img => activeFilter === "All" || img.category === activeFilter
  );

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-[#14b8a6] text-xs uppercase tracking-[0.3em] font-bold">Moments of Hope</span>
          <h1 className="font-serif text-5xl font-bold text-[#0f172a] mt-2 mb-4">Photo Gallery</h1>
          <p className="text-[#64748b] max-w-2xl mx-auto">Glimpses of our impact across various communities in India.</p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-bold transition-all border",
                activeFilter === cat 
                  ? "bg-[#14b8a6] border-[#14b8a6] text-white shadow-md shadow-[#14b8a6]/20" 
                  : "bg-white border-gray-200 text-[#64748b] hover:border-[#14b8a6]/50 hover:text-[#14b8a6]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-[auto] gap-4"
        >
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div 
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                // When filtering, normal grid sizing is better to prevent awkward empty spaces if a user selects a strict category.
                className={cn(
                  "relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 group min-h-[250px]", 
                  activeFilter === "All" ? img.cols : "col-span-1", 
                  activeFilter === "All" ? img.rows : "row-span-1"
                )}
              >
                <Image 
                  src={img.src} 
                  alt={"Gallery photo " + img.category} 
                  fill 
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur pt-1 pb-1 px-3 rounded-full text-[10px] font-bold text-[#14b8a6] uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20 text-[#64748b]">
            No images found for this category.
          </div>
        )}
      </div>
    </div>
  );
}
