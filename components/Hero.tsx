'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { ArrowRight, Wind, Snowflake, Play, BadgeCheck } from 'lucide-react';
import { siteConfig } from '@/data/site';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [temp, setTemp] = useState(38);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-copy > *', { y: 28, opacity: 0, duration: .9, stagger: .12, ease: 'power3.out' });
      gsap.to('.air-line', { x: '90%', duration: 3.2, repeat: -1, ease: 'none', stagger: .35 });
    }, heroRef);
    const id = window.setInterval(() => setTemp((t) => (t <= 22 ? 38 : t - 1)), 220);
    return () => { ctx.revert(); window.clearInterval(id); };
  }, []);

  return (
    <section id="home" ref={heroRef} className="hero-section relative min-h-screen overflow-hidden px-5 pb-16 pt-32 md:px-10 lg:px-16">
      <img src="/hero-ac-technician.png" alt="Technician servicing a wall-mounted air conditioner indoors" className="hero-background-image absolute inset-0 h-full w-full object-cover" />
      <div className="hero-background-shade absolute inset-0"/>
      <div className="air-line left-[-35%] top-[35%]"/><div className="air-line left-[-40%] top-[43%]"/><div className="air-line left-[-38%] top-[51%]"/>
      <div className="container-site relative grid min-h-[76vh] items-center gap-10 md:grid-cols-[1.1fr_.9fr]">
        <div className="hero-copy max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-sky-100"><Snowflake size={16}/> Sankarankovil & nearby areas</div>
          <h1 className="text-5xl font-black leading-[.98] tracking-tight md:text-7xl">Too Hot?<br/><span className="text-sky-300">We’ll Cool It Down.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">AC service, repair, installation, gas filling and maintenance with a fast WhatsApp-first booking experience.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl bg-sky-300 px-6 py-4 font-bold text-slate-950">Book AC Service <ArrowRight size={18}/></a>
            <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" className="glass rounded-2xl px-6 py-4 font-semibold">WhatsApp Now</a>
          </div>
          <div className="mt-10 flex flex-wrap gap-5 text-sm text-slate-400"><span>✓ Same-day enquiry</span><span>✓ Local technician</span><span>✓ Mobile-first booking</span></div>
        </div>

        <motion.div initial={{opacity:0, scale:.96}} animate={{opacity:1, scale:1}} transition={{duration:1}} className="hero-visual relative mx-auto w-full max-w-lg">
          <div className="hero-video-frame overflow-hidden rounded-[2rem] border border-white/15 shadow-glow">
            <div className="relative p-7">
            <div className="mb-8 flex items-center justify-between"><span className="flex items-center gap-2 text-sm text-slate-300"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300"/> LIVE COOLING EXPERIENCE</span><Wind className="text-sky-300"/></div>
            <div className="text-center">
              <div className="text-8xl font-black tracking-tight md:text-9xl">{temp}°</div>
              <div className="mt-2 text-sm uppercase tracking-[.35em] text-sky-200">Cooling</div>
            </div>
            <div className="mt-8 h-3 overflow-hidden rounded-full bg-white/10"><motion.div className="h-full rounded-full bg-gradient-to-r from-orange-300 via-white to-sky-300" animate={{width:`${((38-temp)/16)*100}%`}}/></div>
            <p className="mt-5 text-center text-slate-300">38°C → 22°C. From heat to comfort.</p>
            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-xs text-slate-300"><span className="flex items-center gap-2"><Play size={13} className="fill-current text-sky-300"/> Airflow in motion</span><span className="flex items-center gap-2"><BadgeCheck size={14} className="text-emerald-300"/> Technician verified</span></div>
            </div>
          </div>
          <div className="airflow-orbit airflow-orbit-one"/><div className="airflow-orbit airflow-orbit-two"/>
        </motion.div>
      </div>
    </section>
  );
}
