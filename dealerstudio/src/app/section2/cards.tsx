import type React from "react"
import Image from "next/image"

interface CardProps {
  children: React.ReactNode
  isActive?: boolean
  className?: string
}

interface CardImageProps {
  src: string
  alt: string
  className?: string
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

interface CardBodyProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, isActive = false, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col  ${
        isActive ? "ring-4 ring-blue-500 shadow-lg" : "hover:ring-2 hover:ring-blue-400"
      } ${className}`}
    >
      {children}
    </div>
  )
}

export function CardImage({ src, alt, className = "" }: CardImageProps) {
  return (
    <div className={`relative w-full h-48 ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  )
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return (
    <div className={`px-6 pt-6 pb-2 ${className}`}>
      <h3 className="text-2xl font-bold text-gray-900">{children}</h3>
    </div>
  )
}

export function CardBody({ children, className = "" }: CardBodyProps) {
  return (
    <div className={`px-6 pb-2 flex-grow flex flex-col ${className}`}>
      <div className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{children}</div>
    </div>
  )
}
