'use client';

import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Clock3, Star, Users } from 'lucide-react';

const stats = [
  { target: 500, suffix: '+', label: 'AC services completed', icon: CheckCircle2 },
  { target: 4.9, suffix: '/5', label: 'Customer rating', icon: Star },
  { target: 300, suffix: '+', label: 'Happy customers', icon: Users },
  { prefix: '< ', target: 60, suffix: ' min', label: 'Fast enquiry response', icon: Clock3 },
];

const promises = [
  ['Transparent diagnosis', 'We explain the fault before recommending repair or replacement.'],
  ['Clean installation', 'We protect your space, route pipes neatly and test the airflow before leaving.'],
  ['Local follow-up', 'A nearby technician is available for questions after the service is complete.'],
];

export default function TrustSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = statsRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasEntered(true);
        observer.disconnect();
      }
    }, { threshold: 0.35 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasEntered) return;
    const start = performance.now();
    const duration = 1400;
    let frame = 0;
    const animate = (now: number) => {
      const nextProgress = Math.min((now - start) / duration, 1);
      setProgress(1 - Math.pow(1 - nextProgress, 3));
      if (nextProgress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [hasEntered]);

  return <section className="section-pad section-break section-trust pt-4">
    <div className="container-site">
      <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.3em] text-sky-300">Proof in every service</p>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">Comfort people come back for.</h2>
          <p className="mt-4 max-w-xl leading-7 text-slate-400">From a quick filter clean to a full installation, every visit is handled with clear pricing, careful work and a clean finish.</p>
        </div>
        <div ref={statsRef} className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-4">
          {stats.map(({ prefix = '', target, suffix, label, icon: Icon }) => <div key={label} className="bg-slate-950/70 p-5 md:p-6"><Icon size={20} className="text-sky-300"/><div className="mt-5 text-2xl font-black tabular-nums">{prefix}{target < 10 ? (target * progress).toFixed(1) : Math.floor(target * progress)}{suffix}</div><div className="mt-1 text-sm leading-5 text-slate-400">{label}</div></div>)}
        </div>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-[1.2fr_.8fr]">
        <div className="image-tile group relative min-h-72 overflow-hidden rounded-3xl"><img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85" alt="Technician working on an air conditioning system" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent"/><div className="absolute bottom-5 left-5"><p className="text-sm text-sky-200">On-site care</p><p className="mt-1 text-xl font-bold">Skilled hands. Neat work.</p></div></div>
        <div className="image-tile group relative min-h-72 overflow-hidden rounded-3xl"><img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=85" alt="Modern split air conditioner cooling a room" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent"/><div className="absolute bottom-5 left-5"><p className="text-sm text-sky-200">Better airflow</p><p className="mt-1 text-xl font-bold">A cooler room, made simple.</p></div></div>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {promises.map(([title, description]) => <div key={title} className="border-l border-sky-300/50 pl-5"><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{description}</p></div>)}
      </div>
    </div>
  </section>;
}