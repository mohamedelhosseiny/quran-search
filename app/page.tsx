"use client";

import { useState } from "react";
import { quranVerses } from "../data/quranVerses";
import { matchArabicText } from "../utils/arabicTextMatcher";
import SearchInput from "../components/SearchInput";
import SearchResults from "../components/SearchResults";

export default function QuranSearch() {
  const [searchResults, setSearchResults] = useState<typeof quranVerses>([]);

  const handleSearch = (searchTerm: string) => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
    } else {
      const results = quranVerses
        .filter(
          (verse) =>
            matchArabicText(searchTerm, verse.text) ||
            verse.translation.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, 4);
      setSearchResults(results);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8">Quran Verse Search</h1>
      <SearchInput onSearch={handleSearch} />
      <SearchResults results={searchResults} />
    </div>
  );
}
