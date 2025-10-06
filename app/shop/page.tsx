"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/Footer"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Minus, Plus, ShieldCheck, Package, Truck, Award } from "lucide-react"

export default function ShopPage() {
  const [quantity, setQuantity] = useState(1)
  const [promoCode, setPromoCode] = useState("")
  const [discount, setDiscount] = useState(0)
  const [promoApplied, setPromoApplied] = useState(false)
  const [starPositions, setStarPositions] = useState<Array<{left: number, top: number, delay: number}>>([])

  const basePrice = 395
  const maxQuantity = 10

  useEffect(() => {
    // Generate star positions once on client side to avoid hydration mismatch
    const generateStarPositions = (count: number) => {
      return Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3
      }))
    }
    
    setStarPositions(generateStarPositions(30))
  }, [])

  const handleQuantityChange = (delta: number) => {
    const newQuantity = Math.max(1, Math.min(maxQuantity, quantity + delta))
    setQuantity(newQuantity)
  }

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === "VIP20BUCKS") {
      setDiscount(20)
      setPromoApplied(true)
    } else {
      setDiscount(0)
      setPromoApplied(false)
      alert("Invalid promo code")
    }
  }

  const subtotal = basePrice * quantity
  const total = subtotal - discount * quantity
  const shipping = 15

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="relative overflow-hidden bg-gradient-to-r from-cyan-400 via-green-400 to-yellow-400">
        {/* Sparkling background effect */}
        <div className="absolute inset-0">
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

        <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-6">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-transparent scale-[0.8]">
                <img
                  src="/OuterPack.png"
                  alt="Silverpacks Launch Edition"
                  className="w-full h-full object-cover drop-shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-muted rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity"
                  >
                    <img
                      src={`/silver-coins-product-detail-${i}.jpg?height=200&width=200&query=silver coins graded slabs detail ${i}`}
                      alt={`Product detail ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <div className="mb-8">
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">Silverpacks Launch Edition</h1>
                <p className="text-3xl md:text-4xl font-bold text-white mb-6">${basePrice.toFixed(2)}</p>
                <p className="text-lg md:text-xl text-white leading-relaxed">
                  One Silverpacks Launch Edition, including 3 slabbed silver or gold coins. Each pack is guaranteed to
                  contain premium graded coins with a 1/10 chance of pulling a monster hit worth up to $4,000!
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-base md:text-lg text-white">Premium Slabs</p>
                    <p className="text-sm md:text-base text-white">NGC, PCGS, CAC, ANACS</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-base md:text-lg text-white">1/10 Odds</p>
                    <p className="text-sm md:text-base text-white">Monster hit chance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Package className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-base md:text-lg text-white">Limited Edition</p>
                    <p className="text-sm md:text-base text-white">Only 250 available</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Truck className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-base md:text-lg text-white">Insured Shipping</p>
                    <p className="text-sm md:text-base text-white">USPS Priority Mail</p>
                  </div>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <Label className="mb-3 block text-lg text-white">Quantity (Max 10 per order)</Label>
                <div className="flex items-center gap-6">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="border-border w-12 h-12"
                  >
                    <Minus className="w-5 h-5" />
                  </Button>
                  <span className="text-3xl md:text-4xl font-bold w-16 text-center text-white">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= maxQuantity}
                    className="border-border w-12 h-12"
                  >
                    <Plus className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-8">
                <Label htmlFor="promo" className="mb-3 block text-lg text-white">
                  Promo Code
                </Label>
                <div className="flex gap-3">
                  <Input
                    id="promo"
                    type="text"
                    placeholder="Enter code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 bg-background border-border text-lg py-3"
                    disabled={promoApplied}
                  />
                  <Button
                    onClick={applyPromoCode}
                    variant="outline"
                    disabled={promoApplied}
                    className="border-border bg-transparent px-6 py-3 text-lg"
                  >
                    Apply
                  </Button>
                </div>
                {promoApplied && (
                  <p className="text-white text-base mt-3">Promo code applied! ${discount} off per pack</p>
                )}
              </div>

              {/* Price Summary */}
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 mb-8 border border-white/30">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-base md:text-lg">
                    <span className="text-white">Subtotal</span>
                    <span className="font-semibold text-white">${subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-base md:text-lg">
                      <span className="text-white">Discount</span>
                      <span className="font-semibold text-white">-${(discount * quantity).toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-base md:text-lg">
                    <span className="text-white">Shipping</span>
                    <span className="font-semibold text-white">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-white/30 pt-3 flex justify-between">
                    <span className="font-bold text-lg md:text-xl text-white">Total</span>
                    <span className="font-bold text-2xl md:text-3xl text-white">${(total + shipping).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <Button className="w-full bg-silver text-background hover:bg-silver-light font-semibold text-xl py-8 mb-6">
                Proceed to Checkout
              </Button>

              {/* Square Badge */}
              <div className="flex items-center justify-center gap-3 text-base text-white">
                <ShieldCheck className="w-5 h-5" />
                <span>Secure checkout with Square</span>
              </div>

              {/* Important Info */}
              <div className="mt-10 p-6 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                <p className="text-base md:text-lg text-white">
                  <strong>Important:</strong> Packs will ship as a "drop" once all 250 packs sell out. All customers
                  have equal odds. Must be 18+ to order. No returns on mystery products.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-24 grid md:grid-cols-3 gap-10">
            <div className="text-center p-8 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
              <Package className="w-16 h-16 mx-auto mb-6 text-black" />
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-white">What's Inside</h3>
              <p className="text-base md:text-lg text-white">3 premium slabbed coins from trusted grading companies</p>
            </div>
            <div className="text-center p-8 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
              <Award className="w-16 h-16 mx-auto mb-6 text-black" />
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-white">Monster Hits</h3>
              <p className="text-base md:text-lg text-white">1/10 packs contain gold coins or rare Carson City Morgans</p>
            </div>
            <div className="text-center p-8 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
              <Truck className="w-16 h-16 mx-auto mb-6 text-black" />
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-white">Insured Shipping</h3>
              <p className="text-base md:text-lg text-white">$15 flat rate includes full insurance via USPS Priority</p>
            </div>
          </div>
        </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
