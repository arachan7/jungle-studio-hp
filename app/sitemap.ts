import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.junglestudiophoto.com';
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/column/shichigosan`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/column/half-birthday`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/column/omiyamairi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/column/birthday`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/column/nyuugaku`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/column/maternity`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/column/newborn`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/flow`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/tips`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/news/grand-open`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];
}
