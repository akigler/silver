import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FAQItem } from "@/components/faq-item"
import { BuyCoinsButton } from "@/components/buy-coins-button"
import { Coins } from "lucide-react"

const faqs = [
  {
    question: "What is Silverpacks?",
    answer:
      "Silverpacks is the premier silver coin mystery pack experience designed specifically for coin collectors and silver stackers. Each pack contains three premium slabbed silver coins with the chance to open monster hits including pre-1933 gold $2.50 pieces, BU Carson City Morgan Dollars, and an MS63 Saint Gaudens $20 double eagle! Silverpacks brings the same excitement and fun of cracking packs of sports cards and trading cards to the coin world.",
  },
  {
    question: "What's inside each Silverpacks Pack?",
    answer:
      "Each pack is guaranteed to contain 3 premium slabbed coins including MS Morgan Dollars, MS Peace Dollars, silver ancient coins, MS American Silver Eagles, and many other types of silver coins. Additionally, 1/10 packs contain a Silverpacks Hit, which could be a BU Carson City Morgan Dollar, $2.50 Gold Liberty or Indian, or even the mega hit: an MS63 Saint Gaudens $20 Double Eagle gold coin!",
  },
  {
    question: "What types of slabs are included?",
    answer:
      "Don't worry, there are no dubious grading companies' slabs included in any Silverpacks product. You can expect NGC, PCGS, CAC, and ANACS slabs to be included.",
  },
  {
    question: 'What are the odds of opening a "hit?"',
    answer:
      "There are a total of 250 packs, each with 3 coins for a total of 750 coins in the Silverpacks Launch Edition. There are 15 Slabbed (not graded) BU Carson City Morgan Dollars, 9 $2.50 gold quarter eagles, and 1 MS St. Gaudens $20 Double Eagle. This means that there are 25 hits hidden within 250 total packs, meaning you have 1/10 odds of getting a hit!",
  },
  {
    question: "What are the shipping details?",
    answer:
      "Silverpacks is currently only available within the continental US. Silverpacks will be shipped as a \"drop,\" meaning that no packages will be shipped out until the product sells out (don't worry, we're expecting this to sell out very quickly!). This ensures that all packs are distributed fairly and randomly, with everyone having an equal and fair chance at getting the big hits! You will receive a confirmation email with tracking once the package ships. Shipping costs are a flat fee of $15 which includes insurance. Packages will ship as insured USPS Priority Mail.",
  },
  {
    question: "Can I order as many Silverpacks as I want?",
    answer:
      "Orders will be limited to a maximum of 10 per customer. We want everyone to be able to enjoy! To comply with all local, state, and federal laws, all customers must be 18 years of age or older to place an order.",
  },
  {
    question: "What is the return policy?",
    answer: "Since this is a mystery product we cannot accept any returns.",
  },
  {
    question: 'What are "CC Morgan Dollar Redemption Cards"?',
    answer:
      "Because our Carson City Morgan Dollars are slabbed in oversized holders (Uncirculated GSA Morgans), they don't fit inside a standard Silverpack. Instead, we've hidden 15 special Redemption Cards in the packs. If you pull one, you'll also get a bonus coin in that pack. Each Redemption Card has a unique code you can enter on our website along with your shipping info, and we'll ship your CC Morgan Dollar to you free of charge.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 py-32">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-1 bg-gradient-to-br from-[oklch(0.7_0.25_350)] via-[oklch(0.65_0.25_240)] via-[oklch(0.7_0.25_150)] via-[oklch(0.8_0.2_90)] to-[oklch(0.75_0.25_50)] rounded-full">
              <div className="p-4 bg-background rounded-full">
                <Coins className="w-16 h-16 text-silver" />
              </div>
            </div>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Everything you need to know about Silverpacks Launch Edition
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-muted rounded-lg p-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 text-pretty">
              Don't miss out on the Launch Edition - only 250 packs available!
            </p>
            <BuyCoinsButton />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
