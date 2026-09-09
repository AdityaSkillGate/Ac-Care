'use client';
import { useState } from 'react';
import { problems } from '@/data/site';

export default function ProblemSelector(){
  const [active,setActive]=useState(problems[0]);
  return <section id="diagnose" className="section-pad section-break section-diagnose"><div className="container-site grid gap-8 lg:grid-cols-[.95fr_1.05fr]">
    <div><p className="text-sm font-bold uppercase tracking-[.3em] text-sky-300">Quick diagnosis</p><h2 className="mt-3 text-4xl font-black md:text-5xl">What problem are you facing?</h2><p className="mt-4 max-w-xl text-slate-400">Select a symptom to see common possible causes. Final diagnosis should be done by a technician.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{problems.map(p=><button key={p.id} onClick={()=>setActive(p)} className={`rounded-2xl border px-4 py-4 text-left transition ${active.id===p.id?'border-sky-300 bg-sky-300/10':'border-white/10 bg-white/5 hover:border-white/25'}`}>{p.title}</button>)}</div></div>
    <div className="glass rounded-[2rem] p-7"><div className="text-sm text-slate-400">SELECTED PROBLEM</div><h3 className="mt-2 text-3xl font-black text-sky-200">{active.title}</h3><div className="mt-8 space-y-3">{active.causes.map((c,i)=><div key={c} className="flex items-center gap-3 rounded-2xl bg-white/5 p-4"><span className="grid h-8 w-8 place-items-center rounded-full bg-sky-300 text-sm font-bold text-slate-950">{i+1}</span><span>{c}</span></div>)}</div><a href="#contact" className="mt-7 inline-block rounded-2xl bg-white px-5 py-3 font-bold text-slate-950">Book inspection</a></div>
  </div></section>
}
