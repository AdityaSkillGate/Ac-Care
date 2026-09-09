export default function SeoContent() {
  return <section className="section-pad section-break section-seo" aria-labelledby="local-ac-services">
    <div className="container-site grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
      <div>
        <p className="text-sm font-bold uppercase tracking-[.3em] text-sky-300">Local AC specialists</p>
        <h2 id="local-ac-services" className="mt-3 text-4xl font-black md:text-5xl">Reliable AC service in Sankarankovil.</h2>
        <p className="mt-5 leading-8 text-slate-400">Sankarankovil AC Care provides dependable air conditioner service for homes, offices, shops and small businesses across Sankarankovil and nearby areas in Tenkasi District.</p>
        <p className="mt-4 leading-8 text-slate-400">Our technicians help with AC repair, split and window AC installation, deep cleaning, gas leak checks, refrigerant filling, water leakage and preventive maintenance. We explain the issue clearly and help you choose the right service for your room and budget.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <details className="glass rounded-2xl p-5" open><summary className="cursor-pointer font-bold">When should I service my AC?</summary><p className="mt-3 text-sm leading-6 text-slate-400">A professional service every three to six months can improve airflow, reduce dust and help your AC cool more efficiently.</p></details>
        <details className="glass rounded-2xl p-5"><summary className="cursor-pointer font-bold">Do you provide home AC repair?</summary><p className="mt-3 text-sm leading-6 text-slate-400">Yes. We support residential AC repair, cleaning, installation and maintenance for split and window air conditioners.</p></details>
        <details className="glass rounded-2xl p-5"><summary className="cursor-pointer font-bold">Where do you provide service?</summary><p className="mt-3 text-sm leading-6 text-slate-400">We serve Sankarankovil, Tenkasi Road, Rajapalayam Road, Puliyangudi and nearby villages.</p></details>
        <details className="glass rounded-2xl p-5"><summary className="cursor-pointer font-bold">How can I book an AC technician?</summary><p className="mt-3 text-sm leading-6 text-slate-400">Send your details through the enquiry form or WhatsApp and our local team will respond with the next available service time.</p></details>
      </div>
    </div>
  </section>;
}