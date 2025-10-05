"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItemProps {
  question: string
  answer: string
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-silver transition-colors"
      >
        <h3 className="font-serif text-xl md:text-2xl font-semibold pr-4">{question}</h3>
        <ChevronDown className={`w-6 h-6 flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="pb-6 text-muted-foreground leading-relaxed">
          <p className="text-pretty">{answer}</p>
        </div>
      )}
    </div>
  )
}
