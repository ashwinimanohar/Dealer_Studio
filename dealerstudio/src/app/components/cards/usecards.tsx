"use client"

import { useState, useEffect } from "react"

export interface CardData {
  id: number
  title: string
  content: string | string[]
  buttonText: string
  image: string
  ctaText: string
}

interface UseCardsReturn {
  cards: CardData[]
  loading: boolean
  error: string | null
  refetch: () => void
}

export function useCards(): UseCardsReturn {
  const [cards, setCards] = useState<CardData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchCards = async () => {
    try {
      setLoading(true)
      setError(null)
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const response = await fetch("/data/cards.json")
      if (!response.ok) {
        throw new Error("Failed to fetch cards data")
      }

      const data = await response.json()
      setCards(data.cards)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred while fetching cards")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCards()
  }, [])

  return {
    cards,
    loading,
    error,
    refetch: fetchCards,
  }
}
