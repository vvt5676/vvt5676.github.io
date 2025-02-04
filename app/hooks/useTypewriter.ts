"use client"

import { useState, useEffect } from "react"

export function useTypewriter(text: string, speed = 50) {
  const [displayText, setDisplayText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index])
        setIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setDisplayText("")
        setIndex(0)
      }, 2000) // Wait for 2 seconds before restarting

      return () => clearTimeout(timer)
    }
  }, [index, text, speed])

  return displayText
}

