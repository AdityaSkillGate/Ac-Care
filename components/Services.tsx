import { services } from '@/data/site';

export default function Services(){
  return <section id="services" className="section-pad section-break section-services"><div className="container-site">
    <div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[.3em] text-sky-300">Services</p><h2 className="mt-3 text-4xl font-black md:text-5xl">Everything your AC needs.</h2><p className="mt-4 text-slate-400">Built for homes, shops, offices and small commercial spaces.</p></div>
    <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map((s,i)=><div key={s.title} className="service-card glass group rounded-3xl p-6 hover:border-sky-300/40"><div className="mb-8 text-xs text-slate-500">0{i+1}</div><h3 className="text-xl font-bold">{s.title}</h3><p className="mt-3 leading-7 text-slate-400">{s.desc}</p><a href="#contact" className="mt-6 inline-block text-sm font-semibold text-sky-300">Book this service →</a></div>)}</div>
  </div></section>
}
