"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { BuyCoinsButton } from "@/components/buy-coins-button"

const slides = [
  {
    id: 1,
    type: "three-pouches",
    title: "Feeling Lucky?",
  },
  {
    id: 2,
    type: "monster-hits",
    title: "MONSTER HITS 1 IN 10 PACKS",
  },
  {
    id: 3,
    type: "single-pouch",
    title: "Get Silverpacks Launch Edition Today!",
    limitText: "LIMITED TO 250 PACKS",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [starPositions, setStarPositions] = useState<Array<{left: number, top: number, delay: number}>>([])
  const [threePouchStars, setThreePouchStars] = useState<Array<{left: number, top: number, delay: number}>>([])
  const [singlePouchStars, setSinglePouchStars] = useState<Array<{left: number, top: number, delay: number}>>([])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // Generate star positions once on client side to avoid hydration mismatch
    const generateStarPositions = (count: number) => {
      return Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3
      }))
    }
    
    setStarPositions(generateStarPositions(50))
    setThreePouchStars(generateStarPositions(30))
    setSinglePouchStars(generateStarPositions(30))
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
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden bg-gradient-to-b from-gray-300 via-gray-100 to-white">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.type === "monster-hits" && (
            <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-r from-cyan-400 via-green-400 to-yellow-400 overflow-hidden">
              {/* WhiteLightStarburst background - covers entire slide */}
              <img
                src="/WhiteLightStarburst.png"
                alt="White Light Starburst"
                className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
                style={{
                  width: '100vw',
                  height: '100vh',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  minWidth: '100%',
                  minHeight: '100%'
                }}
              />
              
              {/* Sparkling background effect */}
              <div className="absolute inset-0 z-5">
                {starPositions.map((star, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
                    style={{
                      left: `${star.left}%`,
                      top: `${star.top}%`,
                      animationDelay: `${star.delay}s`,
                    }}
                  />
                ))}
              </div>

              {/* Three Coins Image */}
              <div className="relative z-10 flex items-center justify-center mb-4 sm:mb-8">
                <img
                  src="/coins3X.png"
                  alt="Three Graded Coins"
                  className="w-full max-w-3xl sm:max-w-4xl md:max-w-5xl object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
                />
              </div>

              {/* MONSTER HITS Text - responsive positioning */}
              <div className="absolute bottom-20 sm:bottom-16 left-1/2 transform -translate-x-1/2 z-20 text-center px-4">
                <h1 className="font-[family-name:var(--font-third-rail)] text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black text-black text-stroke-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] mb-4 sm:mb-8 leading-tight">
                  {slide.title}
                </h1>
              </div>

              {/* Buy Button - responsive positioning */}
              <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <BuyCoinsButton />
              </div>
            </div>
          )}

          {slide.type === "three-pouches" && (
            <div className="relative w-full h-full bg-gradient-to-r from-cyan-400 via-green-400 to-yellow-400 overflow-hidden">
              {/* WhiteLightStarburst background - covers entire slide */}
              <img
                src="/WhiteLightStarburst.png"
                alt="White Light Starburst"
                className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
                style={{ 
                  width: '100vw', 
                  height: '100vh',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  minWidth: '100%',
                  minHeight: '100%',
                  maxWidth: 'none',
                  maxHeight: 'none'
                }}
              />
              
              {/* Sparkling background effect */}
              <div className="absolute inset-0 z-5">
                {threePouchStars.map((star, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
                    style={{
                      left: `${star.left}%`,
                      top: `${star.top}%`,
                      animationDelay: `${star.delay}s`,
                    }}
                  />
                ))}
              </div>

              {/* Silverback3X Image - positioned lower and much bigger */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <img
                  src="/silverback3X.png"
                  alt="Silverback3X"
                  className="w-full h-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
                  style={{ 
                    width: '95vw', 
                    height: '70vh',
                    maxWidth: 'none',
                    maxHeight: 'none'
                  }}
                />
              </div>

              {/* Buy Button - positioned much lower */}
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20 text-center">
                <BuyCoinsButton />
              </div>
            </div>
          )}

          {slide.type === "single-pouch" && (
            <div className="relative w-full h-full bg-gradient-to-r from-teal-400 via-green-300 to-yellow-400 overflow-hidden">
              {/* WhiteLightStarburst background - covers entire slide */}
              <img
                src="/WhiteLightStarburst.png"
                alt="White Light Starburst"
                className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
                style={{
                  width: '100vw',
                  height: '100vh',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  minWidth: '100%',
                  minHeight: '100%'
                }}
              />
              
              {/* Sparkling background effect */}
              <div className="absolute inset-0 z-5">
                {singlePouchStars.map((star, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
                    style={{
                      left: `${star.left}%`,
                      top: `${star.top}%`,
                      animationDelay: `${star.delay}s`,
                    }}
                  />
                ))}
              </div>

              {/* Main Content */}
              <div className="container mx-auto px-2 sm:px-4 h-full flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 py-4 sm:py-8">
                {/* Product image - centered */}
                <div className="flex items-center justify-center relative order-1">
                  <img
                    src="/OuterPack.png"
                    alt="Silverpack"
                    className="relative z-10 w-[70vw] sm:w-[60vw] md:w-[50vw] lg:w-[45vw] xl:w-[40vw] 2xl:w-[35vw] max-w-none object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
                  />
                </div>

                {/* Text and button - centered below image */}
                <div className="flex-1 text-center space-y-2 sm:space-y-3 md:space-y-4 order-2 relative z-30">
                    <h1 className="font-impact text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black leading-tight text-black text-stroke-white relative z-30">
                      Get Silverpacks<br />
                      Launch Edition<br />
                      Today!
                    </h1>
                  
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold font-[family-name:var(--font-third-rail)] relative z-30">
                    <span className="text-black text-stroke-white">LIMITED TO </span>
                    <span className="text-red-600 relative text-stroke-white inline-block">
                      250
                      <img 
                        src="/RedUnderline.png" 
                        alt="Red underline" 
                        className="absolute -bottom-1 left-0 w-full h-3 sm:h-4 object-contain z-30"
                      />
                    </span>
                    <span className="text-black text-stroke-white"> PACKS</span>
                  </div>
                  
                  {/* Buy Now Button */}
                  <div className="pt-2 sm:pt-4 relative z-30">
                    <BuyCoinsButton />
                  </div>
                </div>
              </div>
            </div>
          )}
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
  )
}
