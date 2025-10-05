import Link from "next/link"
import { Button } from "@/components/ui/button"

export function BuyCoinsButton({ className = "" }: { className?: string }) {
  return (
    <Link href="/shop">
      <Button
        size="lg"
        className={`bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 hover:from-pink-600 hover:via-purple-600 hover:to-pink-700 text-black font-impact text-3xl md:text-4xl px-20 py-8 rounded-2xl border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden ${className}`}
        style={{
          textShadow: '1px 1px 0px white, -1px -1px 0px white, 1px -1px 0px white, -1px 1px 0px white',
          boxShadow: '0 0 30px rgba(168, 85, 247, 0.6), 0 0 60px rgba(168, 85, 247, 0.4), 0 0 90px rgba(168, 85, 247, 0.2)'
        }}
      >
        Buy Now
      </Button>
    </Link>
  )
}
