"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export function EmailSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes("@")) {
      setStatus("error")
      setErrorMessage("Please enter a valid email address")
      return
    }

    setStatus("loading")
    setErrorMessage("")

    try {
      // Google Form submission URL for email signup
      const GOOGLE_FORM_URL = process.env.NEXT_PUBLIC_GOOGLE_FORM_EMAIL_URL || "YOUR_EMAIL_SIGNUP_GOOGLE_FORM_URL_HERE"
      
      // Create form data for Google Forms
      const formData = new FormData()
      formData.append("entry.1462667412", email) // Entry ID for email field
      
      console.log("Submitting to:", GOOGLE_FORM_URL) // Debug log
      console.log("Email:", email) // Debug log
      
      const response = await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors", // This helps with CORS issues
        body: formData,
      })

      // With no-cors mode, we can't check response.ok, so we'll assume success
      setStatus("success")
      setEmail("")
      
    } catch (error) {
      console.error("Form submission error:", error) // Debug log
      setStatus("error")
      setErrorMessage("Network error. Please check your connection and try again.")
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="p-1 bg-gradient-to-r from-[oklch(0.7_0.25_350)] via-[oklch(0.65_0.25_240)] via-[oklch(0.7_0.25_150)] via-[oklch(0.8_0.2_90)] to-[oklch(0.75_0.25_50)] rounded-lg">
        <div className="bg-background rounded-lg p-8 md:p-12">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Third Rail, sans-serif' }}>
              Stay Updated
            </h2>
            <p className="text-lg mb-8 text-gray-700">
              Be the first to know about new silver packs and exclusive offers.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="sr-only">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                  className="text-center bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-[oklch(0.7_0.25_350)] via-[oklch(0.65_0.25_240)] to-[oklch(0.7_0.25_150)] hover:opacity-90 transition-opacity" 
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>

            {status === "success" && (
              <Alert className="mt-4 border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  Thank you for subscribing! You'll receive updates about new silver packs.
                </AlertDescription>
              </Alert>
            )}

            {status === "error" && (
              <Alert className="mt-4 border-red-200 bg-red-50">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  {errorMessage}
                </AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
