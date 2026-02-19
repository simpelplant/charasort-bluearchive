// @ts-check
import { writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const baseUrl = 'https://schaledb.com/data';
const localeSource = {
  en: 'en',
  ja: 'jp',
  ko: 'kr',
};

const outputDir = join('src', 'i18n');

/** @type {(locale: string, sourceLocale: string, remoteName: string, localName: string) => Promise<void>} */
async function downloadFile(locale, sourceLocale, remoteName, localName) {
  const url = `${baseUrl}/${sourceLocale}/${remoteName}`;
  const response = await fetch(url, { headers: { accept: 'application/json' } });
  if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`);
  const outPath = join(outputDir, localName);
  await writeFile(outPath, await response.text(), 'utf8');
  console.log(`Downloaded ${url} -> ${outPath}`);
}

await mkdir(outputDir, { recursive: true });
await Promise.all(Object.entries(localeSource).flatMap(([locale, sourceLocale]) => [
  downloadFile(locale, sourceLocale, 'students.min.json', `student.${locale}.min.json`),
  downloadFile(locale, sourceLocale, 'localization.min.json', `localization.${locale}.min.json`),
]));
