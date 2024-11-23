import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

interface SearchInputProps {
  onSearch: (searchTerm: string) => void;
}

export default function SearchInput({ onSearch }: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(searchTerm);
    }, 100);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, onSearch]);

  return (
    <div className="w-full max-w-md mb-8">
      <Input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a verse..."
        className="w-full"
      />
    </div>
  );
}
