import './globals.css';
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: `${siteConfig.businessName} | AC Repair, Service & Installation in Sankarankovil`,
  description: 'Book trusted AC repair, service, installation, gas filling and maintenance in Sankarankovil, Tenkasi Road, Rajapalayam Road, Puliyangudi and nearby areas.',
  keywords: ['AC service Sankarankovil', 'AC repair Sankarankovil', 'AC installation Sankarankovil', 'AC gas filling Sankarankovil', 'AC maintenance Tenkasi District', 'air conditioner service near me'],
  category: 'HVAC services',
  openGraph: {
    title: `${siteConfig.businessName} | From Heat to Cool`,
    description: 'Fast local AC repair, installation and maintenance in Sankarankovil and nearby areas.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    name: siteConfig.businessName,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sankarankovil',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    areaServed: siteConfig.serviceAreas,
    serviceType: ['AC repair', 'AC installation', 'AC cleaning', 'AC gas filling', 'AC maintenance'],
    priceRange: '$$',
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
