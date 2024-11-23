const fs = require("fs");

// Example input data
const surahs = JSON.parse(
  fs.readFileSync("../../Downloads/quran.json", "utf8")
);

// Function to flatten all verses
function flattenVerses(surahs) {
  const flattened = [];
  surahs.forEach((surah) => {
    surah.verses.forEach((verse) => {
      flattened.push({
        id: flattened.length + 1, // Sequential unique ID for each verse
        surah: surah.id,
        ayah: verse.id,
        text: verse.text,
        translation: "", // Add translations here if available
      });
    });
  });
  return flattened;
}

// Flattened verses
const quranVerses = flattenVerses(surahs);

// Convert to TypeScript export format
const output = `export const quranVerses = ${JSON.stringify(
  quranVerses,
  null,
  2
)};`;

// Write to quranVerses.ts
fs.writeFileSync("quranVerses.ts", output, "utf8");

console.log("quranVerses.ts file has been generated successfully.");
