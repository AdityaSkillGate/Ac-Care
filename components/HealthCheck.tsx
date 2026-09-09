'use client';
import { useMemo, useState } from 'react';

export default function HealthCheck(){
  const [age,setAge]=useState(2), [months,setMonths]=useState(3), [cooling,setCooling]=useState(0), [noise,setNoise]=useState(0);
  const score=useMemo(()=>Math.max(25,100-(age*5)-(months*2)-(cooling*18)-(noise*12)),[age,months,cooling,noise]);
  return <section id="health" className="section-pad section-break section-health"><div className="container-site glass rounded-[2.2rem] p-6 md:p-10"><div className="grid gap-10 lg:grid-cols-2">
    <div><p className="text-sm font-bold uppercase tracking-[.3em] text-sky-300">AC Health Meter</p><h2 className="mt-3 text-4xl font-black">Check your AC health.</h2><div className="mt-8 grid gap-4">
      <label>AC Age<select value={age} onChange={e=>setAge(+e.target.value)} className="mt-2"><option value="1">0–2 years</option><option value="2">3–5 years</option><option value="3">6–8 years</option><option value="4">9+ years</option></select></label>
      <label>Months Since Last Service<select value={months} onChange={e=>setMonths(+e.target.value)} className="mt-2"><option value="1">0–2 months</option><option value="3">3–5 months</option><option value="6">6–8 months</option><option value="9">9+ months</option></select></label>
      <label>Cooling<select value={cooling} onChange={e=>setCooling(+e.target.value)} className="mt-2"><option value="0">Good</option><option value="1">Weak</option></select></label>
      <label>Noise<select value={noise} onChange={e=>setNoise(+e.target.value)} className="mt-2"><option value="0">Normal</option><option value="1">Unusual noise</option></select></label>
    </div></div>
    <div className="flex items-center justify-center"><div className="relative grid h-72 w-72 place-items-center rounded-full border-[16px] border-white/10"><div className="absolute inset-[-16px] rounded-full border-[16px] border-sky-300/70" style={{clipPath:`inset(${100-score}% 0 0 0)`}}/><div className="text-center"><div className="text-7xl font-black">{score}</div><div className="text-slate-400">/ 100</div><div className="mt-3 font-semibold text-sky-200">{score>75?'Looks good':score>55?'Service recommended':'Inspection recommended'}</div></div></div></div>
  </div></div></section>
}
