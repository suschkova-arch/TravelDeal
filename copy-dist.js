import { readFileSync, writeFileSync, copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Копируем собранный dist/index.html → dist/TravelDeal-website.html
const src = join(__dirname, 'dist/index.html');
const destDist = join(__dirname, 'dist/TravelDeal-website.html');

try {
  const content = readFileSync(src, 'utf-8');
  writeFileSync(destDist, content);
  console.log(`✅ Скопировано: ${destDist}`);
  console.log(`📦 Размер: ${(content.length / 1024).toFixed(1)} КБ`);
} catch (error) {
  console.error('❌ Ошибка при копировании в dist:', error.message);
}

// Копируем самодостаточный public/ → TravelDeal-standalone.html (в корень)
const standaloneSrc = join(__dirname, 'public/TravelDeal-website.html');
const standaloneDest = join(__dirname, 'TravelDeal-standalone.html');

try {
  copyFileSync(standaloneSrc, standaloneDest);
  const stContent = readFileSync(standaloneSrc, 'utf-8');
  console.log(`✅ Самодостаточный сайт: ${standaloneDest}`);
  console.log(`📦 Размер: ${(stContent.length / 1024).toFixed(1)} КБ`);
} catch (error) {
  console.error('❌ Ошибка при копировании standalone:', error.message);
}
