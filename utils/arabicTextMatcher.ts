export function normalizeArabicText(text: string): string {
  return text
    .replace(/[َُِّْٰٖۭۢۚۖۗ]/g, '') // Remove diacritics
    .replace(/[ًٌٍ]/g, '') // Remove tanween
    .replace(/ة/g, 'ه') // Replace taa marbouta with haa
    .replace(/[أإآ]/g, 'ا') // Normalize alif
    .replace(/ى/g, 'ي') // Replace alif maksura with yaa
    .trim();
}

export function matchArabicText(searchText: string, verseText: string): boolean {
  const normalizedSearch = normalizeArabicText(searchText);
  const normalizedVerse = normalizeArabicText(verseText);
  return normalizedVerse.includes(normalizedSearch);
}

