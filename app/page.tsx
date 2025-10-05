import { Navigation } from "@/components/navigation"
import { HeroSlider } from "@/components/hero-slider"
import { EmailSignup } from "@/components/email-signup"
import { Footer } from "@/components/footer"
import { Coins } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Slider */}
      <div className="mt-20">
        <HeroSlider />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Video Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="p-1 bg-gradient-to-r from-[oklch(0.7_0.25_350)] via-[oklch(0.65_0.25_240)] to-[oklch(0.7_0.25_150)] rounded-lg">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/s6n-8QeSXjQ"
                  title="Silverpacks Product Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* Email Signup */}
        <section className="mb-20">
          <EmailSignup />
        </section>

        {/* What is Silverpacks */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-1 bg-gradient-to-br from-[oklch(0.7_0.25_350)] via-[oklch(0.65_0.25_240)] via-[oklch(0.7_0.25_150)] via-[oklch(0.8_0.2_90)] to-[oklch(0.75_0.25_50)] rounded-full">
                <div className="p-4 bg-background rounded-full">
                  <Coins className="w-12 h-12 text-silver" />
                </div>
              </div>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">What is Silverpacks?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Silverpacks is the premier silver coin mystery pack experience designed specifically for coin collectors
              and silver stackers. Each pack contains three premium slabbed silver coins with the chance to open monster
              hits including pre-1933 gold $2.50 pieces, BU Carson City GSA Morgan Dollars, and an MS63 Saint Gaudens
              $20 double eagle! Silverpacks brings the same excitement and fun of cracking packs of sports cards and
              trading cards to the coin world. Don't miss out on grabbing one of the 250 Launch Edition packs!
            </p>
          </div>
        </section>

        {/* Instagram Feed */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[oklch(0.7_0.25_350)] via-[oklch(0.65_0.25_240)] via-[oklch(0.7_0.25_150)] to-[oklch(0.75_0.25_50)] bg-clip-text text-transparent">
              Follow Our Rips
            </h2>
            <a
              href="https://instagram.com/silverpacksrips"
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver hover:text-silver-light transition-colors font-medium"
            >
              @silverpacksrips
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square bg-muted rounded-lg overflow-hidden group">
                <div className="relative w-full h-full group-hover:p-1 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[oklch(0.7_0.25_350)] group-hover:via-[oklch(0.65_0.25_240)] group-hover:to-[oklch(0.7_0.25_150)]">
                  <img
                    src={`/silver-coins-graded-slabs-instagram-post-.jpg?height=400&width=400&query=silver coins graded slabs instagram post ${i}`}
                    alt={`Instagram post ${i}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border-2 border-transparent hover:border-[oklch(0.7_0.25_350)] transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[oklch(0.7_0.25_350)] to-[oklch(0.65_0.25_240)] rounded-full flex items-center justify-center">
                <img src="/silver-bar-icon.jpg" alt="Premium coins" className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Premium Slabs</h3>
              <p className="text-muted-foreground text-sm">Only NGC, PCGS, CAC, and ANACS graded coins included</p>
            </div>

            <div className="text-center p-6 rounded-lg border-2 border-transparent hover:border-[oklch(0.7_0.25_150)] transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[oklch(0.7_0.25_150)] to-[oklch(0.8_0.2_90)] rounded-full flex items-center justify-center">
                <img src="/gold-coin-icon.png" alt="Monster hits" className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">1/10 Odds</h3>
              <p className="text-muted-foreground text-sm">25 monster hits hidden in 250 packs</p>
            </div>

            <div className="text-center p-6 rounded-lg border-2 border-transparent hover:border-[oklch(0.75_0.25_50)] transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[oklch(0.8_0.2_90)] to-[oklch(0.75_0.25_50)] rounded-full flex items-center justify-center">
                <img src="/silver-coins-stack-icon.jpg" alt="Limited edition" className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Limited Edition</h3>
              <p className="text-muted-foreground text-sm">Only 250 Launch Edition packs available</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
