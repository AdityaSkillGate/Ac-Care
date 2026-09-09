# Sankarankovil AC Care — From Heat to Cool

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## First file to edit

`data/site.ts`

Replace:
- businessName
- phone
- whatsappNumber (country code + number, numbers only)
- email
- address
- serviceAreas
- Facebook / Instagram / YouTube / Google Business links

## SEO before launch

Replace `https://example.com` in:
- `app/sitemap.ts`
- `app/robots.ts`

Also update metadata in `app/layout.tsx` if required.

## WhatsApp enquiry

The contact form does not need a backend. On submit it creates a prefilled WhatsApp message and opens the client's WhatsApp account.

## Recommended next additions

- Real client logo
- Real AC / technician / customer imagery
- Google Maps embed
- Testimonials / Google reviews
- Before/after repair slider
- Rich animated service journey
- Dedicated SEO pages for AC Repair, Installation, Gas Filling, General Service, and Water Leakage
- Backend lead storage later with Supabase if required
