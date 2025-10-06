import Link from "next/link"
import { Button } from "@/components/ui/button"

export function BuyCoinsButton({ className = "" }: { className?: string }) {
  return (
    <Link href="/shop">
      <Button
        size="lg"
        className={`bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:from-pink-500 hover:via-pink-600 hover:to-pink-700 text-black font-impact text-3xl md:text-4xl px-20 py-8 rounded-2xl border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden ${className}`}
        style={{
          textShadow: '2px 2px 0px white, -2px -2px 0px white, 2px -2px 0px white, -2px 2px 0px white, 0px 2px 0px white, 0px -2px 0px white, 2px 0px 0px white, -2px 0px 0px white',
          boxShadow: '0 0 30px rgba(168, 85, 247, 0.6), 0 0 60px rgba(168, 85, 247, 0.4), 0 0 90px rgba(168, 85, 247, 0.2)'
        }}
      >
        Buy Now
      </Button>
    </Link>
  )
}
