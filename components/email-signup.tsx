"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function EmailSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // TODO: Implement email signup logic
    setTimeout(() => {
      setStatus("success")
      setEmail("")
    }, 1000)
  }

  return (
    <div className="p-1 bg-gradient-to-r from-[oklch(0.7_0.25_350)] via-[oklch(0.65_0.25_240)] via-[oklch(0.7_0.25_150)] via-[oklch(0.8_0.2_90)] to-[oklch(0.75_0.25_50)] rounded-lg">
      <div className="bg-background rounded-lg p-8 md:p-12">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
          Join Our Mailing List
        </h2>
        <p className="text-center text-muted-foreground mb-8 text-pretty">
          Be the first to learn about future drops and exclusive offers!
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-background border-border text-foreground"
            />
            <Button
              type="submit"
              disabled={status === "loading"}
              className="bg-gradient-to-r from-[oklch(0.7_0.25_350)] via-[oklch(0.65_0.25_240)] to-[oklch(0.7_0.25_150)] text-white hover:opacity-90 font-semibold"
            >
              {status === "loading" ? "Signing up..." : "Sign Up"}
            </Button>
          </div>
          {status === "success" && (
            <p className="text-[oklch(0.7_0.25_150)] text-sm mt-3 text-center font-semibold">
              Thanks for signing up! Check your email for confirmation.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
