"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { BuyCoinsButton } from "@/components/buy-coins-button"

const slides = [
  {
    id: 1,
    image: "/s1.png",
    title: "Feeling Lucky?",
  },
  {
    id: 2,
    image: "/s2.png",
    title: "MONSTER HITS 1 IN 10 PACKS",
  },
  {
    id: 3,
    image: "/s3.png",
    title: "Get Silverpacks Launch Edition Today!",
    limitText: "LIMITED TO 250 PACKS",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <>
      <style jsx>{`
        @media (min-width: 640px) {
          .slide-1-button { bottom: 56px !important; }
          .slide-2-button { bottom: 50px !important; }
          .slide-3-button { bottom: 64px !important; }
        }
      `}</style>
      <div className="relative w-full aspect-video max-w-screen-xl mx-auto overflow-hidden mt-4 sm:mt-8">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {/* Main Image - fills container perfectly */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            
            {/* Buy Now Button Overlay - Different positions for each slide */}
            {slide.id === 1 && (
              <div className="absolute left-1/2 transform -translate-x-1/2 z-20 slide-1-button" style={{ bottom: '8px' }}>
                <div className="scale-50 lg:scale-100 sm:mb-2">
                  <BuyCoinsButton />
                </div>
              </div>
            )}
            {slide.id === 2 && (
              <div className="absolute left-1/2 transform -translate-x-1/2 z-20 slide-2-button" style={{ bottom: '0px' }}>
                <div className="scale-50 lg:scale-100 sm:mb-2">
                  <BuyCoinsButton />
                </div>
              </div>
            )}
            {slide.id === 3 && (
              <div className="absolute left-2/3 -translate-x-1/3 z-20 slide-3-button" style={{ bottom: '8px' }}>
                <div className="scale-50 lg:scale-100 sm:mb-2">
                  <BuyCoinsButton />
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/50 hover:bg-background/75 text-white transition-colors z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/50 hover:bg-background/75 text-white transition-colors z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-silver w-8" : "bg-muted-foreground hover:bg-silver"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
    </>
  )
}
