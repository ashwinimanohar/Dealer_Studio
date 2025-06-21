import type React from "react"
import Image from "next/image"

interface CardProps {
  children: React.ReactNode
  isActive?: boolean
  className?: string
  "data-testid"?: string
}

interface CardImageProps {
  src: string
  alt: string
  ctaText?: string
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

export function Card({ children, isActive = false, className = "", "data-testid": dataTestId }: CardProps) {
  return (
    <div
      data-testid={dataTestId}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer ${
        isActive
          ? "ring-4 ring-blue-500 shadow-lg transform scale-[1.02] transition-all duration-500 ease-out"
          : "hover:ring-4 hover:ring-blue-400"
      } ${className}`}
    >
      {children}
    </div>
  )
}

export function CardImage({ src, alt, ctaText, className = "" }: CardImageProps) {
  return (
    <div className={`relative w-full h-48 overflow-hidden group ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

      {ctaText && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <div className="bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-lg shadow-lg">
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 text-center">{ctaText}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return (
    <div className={`px-6 pt-6 pb-2 ${className}`}>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{children}</h3>
    </div>
  )
}

export function CardBody({ children, className = "" }: CardBodyProps) {
  return (
    <div className={`px-6 pb-2 flex-grow flex flex-col ${className}`}>
      <div className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-grow">{children}</div>
    </div>
  )
}
