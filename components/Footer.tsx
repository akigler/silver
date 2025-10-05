import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold text-silver mb-4">Silverpacks</h3>
            <p className="text-muted-foreground text-sm">
              The premier silver coin mystery pack experience for collectors.
            </p>
          </div>

          <div className="text-right">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Silverpacks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
