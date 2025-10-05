"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
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
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-transparent">
                <img
                  src="/OuterPack.png"
                  alt="Silverpacks Launch Edition"
                  className="w-full h-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
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
              <div className="mb-6">
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-black text-stroke-white">Silverpacks Launch Edition</h1>
                <p className="text-2xl font-bold text-black text-stroke-white mb-4">${basePrice.toFixed(2)}</p>
                <p className="text-black text-stroke-white leading-relaxed">
                  One Silverpacks Launch Edition, including 3 slabbed silver or gold coins. Each pack is guaranteed to
                  contain premium graded coins with a 1/10 chance of pulling a monster hit worth up to $4,000!
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm text-black text-stroke-white">Premium Slabs</p>
                    <p className="text-xs text-black text-stroke-white">NGC, PCGS, CAC, ANACS</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm text-black text-stroke-white">1/10 Odds</p>
                    <p className="text-xs text-black text-stroke-white">Monster hit chance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Package className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm text-black text-stroke-white">Limited Edition</p>
                    <p className="text-xs text-black text-stroke-white">Only 250 available</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm text-black text-stroke-white">Insured Shipping</p>
                    <p className="text-xs text-black text-stroke-white">USPS Priority Mail</p>
                  </div>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <Label className="mb-2 block text-black text-stroke-white">Quantity (Max 10 per order)</Label>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="border-border"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="text-2xl font-bold w-12 text-center text-black text-stroke-white">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= maxQuantity}
                    className="border-border"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <Label htmlFor="promo" className="mb-2 block text-black text-stroke-white">
                  Promo Code
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="promo"
                    type="text"
                    placeholder="Enter code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 bg-background border-border"
                    disabled={promoApplied}
                  />
                  <Button
                    onClick={applyPromoCode}
                    variant="outline"
                    disabled={promoApplied}
                    className="border-border bg-transparent"
                  >
                    Apply
                  </Button>
                </div>
                {promoApplied && (
                  <p className="text-black text-stroke-white text-sm mt-2">Promo code applied! ${discount} off per pack</p>
                )}
              </div>

              {/* Price Summary */}
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-6 border border-white/30">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-black text-stroke-white">Subtotal</span>
                    <span className="font-semibold text-black text-stroke-white">${subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-black text-stroke-white">Discount</span>
                      <span className="font-semibold text-black text-stroke-white">-${(discount * quantity).toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-black text-stroke-white">Shipping</span>
                    <span className="font-semibold text-black text-stroke-white">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-black/30 pt-2 flex justify-between">
                    <span className="font-bold text-black text-stroke-white">Total</span>
                    <span className="font-bold text-xl text-black text-stroke-white">${(total + shipping).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <Button className="w-full bg-silver text-background hover:bg-silver-light font-semibold text-lg py-6 mb-4">
                Proceed to Checkout
              </Button>

              {/* Square Badge */}
              <div className="flex items-center justify-center gap-2 text-sm text-black text-stroke-white">
                <ShieldCheck className="w-4 h-4" />
                <span>Secure checkout with Square</span>
              </div>

              {/* Important Info */}
              <div className="mt-8 p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                <p className="text-sm text-black text-stroke-white">
                  <strong>Important:</strong> Packs will ship as a "drop" once all 250 packs sell out. All customers
                  have equal odds. Must be 18+ to order. No returns on mystery products.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
              <Package className="w-12 h-12 mx-auto mb-4 text-black" />
              <h3 className="font-serif text-xl font-bold mb-2 text-black text-stroke-white">What's Inside</h3>
              <p className="text-sm text-black text-stroke-white">3 premium slabbed coins from trusted grading companies</p>
            </div>
            <div className="text-center p-6 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
              <Award className="w-12 h-12 mx-auto mb-4 text-black" />
              <h3 className="font-serif text-xl font-bold mb-2 text-black text-stroke-white">Monster Hits</h3>
              <p className="text-sm text-black text-stroke-white">1/10 packs contain gold coins or rare Carson City Morgans</p>
            </div>
            <div className="text-center p-6 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
              <Truck className="w-12 h-12 mx-auto mb-4 text-black" />
              <h3 className="font-serif text-xl font-bold mb-2 text-black text-stroke-white">Insured Shipping</h3>
              <p className="text-sm text-black text-stroke-white">$15 flat rate includes full insurance via USPS Priority</p>
            </div>
          </div>
        </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
