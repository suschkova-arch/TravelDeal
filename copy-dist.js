import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = join(__dirname, 'dist/index.html');
const dest = join(__dirname, 'dist/TravelDeal-website.html');

try {
  const content = readFileSync(src, 'utf-8');
  writeFileSync(dest, content);
  console.log(`✅ Скопировано: ${dest}`);
  console.log(`📦 Размер: ${(content.length / 1024).toFixed(1)} КБ`);
} catch (error) {
  console.error('❌ Ошибка при копировании:', error.message);
  console.log('Убедитесь, что проект собран: npm run build');
  process.exit(1);
}
