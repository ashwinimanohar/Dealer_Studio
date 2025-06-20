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

  if (cards.length === 0) {
    return (
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-16">
            <p className="text-gray-600 dark:text-gray-400 text-lg">No data available</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:max-w-4xl md:mx-auto lg:max-w-none items-stretch">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-1 min-w-[300px] max-w-[400px]"
              onClick={() => handleCardSelect(card.id)}
            >
              <Card isActive={activeCard === card.id} className="w-full flex flex-col">
                <CardImage src={card.image} alt={card.title} ctaText={card.ctaText} />
                <CardHeader>{card.title}</CardHeader>
                <CardBody className="flex-grow">
                  {Array.isArray(card.content) ? (
                    <>
                      <p className="mb-3">{card.content[0]}</p>
                      <p>{card.content[1]}</p>
                    </>
                  ) : (
                    <p>{card.content}</p>
                  )}
                </CardBody>
                <div className="px-6 pb-6 mt-auto">
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
    </div>
  )
}
