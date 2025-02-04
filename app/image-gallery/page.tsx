"use client"

import { useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { ImageSlider } from "../components/image-slider"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ImageGalleryPage() {
  const [images, setImages] = useState<{ src: string; alt: string }[]>([
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      alt: "Industrial machine in a factory",
    },
    {
      src: "https://images.unsplash.com/photo-1565939884657-75c8b650c7e3",
      alt: "Colorful plastic pellets",
    },
  ])
  const [newImageUrl, setNewImageUrl] = useState("")
  const [newImageAlt, setNewImageAlt] = useState("")

  const addImage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newImageUrl) {
      setImages([...images, { src: newImageUrl, alt: newImageAlt || "Image description" }])
      setNewImageUrl("")
      setNewImageAlt("")
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Dynamic Image Gallery</h1>
          <p className="text-center text-gray-600 mb-8">Add your own images to the gallery!</p>

          <form onSubmit={addImage} className="mb-8 flex flex-col sm:flex-row gap-4 items-end justify-center">
            <div className="flex-grow max-w-md">
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <Input
                id="imageUrl"
                type="url"
                value={newImageUrl}
                onChange={(e) => setNewImageUrl(e.target.value)}
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>
            <div className="flex-grow max-w-md">
              <label htmlFor="imageAlt" className="block text-sm font-medium text-gray-700 mb-1">
                Image Description
              </label>
              <Input
                id="imageAlt"
                type="text"
                value={newImageAlt}
                onChange={(e) => setNewImageAlt(e.target.value)}
                placeholder="Describe the image"
              />
            </div>
            <Button type="submit">Add Image</Button>
          </form>

          {images.length > 0 ? (
            <ImageSlider images={images} width={1280} height={720} />
          ) : (
            <p className="text-center text-gray-600">No images added yet. Add some images to see the gallery!</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

