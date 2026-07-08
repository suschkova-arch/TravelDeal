import { readFileSync, copyFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, 'dist');
if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

// Актуальная React-сборка
const builtSrc = join(__dirname, 'dist/index.html');
const builtAlias = join(__dirname, 'dist/TravelDeal-website.html');
const builtRoot = join(__dirname, 'TravelDeal-website.html');

try {
  copyFileSync(builtSrc, builtAlias);
  copyFileSync(builtSrc, builtRoot);
  const content = readFileSync(builtSrc, 'utf-8');
  console.log(`✅ Основная сборка: ${builtSrc}`);
  console.log(`✅ Копия в dist: ${builtAlias}`);
  console.log(`✅ Копия в корне: ${builtRoot}`);
  console.log(`📦 Размер актуальной сборки: ${(content.length / 1024).toFixed(1)} КБ`);
} catch (error) {
  console.error('❌ Ошибка при копировании React-сборки:', error.message);
}

// Standalone-версия как отдельный дополнительный вариант
const publicSrc = join(__dirname, 'public/TravelDeal-website.html');
const standaloneRoot = join(__dirname, 'TravelDeal-standalone.html');

try {
  copyFileSync(publicSrc, standaloneRoot);
  console.log(`✅ Standalone-версия: ${standaloneRoot}`);
} catch (error) {
  console.error('❌ Ошибка при копировании standalone:', error.message);
}

