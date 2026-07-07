// copy-dist.js
// Copies dist/index.html to dist/TravelDeal-website.html for easy sharing
// Also ensures the dist folder has index.html for GitHub Pages

import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distDir = join(__dirname, 'dist');
const src = join(distDir, 'index.html');
const dest = join(distDir, 'TravelDeal-website.html');

if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
  console.log('Created dist/ directory');
}

if (existsSync(src)) {
  copyFileSync(src, dest);
  console.log('✅ Copied dist/index.html → dist/TravelDeal-website.html');
  console.log('📦 GitHub Pages will serve dist/index.html');
  console.log('📄 Standalone file: dist/TravelDeal-website.html');
} else {
  console.error('❌ dist/index.html not found. Run "npm run build" first.');
  process.exit(1);
}
