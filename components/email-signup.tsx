"use client"

import type React from "react"

export function EmailSignup() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="p-1 bg-gradient-to-r from-[oklch(0.7_0.25_350)] via-[oklch(0.65_0.25_240)] via-[oklch(0.7_0.25_150)] via-[oklch(0.8_0.2_90)] to-[oklch(0.75_0.25_50)] rounded-lg">
        <div className="bg-background rounded-lg p-8 md:p-12">
          <div className="max-w-md mx-auto">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSe1eY1KvE67tlkl3kVw7_1odLAGDO5qDCBG79En11RdZO0AvQ/viewform?embedded=true"
              width="100%"
              height={407}
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-lg"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
