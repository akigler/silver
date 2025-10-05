'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is Silver Packs?",
      answer: "Silver Packs is a premium silver investment platform that provides carefully curated silver packages to help you build wealth through precious metals investment."
    },
    {
      question: "How do I get started?",
      answer: "Simply choose a plan that fits your investment goals, create an account, and start investing in our premium silver packages. Our team will guide you through the entire process."
    },
    {
      question: "Is my investment secure?",
      answer: "Yes, all investments are protected with bank-level security, insurance coverage, and are stored in secure, insured facilities."
    },
    {
      question: "Can I withdraw my investment anytime?",
      answer: "Yes, you can liquidate your silver holdings at any time. We provide competitive buyback rates and fast processing."
    },
    {
      question: "What makes Silver Packs different?",
      answer: "We offer expert guidance, premium silver selection, secure storage, and a supportive community of successful investors."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about Silver Packs.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
