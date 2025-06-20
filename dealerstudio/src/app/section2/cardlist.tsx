"use client"

import { useState } from "react"
import { Card, CardImage, CardHeader, CardBody } from "./cards"
import Button from "../button"

export default function CardSection() {
  const [activeCard, setActiveCard] = useState<number>(1)
  const handleCardSelect = (cardIndex: number) => {
    setActiveCard(cardIndex)
  }

  const cardData = [
    {
      id: 0,
      title: "Heading 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      buttonText: "Button 1",
    },
    {
      id: 1,
      title: "Heading 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      buttonText: "Button 2",
    },
    {
      id: 2,
      title: "Heading 3",
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
        "Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      ],
      buttonText: "Button 3",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:max-w-4xl md:mx-auto lg:max-w-none items-stretch">
          {cardData.map((card) => (
            <div key={card.id} className="h-full" onClick={() => handleCardSelect(card.id)}>
              <Card isActive={activeCard === card.id} className="h-full">
                <CardImage src="/brisbane_vgpzva.jpg" alt="City skyline" />
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
