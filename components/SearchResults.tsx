import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from 'lucide-react'

interface SearchResultsProps {
  results: {
    id: number
    surah: number
    ayah: number
    text: string
    translation: string
  }[]
}

export default function SearchResults({ results }: SearchResultsProps) {
  const [copiedId, setCopiedId] = useState<number | null>(null)

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    })
  }

  if (results.length === 0) {
    return null
  }

  return (
    <div className="w-full max-w-2xl space-y-4">
      {results.map((verse) => (
        <Card key={verse.id}>
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h2 className="text-lg font-semibold">Surah {verse.surah}, Ayah {verse.ayah}</h2>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(verse.text, verse.id)}
              >
                {copiedId === verse.id ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Copied
                  </>
                ) : (
                  'Copy'
                )}
              </Button>
            </div>
            <p className="text-right text-xl mb-2" lang="ar" dir="rtl">{verse.text}</p>
            <p className="text-sm text-gray-600">{verse.translation}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

