import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const BASE_URL = 'https://nilexindustrial.com';
const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

const pages = [
  {
    loc: '/',
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    loc: '/privacy-policy',
    changefreq: 'yearly',
    priority: '0.3',
  },
  // Add more routes here if the site ever grows
  // { loc: '/products', changefreq: 'monthly', priority: '0.8' },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${BASE_URL}${page.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

const outPath = resolve(__dirname, '../public/sitemap.xml');
writeFileSync(outPath, xml, 'utf-8');
console.log(`✓ sitemap.xml generated → ${outPath}`);