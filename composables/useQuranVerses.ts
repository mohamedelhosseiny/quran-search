import { useQuery } from "@tanstack/vue-query";
import type { Ref } from "vue";
import { computed } from "vue";

interface Verse {
  id: number;
  text: string;
  translation: string;
  surah_number: number;
  verse_number: number;
  verse: string;
  translation_eng?: string;
}

interface ApiResponse {
  data: Verse[];
}

export const useQuranVerses = (query: Ref<string>) => {
  const fetchVerses = async (): Promise<Verse[]> => {
    if (!query.value.trim()) {
      return [];
    }

    const response = await fetch(
      `https://quran-search-88e99fc3600d.herokuapp.com/api/lexical/search/${encodeURIComponent(
        query.value
      )}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result: ApiResponse = await response.json();
    return Array.isArray(result.data) ? result.data : [];
  };

  return useQuery({
    queryKey: ["verses", query],
    queryFn: fetchVerses,
    staleTime: 1000 * 60 * 60, // 1 hour
    enabled: computed(() => !!query.value.trim()),
  });
};
