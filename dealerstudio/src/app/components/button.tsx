"use client"

import type React from "react"

interface ButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({ children, variant = "primary", size = "md", className = "", onClick }: ButtonProps) {
  const baseClasses =
    "font-semibold rounded-full transition-colors duration-200 "

  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white ",
    secondary: "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 ",
  }

  const sizeClasses = {
    sm: "py-1 px-4 text-sm",
    md: "py-2 px-8 text-base",
    lg: "py-3 px-10 text-lg",
  }

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
