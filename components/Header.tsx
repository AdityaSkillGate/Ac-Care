'use client';

import { Snowflake, Phone, Menu } from 'lucide-react';
import { siteConfig } from '@/data/site';

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="glass mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3">
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-sky-400 text-slate-950"><Snowflake size={20}/></span>
          <span>{siteConfig.shortName}</span>
        </a>
        <nav className="hidden gap-6 text-sm text-slate-200 md:flex">
          <a href="#home">Home</a><a href="#services">Services</a><a href="#diagnose">Diagnose</a><a href="#health">AC Health</a><a href="#areas">Areas</a><a href="#contact">Contact</a>
        </nav>
        <a href={`tel:${siteConfig.phone.replace(/\s/g,'')}`} className="hidden items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 md:flex"><Phone size={16}/> Call Now</a>
        <button className="md:hidden" aria-label="Open menu"><Menu/></button>
      </div>
    </header>
  );
}
