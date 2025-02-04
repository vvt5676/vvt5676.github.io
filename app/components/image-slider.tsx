"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const styles = {
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
} as const

interface ImageSliderProps {
  images: { src: string; alt: string }[]
  width: number
  height: number
}

export function ImageSlider({ images, width, height }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }, [images.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }, [images.length])

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isPlaying && images.length > 1) {
      interval = setInterval(goToNext, 2000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isPlaying, goToNext, images.length])

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev)
  }

  if (images.length === 0) {
    return <div className="text-center text-gray-600">No images to display</div>
  }

  return (
    <div className="relative w-full max-w-full mx-auto">
      <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg" style={styles.imageContainer}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className={`object-cover absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            sizes="(max-width: 768px) 100vw, 1200px) 50vw, 33vw"
            priority={index === 0}
          />
        ))}
      </div>
      {images.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={() => {
              goToPrevious()
              setIsPlaying(false)
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={() => {
              goToNext()
              setIsPlaying(false)
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 px-2 py-1 rounded-full flex items-center space-x-2">
            <p className="text-sm text-gray-800">{`${currentIndex + 1} / ${images.length}`}</p>
            <Button variant="ghost" size="sm" className="p-1" onClick={togglePlayPause}>
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

