"use client"

import { useState } from "react"
import { Card, CardImage, CardHeader, CardBody } from "./cards"
import Button from "../button"
import LoadingState from "./loadingstate"
import ErrorState from "./errorstate"
import { useCards } from "./usecards"

export default function CardSection() {
  const { cards, loading, error, refetch } = useCards()
  const [activeCard, setActiveCard] = useState<number>(1)

  const handleCardSelect = (cardIndex: number) => {
    setActiveCard(cardIndex)
  }

  if (loading) {
    return (
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <LoadingState />
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <ErrorState message={error} onRetry={refetch} />
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:max-w-4xl md:mx-auto lg:max-w-none items-stretch">
          {cards.map((card) => (
            <div key={card.id} className="h-full" onClick={() => handleCardSelect(card.id)}>
              <Card isActive={activeCard === card.id} className="h-full">
                <CardImage src={card.image} alt={card.title} />
                <CardHeader>{card.title}</CardHeader>
                <CardBody>
                  {Array.isArray(card.content) ? (
                    <>
                      <p className="mb-3">{card.content[0]}</p>
                      <p>{card.content[1]}</p>
                    </>
                  ) : (
                    <p>{card.content}</p>
                  )}
                </CardBody>
                <div className="px-6 pb-6">
                  <Button
                    className="w-full shadow-sm hover:shadow-md transition-shadow duration-200"
                    onClick={(e) => {
                      e?.stopPropagation()
                      handleCardSelect(card.id)
                    }}
                  >
                    {card.buttonText}
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
