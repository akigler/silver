"use client"

import type React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/Footer"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Ticket } from "lucide-react"

type FormType = "none" | "redemption" | "contact"

export default function ContactPage() {
  const [formType, setFormType] = useState<FormType>("none")
  const [activeCard, setActiveCard] = useState<"redemption" | "contact" | null>(null)

  const handleCardClick = (type: "redemption" | "contact") => {
    setFormType(type)
    setActiveCard(type)
  }

  const handleBack = () => {
    setFormType("none")
    setActiveCard(null)
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-impact text-5xl md:text-6xl font-bold mb-6 text-balance">Get in Touch</h1>
            <p className="text-xl text-muted-foreground text-pretty">Choose how you'd like to contact us</p>
          </div>

          {/* Form Type Selection */}
          {formType === "none" && (
            <div className="grid md:grid-cols-2 gap-8">
              <button
                onClick={() => handleCardClick("redemption")}
                className={`group p-8 bg-muted rounded-lg hover:bg-muted/80 transition-all hover:scale-105 ${
                  activeCard === "redemption" ? "ring-4 ring-blue-500 bg-blue-50" : ""
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 mb-6 bg-silver/10 rounded-full flex items-center justify-center group-hover:bg-silver/20 transition-colors">
                    <Ticket className="w-10 h-10 text-silver" />
                  </div>
                  <h2 className="font-impact text-2xl font-bold mb-3">Redemption Card</h2>
                  <p className="text-muted-foreground">Submit your Carson City Morgan Dollar redemption card code</p>
                </div>
              </button>

              <button
                onClick={() => handleCardClick("contact")}
                className={`group p-8 bg-muted rounded-lg hover:bg-muted/80 transition-all hover:scale-105 ${
                  activeCard === "contact" ? "ring-4 ring-blue-500 bg-blue-50" : ""
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 mb-6 bg-silver/10 rounded-full flex items-center justify-center group-hover:bg-silver/20 transition-colors">
                    <Mail className="w-10 h-10 text-silver" />
                  </div>
                  <h2 className="font-impact text-2xl font-bold mb-3">General Contact</h2>
                  <p className="text-muted-foreground">Send us a message with questions or feedback</p>
                </div>
              </button>
            </div>
          )}

          {/* Redemption Form */}
          {formType === "redemption" && (
            <div className="bg-muted rounded-lg p-8 animate-in slide-in-from-bottom-4 duration-300">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-impact text-3xl font-bold">Redemption Card Submission</h2>
                <Button variant="ghost" onClick={handleBack}>
                  Back
                </Button>
              </div>
              <RedemptionForm />
            </div>
          )}

          {/* Contact Form */}
          {formType === "contact" && (
            <div className="bg-muted rounded-lg p-8 animate-in slide-in-from-bottom-4 duration-300">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-impact text-3xl font-bold">Contact Us</h2>
                <Button variant="ghost" onClick={handleBack}>
                  Back
                </Button>
              </div>
              <ContactForm />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

function RedemptionForm() {
  const [step, setStep] = useState<"code" | "form">("code")
  const [code, setCode] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
  })
  const [image, setImage] = useState<File | null>(null)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const validateCode = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/validate-redemption", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: code.toUpperCase() }),
      })

      if (response.ok) {
        setStep("form")
        setStatus("idle")
      } else {
        const data = await response.json()
        setStatus("error")
        setErrorMessage(data.error || "Invalid redemption code. Please check and try again.")
      }
    } catch (error) {
      setStatus("error")
      setErrorMessage("Network error. Please try again.")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("code", code)
      formDataToSend.append("firstName", formData.firstName)
      formDataToSend.append("lastName", formData.lastName)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("phone", formData.phone)
      formDataToSend.append("address", formData.address)
      formDataToSend.append("address2", formData.address2)
      formDataToSend.append("city", formData.city)
      formDataToSend.append("state", formData.state)
      formDataToSend.append("zipCode", formData.zipCode)
      if (image) {
        formDataToSend.append("image", image)
      }

      const response = await fetch("/api/submit-redemption", {
        method: "POST",
        body: formDataToSend,
      })

      if (response.ok) {
        setStatus("success")
      } else {
        const data = await response.json()
        setStatus("error")
        setErrorMessage(data.error || "Failed to submit redemption. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setErrorMessage("Network error. Please try again.")
    }
  }

  if (step === "code") {
    return (
      <form onSubmit={validateCode} className="space-y-6">
        <div>
          <Label htmlFor="code">Redemption Code</Label>
          <Input
            id="code"
            type="text"
            placeholder="Enter your redemption code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
            className="bg-background border-border mt-2"
          />
          <p className="text-sm text-muted-foreground mt-2">Enter the unique code found on your redemption card</p>
          {errorMessage && <p className="text-sm text-destructive mt-2">{errorMessage}</p>}
        </div>
        <Button
          type="submit"
          disabled={status === "loading"}
          className="bg-silver text-background hover:bg-silver-light"
        >
          {status === "loading" ? "Validating..." : "Validate Code"}
        </Button>
      </form>
    )
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 mx-auto mb-6 bg-silver/10 rounded-full flex items-center justify-center">
          <Ticket className="w-10 h-10 text-silver" />
        </div>
        <h3 className="font-impact text-2xl font-bold mb-4">Redemption Submitted!</h3>
        <p className="text-muted-foreground mb-6">
          Your Carson City Morgan Dollar will be shipped to you free of charge. You'll receive a tracking number via
          email.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errorMessage && (
        <div className="p-4 bg-destructive/10 border border-destructive rounded-lg">
          <p className="text-sm text-destructive">{errorMessage}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            type="text"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            required
            className="bg-background border-border mt-2"
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            required
            className="bg-background border-border mt-2"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="bg-background border-border mt-2"
        />
      </div>

      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          className="bg-background border-border mt-2"
        />
      </div>

      <div>
        <Label htmlFor="address">Shipping Address</Label>
        <Input
          id="address"
          type="text"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          required
          className="bg-background border-border mt-2"
        />
      </div>

      <div>
        <Label htmlFor="address2">Address Line 2 (Optional)</Label>
        <Input
          id="address2"
          type="text"
          value={formData.address2}
          onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
          className="bg-background border-border mt-2"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            type="text"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            required
            className="bg-background border-border mt-2"
          />
        </div>
        <div>
          <Label htmlFor="state">State</Label>
          <Input
            id="state"
            type="text"
            value={formData.state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
            required
            className="bg-background border-border mt-2"
          />
        </div>
        <div>
          <Label htmlFor="zipCode">Zip Code</Label>
          <Input
            id="zipCode"
            type="text"
            value={formData.zipCode}
            onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
            required
            className="bg-background border-border mt-2"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="image">Upload Image</Label>
        <Input
          id="image"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          required
          className="bg-background border-border mt-2"
        />
        <p className="text-sm text-muted-foreground mt-2">
          Please upload a picture of your redemption card with a handwritten note containing your name and today's date
        </p>
      </div>

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-silver text-background hover:bg-silver-light"
      >
        {status === "loading" ? "Submitting..." : "Submit Redemption"}
      </Button>
    </form>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ firstName: "", lastName: "", email: "", message: "" })
      } else {
        const data = await response.json()
        setStatus("error")
        setErrorMessage(data.error || "Failed to send message. Please try again.")
      }
    } catch (error) {
      setStatus("error")
      setErrorMessage("Network error. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 mx-auto mb-6 bg-silver/10 rounded-full flex items-center justify-center">
          <Mail className="w-10 h-10 text-silver" />
        </div>
        <h3 className="font-impact text-2xl font-bold mb-4">Message Sent!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for contacting us. We'll get back to you as soon as possible.
        </p>
        <Button onClick={() => setStatus("idle")} variant="outline">
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errorMessage && (
        <div className="p-4 bg-destructive/10 border border-destructive rounded-lg">
          <p className="text-sm text-destructive">{errorMessage}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="contactFirstName">First Name</Label>
          <Input
            id="contactFirstName"
            type="text"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            required
            className="bg-background border-border mt-2"
          />
        </div>
        <div>
          <Label htmlFor="contactLastName">Last Name</Label>
          <Input
            id="contactLastName"
            type="text"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            required
            className="bg-background border-border mt-2"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="contactEmail">Email Address</Label>
        <Input
          id="contactEmail"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="bg-background border-border mt-2"
        />
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={6}
          className="bg-background border-border mt-2"
        />
      </div>

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-silver text-background hover:bg-silver-light"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
