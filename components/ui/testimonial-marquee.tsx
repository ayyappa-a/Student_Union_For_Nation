"use client";

import React from "react";

type TestimonialCard = {
  initials: string;
  color: string;
  name: string;
  role: string;
  badge: string;
  badgeColor: string;
  quote: string;
  stars: number;
};

const TESTIMONIALS: TestimonialCard[] = [
  {
    initials: "RP",
    color: "#f59e0b",
    name: "Ramesh Patel",
    role: "Parent & Community Leader",
    badge: "Parent",
    badgeColor: "rgba(245,158,11,0.15)",
    quote:
      '"SUN Foundation didn\'t just change my daughter\'s life — they transformed our entire community. Today, she\'s studying medicine, and our village has 100% literacy."',
    stars: 5,
  },
  {
    initials: "PS",
    color: "#ec4899",
    name: "Priya Sharma",
    role: "Scholarship Recipient",
    badge: "Scholarship Recipient",
    badgeColor: "rgba(236,72,153,0.15)",
    quote:
      '"Education has given me the tools and confidence to help my family and community. I\'m now studying medicine and want to come back to serve my village."',
    stars: 5,
  },
  {
    initials: "MD",
    color: "#22c55e",
    name: "Meera Devi",
    role: "Beneficiary",
    badge: "Beneficiary",
    badgeColor: "rgba(34,197,94,0.15)",
    quote:
      '"Through SUN\'s women empowerment program, I learned skills that helped me become financially independent. Now I\'m teaching other women in my community."',
    stars: 5,
  },
  {
    initials: "AK",
    color: "#14b8a6",
    name: "Arjun Kumar",
    role: "Youth Leader",
    badge: "Volunteer",
    badgeColor: "rgba(20,184,166,0.15)",
    quote:
      '"Being part of SUN\'s youth program taught me leadership and community service. It\'s amazing how education can break cycles of poverty."',
    stars: 5,
  },
  {
    initials: "SM",
    color: "#a78bfa",
    name: "Sunita Mehta",
    role: "Graduate",
    badge: "Graduate",
    badgeColor: "rgba(167,139,250,0.15)",
    quote:
      '"SUN Foundation\'s educational support transformed my life. Now I can contribute to my family\'s income and help my siblings get an education too."',
    stars: 5,
  },
  {
    initials: "NG",
    color: "#38bdf8",
    name: "Nisha Gupta",
    role: "Student",
    badge: "Student",
    badgeColor: "rgba(56,189,248,0.15)",
    quote:
      '"The foundation\'s scholarship and skills training program has enabled me to pursue higher education and support my family financially."',
    stars: 5,
  },
  {
    initials: "LN",
    color: "#fb7185",
    name: "Lakshmi Narayan",
    role: "Community Leader",
    badge: "Community Leader",
    badgeColor: "rgba(251,113,133,0.15)",
    quote:
      '"SUN\'s holistic approach to education and community development has created lasting positive change. We\'re grateful for their continued support."',
    stars: 5,
  },
];

const ROW1 = TESTIMONIALS.slice(0, 4);
const ROW2 = TESTIMONIALS.slice(3);

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const Card = ({ card }: { card: TestimonialCard }) => (
  <div
    className="mx-4 shrink-0 w-80 rounded-2xl border border-white/10 bg-[#111827] p-6 shadow-xl"
    style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.4)` }}
  >
    {/* Avatar + Name */}
    <div className="flex items-center gap-3 mb-4">
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm text-white shrink-0"
        style={{ backgroundColor: card.color }}
      >
        {card.initials}
      </div>
      <div>
        <p className="font-semibold text-white text-sm leading-tight">{card.name}</p>
        <p className="text-xs text-white/50 mt-0.5">{card.role}</p>
      </div>
    </div>

    {/* Quote */}
    <p className="text-sm text-white/80 leading-relaxed mb-4 italic">{card.quote}</p>

    {/* Footer */}
    <div className="flex items-center justify-between">
      <div className="flex gap-0.5">
        {Array.from({ length: card.stars }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <span
        className="text-xs font-medium px-2.5 py-1 rounded-full"
        style={{ backgroundColor: card.badgeColor, color: card.color }}
      >
        {card.badge}
      </span>
    </div>
  </div>
);

function MarqueeRow({
  data,
  reverse = false,
  speed = 28,
}: {
  data: TestimonialCard[];
  reverse?: boolean;
  speed?: number;
}) {
  const doubled = React.useMemo(() => [...data, ...data, ...data], [data]);
  return (
    <div className="relative w-full overflow-hidden">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r from-[#0f172a] to-transparent" />
      <div
        className="flex"
        style={{
          animation: `testimonialScroll ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
          width: "max-content",
        }}
      >
        {doubled.map((c, i) => (
          <Card key={i} card={c} />
        ))}
      </div>
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10 bg-gradient-to-l from-[#0f172a] to-transparent" />
    </div>
  );
}

export default function TestimonialMarquee() {
  return (
    <>
      <style>{`
        @keyframes testimonialScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
      <section className="py-24 bg-[#0f172a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-14">
          <span className="text-[#14b8a6] text-xs uppercase tracking-[0.3em] font-bold">Real Voices</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Stories of <span className="text-[#f59e0b]">Impact</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            Hear directly from the lives we&apos;ve touched — students, parents, and community leaders.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <MarqueeRow data={ROW1} reverse={false} speed={30} />
          <MarqueeRow data={ROW2} reverse={true} speed={25} />
        </div>
      </section>
    </>
  );
}
